import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const SearchBar = (props) => {
    const [data, setData] = useState([]);
    const [inputText, setInputText] = useState("");
    const [foundGame, setFoundGame] = useState("");

    useEffect(() => {
        axios.get("https://zelda.fanapis.com/api/games?limit=100")
            .then((res) => {
                console.log(res.data.data);
                setData(res.data.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }, []);

    const inputHandler = (e) => {
        let lowerCase = e.target.value;
        setInputText(lowerCase);
    };

    const filteredData = data.filter((game) => {
        console.log(game.name)
        if (inputText === "") {
            return game.name;
        } else {
            return game.name.toLowerCase().includes(inputText);
        }
    })

    return (
        <div>
            <h1>Zelda Search</h1>
            <div>
                <input type="text" onChange={inputHandler} />
            </div>
            <hr />
            <div>
                {
                    filteredData.map((singleGame) => (
                        <li key={singleGame.id}>
                            <Link to={"/game/" + singleGame.id}>{singleGame.name}</Link>
                        </li>
                    ))
                }
            </div>
        </div>
    );
};

export default SearchBar;