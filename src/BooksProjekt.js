import './BooksProjekt.css';
import SearchProjekt from "./SearchProjekt";
import {useState} from "react";
import img from './BLUE_STEREO_3D_Time_for_Space_Wiggle.gif';
import SearchAPI from "./SearchAPI";
import BreadcrumpProjekt from "./BreadcrumpProjekt";
function BooksProjekt () {
    const [state, setState] = useState({word: "", l: false});
    function Books () {

        let lieferbar = false;
        if (document.querySelector('#check').checked)
            lieferbar = true;
        setState({word: (document.querySelector('#text1').value), l:lieferbar});
        console.log(state.word);
    }

    return (
        <div className="body">

        <div className="flex">
            <div id="img"> <img className="cimg" src={img} alt="Logo" /> </div>
            <h1 className="header">Blue Sun BOOKSTORE</h1>
            <div>
                <BreadcrumpProjekt />
            </div>

            <div className="form-control" id="input">
                <input type="text" id="text1" placeholder="Name, Autor, ISBN" />
                <button className="btn-group" id="btn" onClick={Books} ><a href='#liste'>SUCHE </a> </button> <br/>
                <input type="checkbox" id="check" />
                <label htmlFor='#check' >Nur lieferbare Bücher anzeigen</label>
            </div>
            <div className="autor">
                <SearchAPI />
            </div>
            <div className="search" id="liste">
                <SearchProjekt searchWord={state.word} nurLieferbar={state.l}/>
            </div>
        </div>

        </div>
    )
}

export default BooksProjekt;