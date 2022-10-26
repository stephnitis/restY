import React from 'react';
import axios from 'axios';
import { useState } from 'react';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const App = () => {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [headers, setHeaders] = useState(null);

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

    return (
      <>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} headers={headers}/>
        <Footer />
      </>
    );
}

export default App;
