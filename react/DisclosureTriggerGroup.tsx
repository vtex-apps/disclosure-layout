import React, { FC, useMemo } from 'react'
import {
  DisclosureTriggerGroup,
  DisclosureTriggerGroupProps,
  useDisclosureGroup,
} from '@vtex/disclosure'
import { useCssHandles, applyModifiers } from 'vtex.css-handles'

interface Props extends Omit<DisclosureTriggerGroupProps, 'htmlProps'> {
  blockClass?: string
}

const CSS_HANDLES = ['triggerGroup'] as const

const TriggerGroup: FC<Props> = ({ as, show, hide, children }) => {
  const handles = useCssHandles(CSS_HANDLES)
  const { state } = useDisclosureGroup()
  const visible = state?.allVisibility

  const htmlProps = useMemo(
    () => ({
      className: applyModifiers(
        handles.triggerGroup,
        visible === 'shown' ? 'visible' : 'hidden'
      ),
    }),
    [handles, visible]
  )

  return (
    <DisclosureTriggerGroup
      as={as}
      htmlProps={htmlProps}
      show={show}
      hide={hide}
    >
      {children}
    </DisclosureTriggerGroup>
  )
}

TriggerGroup.displayName = 'DisclosureTriggerGroup'

export default TriggerGroup
