import { useSelector } from "react-redux";

import { v4 as uuid } from 'uuid';

const Galery = () => {

    const storeData = useSelector(state => state)

    // storeData?.pakman && console.log(storeData.pakman);

    const completeArra = [];

    // console.log(storeData.loading);

    // storeData?.data ? completeArra = storeData.data.map(() => <div>hola</div>) : 'nada';

    // (<div key={uuid()}>
    //     {item.name}
    //     <img src={item.sprites.front_default} alt="pokemon" />
    //     <div>Type: {item.types[0].type.name}</div>
    //     <div>version group</div>
    // </div>)



    return (
        <section>
            {storeData?.loading && <div>loading....</div>}

            {storeData?.data && storeData.data.map((item) => {

                return (
                    <div key={uuid()}>
                        {item.name}
                        <img src={item.sprites.front_default} alt="pokemon" />
                        <div>Type: {item.types[0].type.name}</div>
                        <div>version group</div>
                    </div>
                )

            })}
        </section>
    );
}

export default Galery;