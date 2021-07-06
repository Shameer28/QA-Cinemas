const PosterLink = ({image, id}) => {
    return ( <a href={"/movieDetail/"+id}> <img src={image} alt="Click for More Details"/></a> );
}
 
export default PosterLink;