import './OtherTerms.scss';
const OtherTerms = ({antonyms, synonyms, handleTermSearch}: any) => {
    const renderOtherTerms = ({list, label}: any) => {
        return (
            <div className="other-terms">
                <div className="other-terms-label">
                    {label}
                </div>
                <div className="other-terms__list" role="list">
                    {list.map((item: string, index: number) => <div className="other-terms__list-item" role="listitem" key={label + index + new Date().getTime()}>
                        <button onClick={() => handleTermSearch(item)}>{item}</button>
                    </div>)}
                </div>
            </div>
        );
    }

    return (
        <>
            {!!synonyms.length && renderOtherTerms({label: 'Synonyms', list: synonyms})}
            {!!antonyms.length && renderOtherTerms({label: 'Antonyms', list: antonyms})}
        </>
    )
}

export default OtherTerms;