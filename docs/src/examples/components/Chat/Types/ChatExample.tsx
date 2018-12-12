import React from 'react'
import { Avatar, Chat, Divider } from '@stardust-ui/react'

const janeAvatar = {
  image: 'public/images/avatar/small/ade.jpg',
  status: { color: 'green', icon: 'check' },
}

const ChatExample = () => (
  <Chat>
    <Chat.Item
      content={
        <Chat.Message content="Hello" author="John Doe" timestamp="Yesterday, 10:15 PM" mine />
      }
    />
    <Chat.Item
      gutter={
        <Chat.Gutter>
          <Avatar {...janeAvatar} />
        </Chat.Gutter>
      }
      content={<Chat.Message content="Hi" author="Jane Doe" timestamp="Yesterday, 10:15 PM" />}
    />
    <Chat.Item content={<Chat.Message content="What's up?" />} />
    <Chat.Item
      content={
        <Chat.Message
          content="Would you like to grab a lunch?"
          author="John Doe"
          timestamp="Yesterday, 10:16 PM"
          mine
        />
      }
    />
    <Chat.Item
      gutter={
        <Chat.Gutter>
          <Avatar {...janeAvatar} />
        </Chat.Gutter>
      }
      content={
        <Chat.Message
          content="Sure! Let's try the new place downtown"
          author="Jane Doe"
          timestamp="Yesterday, 10:15 PM"
        />
      }
    />
    <Chat.Item>
      <Divider content="Today" color="primary" important />
    </Chat.Item>
    <Chat.Item
      content={
        <Chat.Message
          content="Let's have a call"
          author="John Doe"
          timestamp="Today, 11:15 PM"
          mine
        />
      }
    />
  </Chat>
)

export default ChatExample
