import React from 'react';
import axios from 'axios';
import { useState, useReducer } from 'react';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';

export const initialHistory = {
  name: 'API Call Log',
  calls: [],
}

export const historyReducer = (state, action) => {

  switch(action.type){
    case 'ADD':
      return{...state, calls: [...state.calls, action.payload]}
  
  default:
    return state;
  }
}

const App = () => {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [headers, setHeaders] = useState(null);

  let [historyState, historyDispatch] = useReducer(historyReducer, initialHistory);
  console.log(historyState);
  const callApi = async (url, method='GET') => {

    let newData = await axios({
      method: method,
      url: url,
    })

    let params = {
      url,
      method
    }

    setHeaders(newData.headers);
    setData(newData.data.results);
    console.log(headers);
    console.log(data);
    setRequestParams(params);
  }  

  const addHistory = () => {
    let action ={
      type: 'ADD',
      payload: requestParams,
    }
    historyDispatch(action)
  }

    return (
      <>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} addHistory={addHistory} />
        <Results data={data} headers={headers}/>
        <History historyState={historyState} />
        <Footer />
      </>
    );
}

export default App;
