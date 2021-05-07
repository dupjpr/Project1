const filterAction = (value) => ({
  type: "FILTER",
  payload: value
})

const filter = (evalVal) => {

  return dispatch => {

    dispatch(filterAction(evalVal));

  }
}

export default filter;
