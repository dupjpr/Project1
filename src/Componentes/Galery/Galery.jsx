import { useSelector } from "react-redux";

const Galery = () => {


    const storeData = useSelector(state => state)

    console.log(storeData);
  
    return (
    <h1>this is the galery</h1>
    );
}

export default Galery;