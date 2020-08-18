import * as React from 'react'
import { render, waitFor } from '@vtex/test-tools/react'

import DisclosureLayoutGroup from '../DisclosureLayoutGroup'
import DisclosureTriggerGroup from '../DisclosureTriggerGroup'
import DisclosureLayout from '../DisclosureLayout'
import DisclosureContent from '../DisclosureContent'
import DisclosureTrigger from '../DisclosureTrigger'

test('trigger group', async () => {
  const { getByText } = render(
    <DisclosureLayoutGroup>
      <DisclosureLayout>
        <DisclosureTrigger>Trigger 1</DisclosureTrigger>
        <DisclosureContent>Content 1</DisclosureContent>
      </DisclosureLayout>
      <DisclosureLayout>
        <DisclosureTrigger>Trigger 2</DisclosureTrigger>
        <DisclosureContent>Content 2</DisclosureContent>
      </DisclosureLayout>
      <DisclosureLayout>
        <DisclosureTrigger>Trigger 3</DisclosureTrigger>
        <DisclosureContent>Content 3</DisclosureContent>
      </DisclosureLayout>

      <DisclosureTriggerGroup>Trigger Group</DisclosureTriggerGroup>
    </DisclosureLayoutGroup>
  )

  const content1 = getByText('Content 1')
  const triggerGroup = getByText('Trigger Group')

  expect(content1).toHaveClass('content--hidden')
  expect(triggerGroup).toHaveClass('triggerGroup--hidden')

  triggerGroup.click()
  await waitFor(() =>
    expect(triggerGroup).toHaveAttribute('aria-expanded', 'true')
  )

  expect(content1).toHaveClass('content--visible')
  expect(triggerGroup).toHaveClass('triggerGroup--visible')
})

test('trigger with show and hide', async () => {
  const { getByText } = render(
    <DisclosureLayoutGroup>
      <DisclosureLayout>
        <DisclosureTrigger>Trigger 1</DisclosureTrigger>
        <DisclosureContent>Content 1</DisclosureContent>
      </DisclosureLayout>
      <DisclosureLayout>
        <DisclosureTrigger>Trigger 2</DisclosureTrigger>
        <DisclosureContent>Content 2</DisclosureContent>
      </DisclosureLayout>
      <DisclosureLayout>
        <DisclosureTrigger>Trigger 3</DisclosureTrigger>
        <DisclosureContent>Content 3</DisclosureContent>
      </DisclosureLayout>

      <DisclosureTriggerGroup show="SHOW ALL" hide="HIDE ALL" />
    </DisclosureLayoutGroup>
  )

  const content1 = getByText('Content 1')
  const content2 = getByText('Content 2')
  const content3 = getByText('Content 3')

  getByText('SHOW ALL').click()
  await waitFor(() => expect(content1).toBeVisible())
  expect(content2).toBeVisible()
  expect(content3).toBeVisible()

  getByText('HIDE ALL').click()
  expect(content1).not.toBeVisible()
  expect(content2).not.toBeVisible()
  expect(content3).not.toBeVisible()
})
