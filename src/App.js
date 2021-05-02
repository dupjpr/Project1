import Galery from "./Componentes/Galery/Galery.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import fetchData from './Redux/actions/fetchData.js';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [])

  return (
    <div className="App">
      {/* <Filter/> */}
      <Galery />
    </div>
  );
}

export default App;
