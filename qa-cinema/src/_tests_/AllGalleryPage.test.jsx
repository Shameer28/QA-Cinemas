import AllGalleryPage from '../components/AllGalleryPage/AllGalleryPage'
import { create } from 'react-test-renderer';


describe(`All Gallery Page testing`, () => {

    it(`Should match the snapshot`, () => {
        const instance = create(<AllGalleryPage/>).toJSON();
        expect(instance).toMatchSnapshot();
    })
})

