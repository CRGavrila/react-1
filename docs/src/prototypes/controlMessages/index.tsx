import * as React from 'react'
import { Chat, Text } from '@stardust-ui/react'
import { ControlMessage, CustomProvider } from './ControlMessages'

let keyId = 1

const userNames = [
  'Anne Joe',
  'Michael Joe',
  'Steve Joe',
  'Susan Doe',
  'Arthur Joe',
  'Ali Joe',
  'Frank Joe',
]

const items = [
  // call start
  <ControlMessage
    icon={{
      name: 'call',
      variables: siteVars => ({ color: siteVars.brand, outline: false }),
    }}
    content={
      <>
        <Text content="Call started" />
        <Text content="8/7 9:02 AM" />
      </>
    }
  />,
  // call end
  <ControlMessage
    icon="call"
    content={
      <>
        <Text content="Call ended" />
        <Text content="35m 59s" />
        <Text content="8/7 9:38 AM" />
      </>
    }
  />,
  // group name change
  <ControlMessage
    icon={{ name: 'pencil', size: 'small' }}
    content={
      <>
        <Text content="John Doe" important />
        <Text content="changed the group name to" />
        <Text content="Other group name" important />
      </>
    }
  />,
  // user add
  <ControlMessage
    icon={{ name: 'add user', size: 'small' }}
    content={
      <>
        <Text content="John Doe" important />
        <Text content="added" />
        <Text content="Jane Doe" important />
        <Text content={`and ${userNames.length - 1} others to the conversation.`} />
      </>
    }
    expandedContent={userNames.map(userName => (
      <div key={`msg-content-${keyId++}`}>
        <Text content="John Doe" important />
        <Text content="added" />
        <Text content={userName} important />
        <Text content="to the conversation." />
      </div>
    ))}
  />,
  // user left chat
  <ControlMessage
    icon={{ name: 'user x', size: 'small' }}
    content={
      <>
        <Text content="John Doe" important />
        <Text content="left the chat." />
      </>
    }
  />,
  // user join
  <ControlMessage
    icon={{ name: 'add user', size: 'small' }}
    content={
      <>
        <Text content={userNames[0]} important />
        <Text content={`and ${userNames.length - 1} others joined the conversation.`} />
      </>
    }
    expandedContent={userNames.map(userName => (
      <div key={`msg-content-${keyId++}`}>
        <Text content={userName} important />
        <Text content="joined the conversation." />
      </div>
    ))}
  />,
].map(content => ({
  content,
  key: `msg-${keyId++}`,
}))

const ControlMessages = () => (
  <CustomProvider>
    <Chat items={items} />
  </CustomProvider>
)

export default ControlMessages
