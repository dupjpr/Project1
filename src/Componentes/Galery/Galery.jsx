import { useSelector } from "react-redux";
import { useState } from "react";
import { v4 as uuid } from 'uuid';

const Galery = () => {

    // const [load, setLoad] = useState(true);

    const storeData = useSelector(state => state)

    storeData?.data && storeData.data.forEach((item) => {
        console.log(item);
    })

    return (
        <section>
            {/* {load && <div>loading....</div>} */}
            {storeData?.data && storeData.data.map((item) => <div key={uuid()}>
                {item.name}
                <img src={item.sprites.front_default} alt="pokemon"/>
                <div>Type: {item.types[0].type.name}</div>
                <div>version group</div>
            </div>)}
        </section>
    );
}

export default Galery;