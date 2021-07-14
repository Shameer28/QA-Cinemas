const PosterLink = ({image, _id, title}) => {
    return (
        <div>
            <a href={"/movieDetail/" + _id}> <img className="movie" src={image} alt="Click for More Details" /></a><br></br>
                <div style={{ color: "white", width: "100%", fontWeight: "400", fontfamily: "isonormregular, sans-serif", letterSpacing: ".15em", textTransform: "uppercase", lineHeight: "1.1", textAlign: "center", width: "75%" }}><br></br>{title}</div>
        </div>
    );
}
 
export default PosterLink;