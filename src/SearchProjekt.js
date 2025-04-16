import {books} from "./dataLong";
import './BooksProjekt.css';
function SearchProjekt ({searchWord,nurLieferbar}) {
    let booksNew = [];

    for (let i=0; i<books.length; i++) {
        let liefer = "ist lieferbar";
        if (!books[i].lieferbar)
            liefer = "ist NICHT lieferbar";
        if ((books[i].autor.toLowerCase().includes(searchWord.toLowerCase())
                || books[i].titel.toLowerCase().includes(searchWord.toLowerCase())
                || books[i].isbn==searchWord)
            && ( (!nurLieferbar) || nurLieferbar && books[i].lieferbar ))

        {
            let oneBook =
                <li>
                <div className="oneBook" key={i}>
                    <div ><span id="titel">{books[i].titel}</span> <br/> <span
                        id="autor">geschrieben von: {books[i].autor}</span></div>
                    <div><span id="preis">Preis: {books[i].preis}</span><span id="isbn"> ISBN: {books[i].isbn}</span>
                    </div>
                    <div><span>{liefer}</span></div>
                </div> </li>;
            booksNew.push(oneBook);
        }
    }
    return (
        <div >
            <ul className="books">
            {booksNew}
            </ul>
        </div>
    )
}
export default SearchProjekt;