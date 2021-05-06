const success = (data) => ({
  type: "DATA_SET",
  payload: data
})

const loading = (status) => ({
  type: "LOADING",
  payload: status
})

const fetchData = () => {

  const links = [];

  for (let i = 1; i <= 20; i++) {
    const randNum = Math.floor(Math.random() * 150) + 1;
    const link = `https://pokeapi.co/api/v2/pokemon-form/${randNum}/`;

    const check = links.some((item) => {
      return item === link;
    })

    if (!check) {
      links.push(link);
    }

  }

  const promesas = links.map((url) => fetch(url));

  return dispatch => {

    dispatch(loading(true))
    Promise.all(promesas)
      .then((result) => Promise.all(result.map((r) => r.json())))
      .then((data) => {
        dispatch(success(data))
        // dispatch(options(data))
        dispatch(loading(false))
      })

  }

}

export default fetchData;
