import { useSelector } from "react-redux";

import { v4 as uuid } from 'uuid';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Pokemon from "../Pokemon/Pokemon";

const Galery = () => {

    const storeData = useSelector(state => state)

    const list = () => {

        let array = [];

        if (storeData?.data) {
            const newArray = storeData?.filterData ? storeData.filterData : storeData.data;
            console.log(newArray);
            console.log(newArray.length);
            array = [...newArray];
        }
        // {array[0].types[0].type.name}
        return (
            <div>
                { array.length > 15 ? <h1>pokemons</h1> : <h1>Type: {array[0]?.types[0].type.name}</h1>}
                {array.map((item) => {
                    return (
                        <Link to={`/${item.name}`}>
                            <div key={uuid()}>
                                {item.name}
                                <img src={item.sprites.front_default} alt="pokemon" />
                                <div>Type: {item.types[0].type.name}</div>
                            </div>
                        </Link>

                    )
                })}
            </div>
        )

    };

    return (
        <section>
            {storeData?.loading && <div>loading....</div>}
            <Router>
                {storeData?.data && list()}
                <Switch>
                    <Route path="/:id" children={<Pokemon item='item'/>} /> 
                </Switch>
            </Router>
        </section>
    );
}

export default Galery;