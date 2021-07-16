import ContactPage from '../components/ContactPage/ContactPage'
import { create } from 'react-test-renderer';


describe(`Contact Page testing`, () => {

    it(`Should match the snapshot`, () => {
        const instance = create(<ContactPage/>).toJSON();
        expect(instance).toMatchSnapshot();
    })
})