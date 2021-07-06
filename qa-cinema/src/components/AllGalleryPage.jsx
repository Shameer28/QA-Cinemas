import PosterLink from "./props/PosterLink";

const AllGalleryPage = () => {

    // GET axios Call
    // GETALL - Movies (id & image)
    const data = [{ "id": -1, "Image": "https://www.listchallenges.com/f/items2020/2324fee1-6a52-45f8-b62a-6cc5599eb35a.jpg", "Title": "Detective", "Actors": ["Jim Carrey", "Johnny Depp", "Jack Black", "John Cena", "Jake Paul"], "Director": "Jean-Pierre Jeunet", "ShowTimes": ["20/20/20", "10/J/J10"], "Plot": "plot here lol lermns" }];

    return (<div>
        <h1>All Movies Ever Of All Time</h1>
        {data.map(x => <PosterLink image={x.Image} id={x.id} />)}
    </div>);
}

export default AllGalleryPage;