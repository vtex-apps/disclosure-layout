import React, { FC } from 'react'
import {
  DisclosureStateIndicator,
  DisclosureStateIndicatorProps,
} from '@vtex/disclosure'

const StateIndicator: FC<DisclosureStateIndicatorProps> = ({ show, hide }) => {
  return <DisclosureStateIndicator show={show} hide={hide} />
}

StateIndicator.displayName = 'DisclosureStateIndicator'

export default StateIndicator
