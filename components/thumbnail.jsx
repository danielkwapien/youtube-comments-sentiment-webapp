const Thumbnail = ({ src, alt }) => {
    return (
        <div>
            <img src={src.url} alt={alt} />
        </div>
    );
}

export default Thumbnail;