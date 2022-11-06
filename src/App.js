import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import {useState} from 'react';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import { ApiReducer } from './hooks/apiReducer';
// import History from './components/history';

export const initialState = {
  name: 'API Call Log',
  data: null,
  headers: null,
  requestParams: {},
  callLog: [],
}

const App = () => {

  const [state, dispatch] = useReducer(ApiReducer, initialState);

  const [requestParams, setRequestParams] = useState({});

  const {callLog} = state;

  const callApi = async (requestParams) => {
    setRequestParams(requestParams);
  }

  // const setData = (payload) => {
  //   let action = {
  //     type: 'set_data',
  //     payload: payload,
  //   }
  //   dispatch(action)
  // };

  const setData = (payload) => dispatch({ type: 'data', payload});

  const setHeaders = (payload) => dispatch({ type: 'headers', payload});

  const setHistory = (payload) => dispatch({ 
    type: 'callLog', 
    payload: [...callLog, payload]
  });

  useEffect(() => {
    let getData = async () => {      
      if (requestParams.apiUrl) {
        let response = await axios({
          method: requestParams.method,
          url: requestParams.apiUrl,
        })
        setData(response.data.results);
        setHeaders(response.headers);
        setHistory(requestParams.apiUrl, requestParams.apiUrl);
        console.log(callLog);
      }
    }
    getData();
  }, [requestParams]);

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.apiUrl}</div>
      <Form callApi={callApi} />
      {/* <History history={state.calls} /> */}
      <Results
        data={state.data}
        headers={state.headers}
      />
      <Footer />
    </>
  );
}

export default App;

// https://pokeapi.com/api/v2/pokemon
// http://openlibrary.org/authors/OL1A.json