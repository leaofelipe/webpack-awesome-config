import React from 'react'
import { shallow } from 'enzyme'
import EmptyComponent from '../../components/EmptyComponent'

describe('Empty Component', () => {
  test('should be rendered correctly', () => {
    const wrapper = shallow(<EmptyComponent />)
    expect(wrapper).toMatchSnapshot()
  })
})
