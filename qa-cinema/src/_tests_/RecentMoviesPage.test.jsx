import RecentMoviePage from '../components/RecentMoviePage/RecentMoviePage'
import { create } from 'react-test-renderer';


describe(`Recent Movie Page testing`, () => {

    it(`Should match the snapshot`, () => {
        const instance = create(<RecentMoviePage/>).toJSON();
        expect(instance).toMatchSnapshot();
    })
})