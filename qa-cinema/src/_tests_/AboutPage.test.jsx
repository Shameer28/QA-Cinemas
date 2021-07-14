import AboutPage from "../components/AboutPage/AboutPage";
import { create } from 'react-test-renderer';


describe(`About Page testing`, () => {

    it(`Should match the snapshot`, () => {
        const instance = create(<AboutPage />).toJSON();
        expect(instance).toMatchSnapshot();
    })
})