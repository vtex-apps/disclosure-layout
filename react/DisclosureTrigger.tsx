import React, { FC, useMemo } from 'react'
import {
  DisclosureTrigger,
  DisclosureTriggerProps,
  useDisclosureState,
} from '@vtex/disclosure'
import { useCssHandles, applyModifiers } from 'vtex.css-handles'

interface Props extends Omit<DisclosureTriggerProps, 'htmlProps'> {
  blockClass?: string
}

const CSS_HANDLES = ['trigger'] as const

const TriggerGroup: FC<Props> = ({ as, children, show, hide }) => {
  const handles = useCssHandles(CSS_HANDLES)
  const state = useDisclosureState()
  const visible = state?.visible

  const htmlProps = useMemo(
    () => ({
      className: applyModifiers(
        handles.trigger,
        visible ? 'visible' : 'hidden'
      ),
    }),
    [handles, visible]
  )

  return (
    <DisclosureTrigger as={as} htmlProps={htmlProps} show={show} hide={hide}>
      {children}
    </DisclosureTrigger>
  )
}

export default TriggerGroup
