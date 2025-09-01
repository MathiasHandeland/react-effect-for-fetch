
function PublicationHistoryList({ publicationHistory }) {
    return (
        <>
            <h4>Publication History:</h4>
            <ul>
                {publicationHistory.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default PublicationHistoryList;
