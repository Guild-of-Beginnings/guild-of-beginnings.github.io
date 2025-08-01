export default function BookLink({link, title, displayTextLine1, displayTextLine2, classInfo, defaultFont = false}) {

    return (
        <>
            <button className={`extra-wide ${classInfo} ${defaultFont ? "default-font" : ""}`} onClick={() => { window.location.href=link; }} title={title} target="_blank" rel="noopener noreferrer">{displayTextLine1}<br />{displayTextLine2}</button>
        </>
    );
}