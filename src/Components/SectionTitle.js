
function SectionTitle({titleText, linkText, linkURL, hasLink, hasCounter, totalItems}) {    
    return (
        <div className="flex justify-between mx-5">
            <span className="font-bold mb-4 text-lg">{titleText} {hasCounter && `(${totalItems+1}p)`}</span>
            {hasLink && <span className="text-sm text-alternate1 after:content-['→']">{linkText} </span>}
        </div>
 )
}

export {SectionTitle};