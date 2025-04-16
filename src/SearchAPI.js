function SearchAPI () {
    const endpoint = 'https://de.wikipedia.org/w/api.php?action=parse&origin=*&page=Udo_M%C3%BCller_(Wirtschaftsinformatiker)&prop=text&format=json';
    let text = "Inhalt";
    fetch(endpoint)
        .then(response => response.json())
        /*.then(data => console.log(data);*/
        .then(data => {
            text = data.parse.text['*'];
            let min = 0;
            let max = text.indexOf('<div id="normdaten" class="catlinks');

            text = text.substring(min, max);
            document.querySelector('#udoDiv').innerHTML=text;
        });
    return (
        <div className="Udo">
            <h2>Autor des Monats</h2>
            <p id="udoDiv">{text}</p>
        </div>
    )
}
export default SearchAPI;