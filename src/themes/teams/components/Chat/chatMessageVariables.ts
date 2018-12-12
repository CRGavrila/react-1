import { pxToRem } from '../../utils'

export interface ChatMessageVariables {
  message: {
    width: string
    backgroundColor: string
    backgroundColorMine: string
    borderRadius: string
    color: string
    padding: string
    margin: string
  }
  author: { margin: string }
  content: { focusOutlineColor: string }
}

export default (siteVars): ChatMessageVariables => ({
  message: {
    width: '80%',
    backgroundColor: siteVars.white,
    backgroundColorMine: '#E0E0ED',
    borderRadius: '0.3rem',
    color: 'rgb(64, 64, 64)',
    padding: pxToRem(14),
    margin: pxToRem(40),
  },
  author: { margin: pxToRem(10) },
  content: { focusOutlineColor: siteVars.brand },
})
