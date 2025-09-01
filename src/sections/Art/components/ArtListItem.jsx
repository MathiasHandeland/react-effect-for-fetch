import PublicationHistoryList from "./PublicationHistoryList";

function ArtListItem({ artwork, baseUrl }) {
    return (
        <li key={artwork.id} className="artwork">
            <div className="frame">
                <img src={`${baseUrl}${artwork.imageURL}`} alt={artwork.title} />
            </div>
            <h3>{artwork.title}</h3>
            <p>Artist: {artwork.artist}</p>
            <PublicationHistoryList publicationHistory={artwork.publicationHistory} />
        </li>
    );
}

export default ArtListItem;