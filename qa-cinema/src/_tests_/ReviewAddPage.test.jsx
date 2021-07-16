import ReviewAddPage from "../components/DiscussionPage/ReviewAddPage";
import { create } from 'react-test-renderer';



describe(`Review Add Page testing`, () => {

    it(`Should match the snapshot`, () => {
        const instance = create(<ReviewAddPage />).toJSON();
        expect(instance).toMatchSnapshot();
    })
})