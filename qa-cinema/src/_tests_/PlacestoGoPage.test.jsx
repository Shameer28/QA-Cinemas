import PlacestoGoPage from "../components/PlacesToGoPage/PlacesToGo";
import { create } from 'react-test-renderer';

describe('Places to go page testing', () => {

    it(`Should match the snapshot`, () => {
        const instance = create(<PlacestoGoPage />).toJSON();
        expect(instance).toMatchSnapshot();
    })
})


