import React, { FC, useMemo } from 'react'
import {
  DisclosureContent,
  DisclosureContentProps,
  useDisclosureState,
} from '@vtex/disclosure'
import { useCssHandles, applyModifiers } from 'vtex.css-handles'

interface Props extends Omit<DisclosureContentProps, 'htmlProps'> {
  blockClass?: string
}

const CSS_HANDLES = ['content'] as const

const TriggerGroup: FC<Props> = ({ as, children }) => {
  const handles = useCssHandles(CSS_HANDLES)
  const state = useDisclosureState()
  const visible = state?.visible

  const htmlProps = useMemo(
    () => ({
      className: applyModifiers(
        handles.content,
        visible ? 'visible' : 'hidden'
      ),
    }),
    [handles, visible]
  )

  return (
    <DisclosureContent as={as} htmlProps={htmlProps}>
      {children}
    </DisclosureContent>
  )
}

export default TriggerGroup
