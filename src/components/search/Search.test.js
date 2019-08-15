import React from 'react';
import Search from './';
import { shallow, render } from 'enzyme';

describe('Search', () => {
    const onChangeFn = jest.fn(() => 'change');
    let value = 'value';

    beforeEach(() => {
        value = 'value';
    });

    it('should call onChange prop function', () => {
        const wrapper = shallow(<Search onChange={onChangeFn}/>);
        const input = wrapper.find('input');

        input.simulate('change');

        expect(onChangeFn).toHaveBeenCalled();
    });

    it('should set attributes from props', () => {
        const wrapper = render(<Search value={value}/>);
        expect(wrapper).toMatchSnapshot();
    });
});