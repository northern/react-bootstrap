
import React from 'react';
import { mount } from 'enzyme';

import TextField from './TextField';

describe('<TextField />', () => {
  let wrapper;

  afterAll(() => {
    wrapper.unmount();
  })

  it('renders the <input> tag', () => {
    wrapper = mount(<TextField />);

    const input = wrapper.find('input');

    expect(input).toHaveLength(1);
    expect(input.prop('type')).toBe('text');
    expect(input.prop('className')).toBe('form-control');
  });

  it('renders the given value', () => {
    wrapper = mount(<TextField value={123} />);
    
    expect(wrapper.find('input').prop('value')).toBe(123);
  });

  it('renders one className', () => {
    wrapper = mount(<TextField className="foo" />);
    
    expect(wrapper.find('input').prop('className')).toContain('foo');
  });

  it('renders more than one className', () => {
    wrapper = mount(<TextField className="foo bar" />);

    const className = wrapper.find('input').prop('className');
    
    expect(className).toContain('foo');
    expect(className).toContain('bar');
  });

  it('renders the placeholder', () => {
    wrapper = mount(<TextField placeholder="foo bar" />);

    expect(wrapper.find('input').prop('placeholder')).toBe('foo bar');
  });

  it('renders as disabled', () => {
    wrapper = mount(<TextField enabled={false} />);

    expect(wrapper.find('input').prop('disabled')).toBe(true);
  });

  it('renders in an error state', () => {
    wrapper = mount(<TextField error="fail" />);

    expect(wrapper.find('input').prop('className')).toContain('is-invalid');
  });

  it('reacts to an onChange', () => {
    const onChange = jest.fn();

    wrapper = mount(<TextField onChange={onChange} />);
    wrapper.find('input').simulate('change');

    expect(onChange).toHaveBeenCalled();
  });
});
