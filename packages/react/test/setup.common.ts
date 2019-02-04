/**
 * Setup
 * This is the bootstrap code that is run before any tests, utils, mocks.
 */
import * as enzyme from 'enzyme'
// @ts-ignore
import Adapter from 'enzyme-adapter-react-16'
console.log(Adapter)
enzyme.configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true,
})
