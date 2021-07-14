import AllGalleryPage from "../components/AllGalleryPage/AllGalleryPage";
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import PosterLink from "../components/sharedcomponents/PosterLink";

describe("All Gallery Page Testing", () => {

    it("Snapshot Check" , () => {
        const instance = create(<AllGalleryPage/>).toJSON();
        expect(instance).toMatchSnapshot();
    })

    it("Post Link are created from API", () => {
        render(<AllGalleryPage/>)
        const meh = screen.getAllByText("fast and furious 9");
        console.log(meh)
        expect(meh).toBe(3);
    })

})
