
const filterAction = (value) => ({
  type: "FILTER",
  payload: value
})

const filter = (evalVal) => {


  console.log(evalVal);

  return dispatch => {

    dispatch(filterAction());

  }
}

export default filter;
