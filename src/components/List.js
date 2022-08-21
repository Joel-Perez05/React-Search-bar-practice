import React, {useEffect} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

const List = (props) => {
    const {id} = useParams();

    useEffect(() => {
        axios.get("https://zelda.fanapis.com/api/games/" + id)
            .then((res) => {
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }, []);

    return (
        <div>
            
        </div>
    );
};

export default List;