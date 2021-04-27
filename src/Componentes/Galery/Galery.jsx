import { useSelector } from "react-redux";

const Galery = () => {


    const storeData = useSelector(state => state)

    storeData?.data && console.log(storeData.data);

    return (
        <section>
            {storeData?.data &&  storeData.data.map((item)=> <div key={item.id}>
                {item.name}
            </div>)}
        </section>
    );
}

export default Galery;