import React, { FC, useMemo, ComponentType } from 'react'
import {
  DisclosureTrigger,
  DisclosureTriggerProps,
  useDisclosure,
} from '@vtex/disclosure'
import { useCssHandles, applyModifiers } from 'vtex.css-handles'

interface Props
  extends Omit<DisclosureTriggerProps, 'htmlProps' | 'show' | 'hide'> {
  blockClass?: string
  Show?: ComponentType
  Hide?: ComponentType
}

const CSS_HANDLES = ['trigger'] as const

const Trigger: FC<Props> = ({ as, children, Show, Hide }) => {
  const handles = useCssHandles(CSS_HANDLES)
  const { state } = useDisclosure()
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
    <DisclosureTrigger
      as={as}
      htmlProps={htmlProps}
      show={Show ? <Show /> : undefined}
      hide={Hide ? <Hide /> : undefined}
    >
      {children}
    </DisclosureTrigger>
  )
}

Trigger.displayName = 'DisclosureTrigger'

export default Trigger
