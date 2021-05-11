import { useParams, useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";


const Pokemon = () => {
    let { id } = useParams();
    let history = useHistory();

    const dispatch = useDispatch();




    function handleClick() {
        history.push("/");
    }


    return (
        <div>
            <h3>{id}</h3>
            <button type="button" onClick={handleClick}>

                borrar
            </button>
        </div>
    );
}

export default Pokemon;