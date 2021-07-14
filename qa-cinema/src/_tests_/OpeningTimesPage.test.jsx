import OpeningTimesPage from "../components/OpeningTimesPage/OpeningTimesPage";
import { create } from 'react-test-renderer';

describe('Opening Times Page testing', () => {

    it(`Should match the snapshot`, () => {
        const instance = create(<OpeningTimesPage />).toJSON();
        expect(instance).toMatchSnapshot();
    })
})

