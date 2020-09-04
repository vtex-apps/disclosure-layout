import React, { FC, ComponentType } from 'react'
import { DisclosureStateIndicator } from '@vtex/disclosure'

interface Props {
  Show?: ComponentType
  Hide?: ComponentType
}

const StateIndicator: FC<Props> = ({ Show, Hide }) => {
  return (
    <DisclosureStateIndicator
      show={Show ? <Show /> : undefined}
      hide={Hide ? <Hide /> : undefined}
    />
  )
}

StateIndicator.displayName = 'DisclosureStateIndicator'

export default StateIndicator
