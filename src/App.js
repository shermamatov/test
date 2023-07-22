import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
function App() {
    const [films, setFilms] = useState([]);
    async function getFilms() {
        let { data } = await axios("https://kinobd.ru/api/films/95");
        setFilms(data);
        console.log(data);
    }
    useEffect(() => {
        getFilms();
    }, []);
    return (
        <div className="App">
            <h1>hello world</h1>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    width: "90%",
                    margin: "auto",
                }}
            >
                <div data-kinopoisk={films.kinopoisk_id} id="kinobd"></div>
                <script src="https://kinobd.ru/js/player_.js"></script>
                <div style={{ width: "100%" }}>{films.name_russian}</div>
            </div>
        </div>
    );
}

export default App;
