import ListMovies from "../components/sharedcomponents/ListMovies";
import { create } from 'react-test-renderer';


describe(`List Movies Page testing`, () => {

    it(`Should match the snapshot`, () => {
        const instance = create(<ListMovies />).toJSON();
        expect(instance).toMatchSnapshot();
    })
})