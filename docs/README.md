📢 Use this project, [contribute](https://github.com/vtex-apps/disclosure-layout) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Disclosure Layout

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

![Media Placeholder](https://user-images.githubusercontent.com/52087100/71204177-42ca4f80-227e-11ea-89e6-e92e65370c69.png)

## Configuration

1. Adding the app as a theme dependency in the `manifest.json` file:

```json
  "dependencies": {
    "vtex.disclosure-layout": "1.x"
  }
```

Now, you are able to use all the blocks exported by the `disclosure-layout` app. Check out the full list below:

| Block name                   | Description                                                                                                                                                                                                                                                  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `disclosure-layout`          | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red) Layout block that enables you to build the disclosure using its 3 children blocks: `disclosure-trigger`, `disclosure-content`, and `disclosure-state-indicator`. |
| `disclosure-trigger`         | Use this block to wrap the blocks that when clicked will toggle the visibility of the `disclosure-content`.                                                                                                                                                  |
| `disclosure-content`         | Use this block to wrap the blocks that will render the content.                                                                                                                                                                                              |
| `disclosure-state-indicator` | Helper block to render chevron or other UI elements that change when the disclosure it's open or closed. .                                                                                                                                                   |
| `disclosure-layout-group`    | Use this block to wrap many `disclosure-layouts`. This block will control the visibility of them, making it possible to have only one `disclosure-layout` open at a time.                                                                                    |
| `disclosure-trigger-group`   | This block triggers the visibility of all the `disclosure-layouts` inside the `disclosure-layout-group`.                                                                                                                                                     |

2. Examples:

### Simple

```json
{
  "disclosure-layout#simple": {
    "children": ["disclosure-trigger#simple", "disclosure-content#simple"]
  },
  "disclosure-trigger#simple": {
    "children": ["rich-text#question"]
  },
  "disclosure-content#simple": {
    "children": ["rich-text#answer"]
  },
  "rich-text#question": {
    "props": {
      "text": "How can I change my shipping address?"
    }
  },
  "rich-text#answer": {
    "props": {
      "text": "Call us at the number (212) 1234-1234"
    }
  }
}
```

### Using `disclosure-layout-group`

```json
{
  "disclosure-layout-group#group": {
    "children": ["disclosure-layout#first", "disclosure-layout#second"]
  },

  "disclosure-layout#first": {
    "children": ["disclosure-trigger#first", "disclosure-content#first"]
  },
  "disclosure-trigger#first": {
    "children": ["rich-text#question1"]
  },
  "disclosure-content#first": {
    "children": ["rich-text#answer1"]
  },
  "rich-text#question1": {
    "props": {
      "text": "How can I change my shipping address?"
    }
  },
  "rich-text#answer1": {
    "props": {
      "text": "Call us at the number (212) 1234-1234."
    }
  },

  "disclosure-layout#second": {
    "children": ["disclosure-trigger#first", "disclosure-content#first"]
  },
  "disclosure-trigger#second": {
    "children": ["rich-text#question1"]
  },
  "disclosure-content#second": {
    "children": ["rich-text#answer1"]
  },
  "rich-text#question2": {
    "props": {
      "text": "How can I track my order?"
    }
  },
  "rich-text#answer2": {
    "props": {
      "text": "After logging into your account, you can find this info at the link Orders."
    }
  }
}
```

### Using `disclosure-state-indicator`

```json
{
  "disclosure-state-indicator": {
    "props": {
      "Show": "icon-angle--down",
      "Hide": "icon-angle--up"
    }
  }
}
```

### `disclosure-layout` props

| Prop name           | Type                  | Description                                                                                                                                                                                     | Default value                                  |
| ------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `initialVisibility` | `enum`                | `visible` to have it's content initially open, or `hidden` to be hidden.                                                                                                                        | `hidden`                                       |
| `animated`          | `boolean` or `number` | To perform animations, you must set this to `true`. It'll enable additional data-\* attributes on it's content which you can use as selectors in CSS. It will also ensure that the element will | only get hidden when the transition has ended. | `false` |

### `disclosure-trigger` props

| Prop Name    | Type     | Description                                                                                          | Default value |
| ------------ | -------- | ---------------------------------------------------------------------------------------------------- | ------------- |
| `Show`       | `Block`  | This block will be rendered when prompt to show the content                                          | `undefined`   |
| `Hide`       | `Block`  | This block will be rendered when prompt to hide the content                                          | `undefined`   |
| `as`         | `string` | The HTML tag that will be used.                                                                      | `button`      |
| `children`   | `Block`  | This block will be rendered if no `show` or `hide` is set                                            | `undefined`   |
| `blockClass` | `string` | Block container class. This prop’s set value functions as a block identifier for CSS customizations. | `undefined`   |

### `disclosure-content` props

| Prop Name    | Type     | Description                                                                                          | Default value |
| ------------ | -------- | ---------------------------------------------------------------------------------------------------- | ------------- |
| `blockClass` | `string` | Block container class. This prop’s set value functions as a block identifier for CSS customizations. | `undefined`   |
| `children`   | `Block`  | It's content                                                                                         | `undefined`   |

### `disclosure-state-indicator` props

| Prop Name | Type    | Description                                                 | Default value |
| --------- | ------- | ----------------------------------------------------------- | ------------- |
| `Show`    | `Block` | This block will be rendered when prompt to show the content | `undefined`   |
| `Hide`    | `Block` | This block will be rendered when prompt to hide the content | `undefined`   |

### `disclosure-layout-group` props

| Prop Name    | Type   | Description                                                                                                                                                 | Default value |
| ------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `maxVisible` | `enum` | Possible values `one` it will render only one child `disclosure-layout` content per group, or `many` to render any number of `disclosure-layout`'s content. | `one`         |

### `disclosure-trigger-group` props

| Prop Name    | Type     | Description                                                                                          | Default value |
| ------------ | -------- | ---------------------------------------------------------------------------------------------------- | ------------- |
| `Show`       | `Block`  | This block will be rendered when prompt to show the content                                          | `undefined`   |
| `Hide`       | `Block`  | This block will be rendered when prompt to hide the content                                          | `undefined`   |
| `as`         | `string` | The HTML tag that will be used.                                                                      | `button`      |
| `children`   | `Block`  | This block will be rendered if no `show` or `hide` is set                                            | `undefined`   |
| `blockClass` | `string` | Block container class. This prop’s set value functions as a block identifier for CSS customizations. | `undefined`   |

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles             |
| ----------------------- |
| `content`               |
| `content--visible`      |
| `content--hidden`       |
| `trigger`               |
| `trigger--visible`      |
| `trigger--hidden`       |
| `triggerGroup`          |
| `triggerGroup--visible` |
| `triggerGroup--hidden`  |

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->
