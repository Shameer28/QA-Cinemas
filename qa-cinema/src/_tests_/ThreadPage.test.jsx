import ThreadPage from "../components/DiscussionPage/ThreadPage";
import { create } from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";


describe(`Thread Page testing`, () => {

    it(`Should match the snapshot`, () => {
        const instance = create(<BrowserRouter><ThreadPage /></BrowserRouter>).toJSON();
        expect(instance).toMatchSnapshot();
    })
})