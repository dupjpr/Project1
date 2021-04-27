const success = (data) => ({
    type: "Data_Set",
    task: data
  })

const fetchData = () => {
    return dispatch => {
        dispatch(success('hola'));
    }    
}
 
export default fetchData;