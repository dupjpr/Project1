import { useSelector } from "react-redux";

import { v4 as uuid } from 'uuid';

const Galery = () => {

    const storeData = useSelector(state => state)

    // console.log(storeData);

    // storeData?.data ? completeArra = storeData.data.map(() => <div>hola</div>) : 'nada';

    // (<div key={uuid()}>
    //     {item.name}
    //     <img src={item.sprites.front_default} alt="pokemon" />
    //     <div>Type: {item.types[0].type.name}</div>
    //     <div>version group</div>
    // </div>)

    const fullData = () => {
        return storeData?.data && storeData.data.map((item) => {

            return (
                <div key={uuid()}>
                    {item.name}
                    <img src={item.sprites.front_default} alt="pokemon" />
                    <div>Type: {item.types[0].type.name}</div>

                </div>
            )

        })
    }

    return (
        <section>
            {storeData?.loading && <div>loading....</div>}



            { storeData?.dataFilter ? 'filtrado' : fullData()  }
            
        </section>
    );
}

export default Galery;