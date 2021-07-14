import DiscussionBoard from "../components/DiscussionPage/DiscussionBoard";
import { create } from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";


describe(`Discussion board testing`, () => {

    it(`Should match the snapshot`, () => {
        const instance = create(<BrowserRouter><DiscussionBoard /></BrowserRouter>).toJSON();
        expect(instance).toMatchSnapshot();
    })
})
//Click on one of tabs to fully test- COME BACK TO THIS!