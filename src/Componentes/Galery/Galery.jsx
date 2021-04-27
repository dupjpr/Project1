import { useSelector } from "react-redux";
import { v4 as uuid } from 'uuid';

const Galery = () => {


    const storeData = useSelector(state => state)

    storeData?.data && console.log(storeData.data);

    return (
        <section>
            {storeData?.data &&  storeData.data.map((item)=> <div key={uuid()}>
                {item.name}
            </div>)}
        </section>
    );
}

export default Galery;