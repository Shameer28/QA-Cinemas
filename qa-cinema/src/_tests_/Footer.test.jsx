import Footer from '../components/sharedcomponents/Footers'
import { create } from 'react-test-renderer';


describe(`Footer testing`, () => {

    it(`Should match the snapshot`, () => {
        const instance = create(<Footer/>).toJSON();
        expect(instance).toMatchSnapshot();
    })
})