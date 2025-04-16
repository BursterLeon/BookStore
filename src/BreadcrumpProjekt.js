import {cats} from "./dataLong";
import {ID} from "./dataLong";

function Breadcrump() {

    const feld = cats;
    let text = [];

    console.log(feld);
    console.log(ID);

    for (let i=0; i<feld.length-1; i++) {
        text.push(<li className="breadcrumb-item" key={i} > {feld[i]} </li>);
    }
    text.push(<li className="breadcrumb-item active" key={feld.length-1} aria-current="page">{feld[feld.length-1]}</li>);

    return(
        <div>

            <nav aria-label="breadcrump">
                <ol className="breadcrumb">
                    {text}
                </ol>
            </nav>

        </div>
    )
}

export default Breadcrump;