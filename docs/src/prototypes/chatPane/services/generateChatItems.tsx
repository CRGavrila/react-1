import * as React from 'react'
import { Chat, Divider } from '@stardust-ui/react'
import { IChat, ChatItemType, generateChatProps } from './index'

const getElementType = (itemType: ChatItemType) => {
  switch (itemType) {
    case ChatItemType.message:
      return Chat.Message
    case ChatItemType.divider:
      return Divider
  }
}

export const generateChatItems = (chat: IChat): JSX.Element[] => {
  return generateChatProps(chat).map(({ itemType, ...props }, index) => {
    const ElementType = getElementType(itemType)
    return (
      <Chat.Item key={`chat-item-${index}`}>
        <ElementType {...props} />
      </Chat.Item>
    )
  })
}