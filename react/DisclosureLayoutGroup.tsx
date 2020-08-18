import React, { FC } from 'react'
import {
  DisclosureLayoutGroup,
  DisclosureLayoutGroupProps,
} from '@vtex/disclosure'

const Group: FC<DisclosureLayoutGroupProps> = ({ maxVisible, children }) => {
  return (
    <DisclosureLayoutGroup maxVisible={maxVisible}>
      {children}
    </DisclosureLayoutGroup>
  )
}

export default Group
