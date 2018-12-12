import * as React from 'react'
import * as PropTypes from 'prop-types'

import { Extendable, ShorthandValue } from '../../../types/utils'
import {
  childrenExist,
  createShorthandFactory,
  RenderResultConfig,
  UIComponent,
  UIComponentProps,
  ChildrenComponentProps,
  ContentComponentProps,
  commonPropTypes,
  customPropTypes,
} from '../../lib'
import Slot from '../Slot/Slot'
import ChatGutter from './ChatGutter'

export interface ChatItemProps
  extends UIComponentProps,
    ChildrenComponentProps,
    ContentComponentProps<ShorthandValue> {
  /** Chat items can have a gutter. */
  gutter?: ShorthandValue

  /** Indicates whether the gutter is positioned at the start or the end. */
  gutterPosition?: 'start' | 'end'
}

/**
 * A chat item represents a single event in a chat.
 */
class ChatItem extends UIComponent<Extendable<ChatItemProps>, any> {
  static className = 'ui-chat__item'
  static create: Function
  static displayName = 'ChatItem'

  static propTypes = {
    ...commonPropTypes.createCommon({
      content: 'shorthand',
    }),
    gutter: customPropTypes.itemShorthand,
    gutterPosition: PropTypes.oneOf(['start', 'end']),
  }

  static defaultProps = {
    as: 'li',
    gutterPosition: 'start',
  }

  renderComponent({ ElementType, classes, rest }: RenderResultConfig<ChatItemProps>) {
    const { children } = this.props

    return (
      <ElementType {...rest} className={classes.root}>
        {childrenExist(children) ? children : this.renderChatItem()}
      </ElementType>
    )
  }

  private renderChatItem() {
    const { content, gutter, gutterPosition } = this.props
    const gutterElement =
      gutter && ChatGutter.create(gutter, { defaultProps: { position: gutterPosition } })

    return (
      <>
        {gutterPosition === 'start' && gutterElement}
        {Slot.create(content)}
        {gutterPosition === 'end' && gutterElement}
      </>
    )
  }
}

ChatItem.create = createShorthandFactory(ChatItem, 'content')

export default ChatItem
