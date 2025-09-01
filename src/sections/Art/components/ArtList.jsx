import ArtListItem from "./ArtListItem";

function ArtList({ artwork, baseUrl }) {
    return (
        <ul className="art-list">
            {artwork.map((artwork) => (
                <ArtListItem key={artwork.id} artwork={artwork} baseUrl={baseUrl} />
            ))}
        </ul>
    );
}

export default ArtList;
