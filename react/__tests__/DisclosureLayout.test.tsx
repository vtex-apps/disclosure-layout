import * as React from 'react'
import { render, waitFor } from '@vtex/test-tools/react'

import DisclosureLayout from '../DisclosureLayout'
import DisclosureContent from '../DisclosureContent'
import DisclosureTrigger from '../DisclosureTrigger'

test('should change the CSS Handles', async () => {
  const { getByText } = render(
    <DisclosureLayout>
      <DisclosureTrigger>Trigger</DisclosureTrigger>
      <DisclosureContent>Content</DisclosureContent>
    </DisclosureLayout>
  )

  const content = getByText('Content')

  expect(content).toHaveClass('content--hidden')

  const trigger = getByText('Trigger')

  expect(trigger).toHaveClass('trigger--hidden')

  trigger.click()

  expect(content).toHaveClass('content--visible')
  expect(trigger).toHaveClass('trigger--visible')
})

test('should render hide and show props', async () => {
  const Show = () => <>Show</>
  const Hide = () => <>Hide</>

  const { getByText } = render(
    <DisclosureLayout>
      <DisclosureTrigger Show={Show} Hide={Hide} />
      <DisclosureContent>Content</DisclosureContent>
    </DisclosureLayout>
  )

  const content = getByText('Content')

  expect(content).not.toBeVisible()

  getByText('Show').click()
  expect(content).toBeVisible()

  getByText('Hide').click()
  await waitFor(() => expect(content).not.toBeVisible())
})

test('should show if initialVisibility is visible', async () => {
  const { getByText } = render(
    <DisclosureLayout initialVisibility="visible">
      <DisclosureTrigger>Trigger</DisclosureTrigger>
      <DisclosureContent>Content</DisclosureContent>
    </DisclosureLayout>
  )

  const content = getByText('Content')

  expect(content).toBeVisible()

  getByText('Trigger').click()
  expect(content).not.toBeVisible()
})
