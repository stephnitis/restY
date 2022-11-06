import React, { useEffect } from 'react';
import axios from 'axios';
import {
  useState,
  // useReducer 
} from 'react';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

// import History from './components/history';

// export const initialHistory = {
//   name: 'API Call Log',
//   calls: [],
// }

// export const historyReducer = (state, action) => {

//   switch(action.type){
//     case 'ADD':
//       return{...state, calls: [...state.calls, action.payload]}

//   default:
//     return state;
//   }
// }

const App = () => {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [headers, setHeaders] = useState(null);

  const callApi = async (requestParams) => {
    setRequestParams(requestParams);
    console.log('from App ------>', requestParams.method, requestParams.url);
  }


  useEffect(() => {
    let getData = async () => {

      if (requestParams.apiUrl) {

        let response = await axios({
          method: requestParams.method,
          url: requestParams.apiUrl,
        })
        setData(response.data.results);
        console.log(setData(response.data.results));
        setHeaders(response.headers);
      }
    }

    getData();
  }, [requestParams]);

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form callApi={callApi} />
      <Results
        data={data}
        headers={headers}
      />
      <Footer />
    </>
  );
}

export default App;

// https://pokeapi.com/api/v2/pokemon
// http://openlibrary.org/authors/OL1A.json