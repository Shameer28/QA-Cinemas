import Homepage from '../components/HomePage/HomePage'
import { create } from 'react-test-renderer';


describe(`Homepage testing`, () => {

    it(`Should match the snapshot`, () => {
        const instance = create(<Homepage/>).toJSON();
        expect(instance).toMatchSnapshot();
    })
})