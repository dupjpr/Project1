const pokemon = (value) => ({
    type: "FILTER",
    payload: value
  })
  
  const pokeFilter = (evalVal) => {
  
    return dispatch => {
  
      dispatch(pokemon(evalVal));
  
    }
  }
  
  export default pokeFilter;
  