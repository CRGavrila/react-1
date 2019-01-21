import { RtlFunc } from '../types'

const radioGroupRtlAttributes: RtlFunc = (props: any) => {
  const { start, main, end } = props
  return {
    start: generateRtlAttributes(start),
    main: generateRtlAttributes(main),
    end: generateRtlAttributes(end),
  }
}

const generateRtlAttributes = (element: any) => {
  return typeof element === 'string' ? { dir: 'auto' } : {}
}

export default radioGroupRtlAttributes