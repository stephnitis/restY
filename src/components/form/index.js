import React from 'react';
import { useState } from 'react';

import './form.scss';

const Form = (props) => {

  const [method, setMethod] = useState('GET');
  const [apiUrl, setApiUrl] = useState('');
  const [JSON, setJSON] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    let data = {
      method,
      apiUrl,
      JSON,
    }
    props.callApi(data);
    console.log('from form ----->', data)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input onChange={(e) => setApiUrl(e.target.value)} type='text' />
          <button type="submit">GO!</button>
        </label>
        <textarea
          onChange={(e) => setJSON(e.target.value)}
          type='text'
          placeholder='Enter JSON'
          />
        <label className="methods">
          <span id="get" onClick={() => setMethod('get')} >GET</span>
          <span id="post" onClick={() => setMethod('post')}>POST</span>
          <span id="put" onClick={() => setMethod('put')}>PUT</span>
          <span id="delete" onClick={() => setMethod('delete')}>DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;
