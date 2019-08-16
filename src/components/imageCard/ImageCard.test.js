import React from 'react';
import ImageCard  from "./";
import { render } from 'enzyme';

describe('ImageCard ', () => {
    const imageMock = {
        id: '123',
        alt_description: 'Alt Desc',
        urls:{
            small: 'somePng.jpg',
        }
    };

    it('should render correctly', () => {
        const wrapper = render(<ImageCard image={imageMock} />);
        expect(wrapper).toMatchSnapshot();
    });

});