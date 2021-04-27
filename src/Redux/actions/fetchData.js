const success = (data) => ({
    type: "Data_Set",
    task: data
  })

const fetchData = () => {
    
    const links = [];

    for (let i = 1; i <= 20; i++) {
      const randNum = Math.floor(Math.random() * 150) + 1;
      const link = `https://pokeapi.co/api/v2/pokemon-form/${randNum}/`;
      links.push(link);
    }
  
    let info = [];
  
    return dispatch => {
      links.forEach((item) => {
        return fetch(item)
          .then(response => response.json())
          .then(data => {
            info.push(data);
            if(info.length == 20){
              dispatch(success(info))
            }
          })
      })
  
    } 
}
 
export default fetchData;