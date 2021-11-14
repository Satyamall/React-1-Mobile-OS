import style from "./List.module.css";

function AnotherList() {
    return (
        <>
            <h1>Mobile Manufacturers</h1>
            <ul>
                <li className={style.rectangle}>Samsung</li>
                <li className={style.rectangle}>HTC</li>
                <li>Micromax</li>
                <li className={style.hallow}>Apple</li>
            </ul>
        </>
    )
}

export default AnotherList;