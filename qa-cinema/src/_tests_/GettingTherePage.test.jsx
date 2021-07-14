import GettingThere from '../components/GettingTherePage/GettingThere'
import { create } from 'react-test-renderer';


describe(`Getting There testing`, () => {

    it(`Should match the snapshot`, () => {
        const instance = create(<GettingThere/>).toJSON();
        expect(instance).toMatchSnapshot();
    })
})