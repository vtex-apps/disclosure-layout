import React, { FC } from 'react'
import { DisclosureLayout, DisclosureLayoutProps } from '@vtex/disclosure'

const Layout: FC<DisclosureLayoutProps> = ({
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

Layout.displayName = 'DisclosureLayout'

export default Layout
