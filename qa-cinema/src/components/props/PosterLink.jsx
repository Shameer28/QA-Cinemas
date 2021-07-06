const PosterLink = ({image, _id}) => {
    return ( <a href={"/movieDetail/"+ _id}> <img src={image} alt="Click for More Details"/></a> );
}
 
export default PosterLink;