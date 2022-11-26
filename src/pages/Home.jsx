import React, { useState } from 'react'
import axios from 'axios';

const Home = () => {

  const [data, setData] = useState(null);


  /*
  "_id": "5cf5805fb53e011a64671582",
      "name": "The Fellowship Of The Ring"
    },
    {
      "_id": "5cf58077b53e011a64671583",
      "name": "The Two Towers"
    },
    {
      "_id": "5cf58080b53e011a64671584",
      "name": "The Return Of The King"
    }
  */


  const kachow = process.env.REACT_APP_LOTR;

  const baseUrl = 'https://the-one-api.dev/v2/chapter';

  const optionsForQuery = {

    method: 'GET',
    headers: {
      'Authorization': `Bearer L_suUzer-aQPSKP74YBn`
    }

  };

  const fetchData = async () => {

    await axios.get(baseUrl, optionsForQuery)
      .then(response => setData(response.data.docs[1].chapterName))
      .catch(err => console.log(`Erro: ${err.message}, message from server: ${err.response.data.message}`))
      .finally(() => console.log(data))

  }

  return (
      <div>
      <h1>home</h1>
      <button onClick={fetchData}> Fetch </button>
      <p>{data && data}</p>
    </div>
  )

}


export default Home;