import React, { FC } from 'react'
import { DisclosureLayout, DisclosureLayoutProps } from '@vtex/disclosure'

const Group: FC<DisclosureLayoutProps> = ({
  initialVisibility,
  animated,
  children,
}) => {
  return (
    <DisclosureLayout initialVisibility={initialVisibility} animated={animated}>
      {children}
    </DisclosureLayout>
  )
}

export default Group
