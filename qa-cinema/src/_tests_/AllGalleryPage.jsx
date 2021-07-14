import AllGalleryPage from "../components/AllGalleryPage/AllGalleryPage";

describe("All Gallery Page Testing", () => {

    it("Snapshot Check" , () => {
        const isntance = create(<AllGalleryPage/>).toJSON();
        expect(instance).toMatchSnapshot();
    })

})