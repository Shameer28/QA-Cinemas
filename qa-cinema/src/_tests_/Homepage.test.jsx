import Homepage from '../components/HomePage/HomePage'
import { render } from "@testing-library/react";
import { create } from 'react-test-renderer';
import Carousel from './../components/HomePage/Carousel'

describe(`Homepage testing`, () => {

    it(`Should match the snapshot`, () => {
        const instance = create(<Homepage/>).toJSON();
        expect(instance).toMatchSnapshot();
    })
})