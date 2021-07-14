import ClassificationPage from "../components/ClassificationPage/Classification";
import { create } from 'react-test-renderer';

describe('Classification page testing', () => {

    it(`Should match the snapshot`, () => {
        const instance = create(<ClassificationPage />).toJSON();
        expect(instance).toMatchSnapshot();
    })
})


