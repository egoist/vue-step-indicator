import { mount } from '@vue/test-utils'
import StepIndicator from './'

test('it works', () => {
  const wrapper = mount(StepIndicator)
  expect(wrapper.isVueInstance()).toBe(true)
})
