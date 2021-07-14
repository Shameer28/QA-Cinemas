import Screens from '../components/Screens/Screen'
import { create } from 'react-test-renderer';


describe(`Screens testing`, () => {

    it(`Should match the snapshot`, () => {
        const instance = create(<Screens/>).toJSON();
        expect(instance).toMatchSnapshot();
    })
})