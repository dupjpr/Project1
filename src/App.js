import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import fetchData from './Redux/actions/fetchData.js';

import Galery from "./Componentes/Galery/Galery.jsx";
import Filter from './Componentes/Filter/Filter.jsx';
import Pokemon from './Componentes/Pokemon/Pokemon.jsx';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [])

  return (
    <div className="App">
      <Filter />
      <Galery />
      {/* <Router>
        <Switch>
          <Route path="/:id" >
            <Pokemon/>
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;

