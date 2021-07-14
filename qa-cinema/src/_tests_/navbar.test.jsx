import NavBar from "../components/sharedcomponents/Navbar";
import { create } from 'react-test-renderer';


describe(`Navbar testing`, () => {

    it(`Should match the snapshot`, () => {
        const instance = create(<NavBar />).toJSON();
        expect(instance).toMatchSnapshot();
    })
})