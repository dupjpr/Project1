const success = (data) => ({
    type: "DATA_SET",
    task: data
  })

  const loading = (status) => ({
    type: "LOADING",
    task: status
  })

  const pokeStates = () => ({
    type: "POKE_STATES",
  })

const fetchData = () => {
    
    const links = [];

    for (let i = 1; i <= 20; i++) {
      const randNum = Math.floor(Math.random() * 150) + 1;
      const link = `https://pokeapi.co/api/v2/pokemon-form/${randNum}/`;
      const check = links.some((item)=>{
        return item === link;
      })

      if(!check){
        links.push(link);
      }

    }
  
    let info = [];
  
    return dispatch => {
      dispatch(loading(true))
      links.forEach((item) => {
        return fetch(item)
          .then(response => response.json())
          .then(data => {
            info.push(data);
            if(info.length == 20){              
              dispatch(success(info))
              dispatch(loading(false))
              // dispatch(pokeStates())
            }
          })
      })
  
    } 
}
 
export default fetchData;