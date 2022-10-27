import React from 'react';
import { useState } from 'react';

import './form.scss';

const Form = (props) => {

  const [method, setMethod] = useState('GET');
  const [apiUrl, setApiUrl] = useState('');
  const [data, setData] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // let apiUrl = e.target.url.value;
    props.handleApiCall(apiUrl, method, data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input data-testid="inputUrl" onChange={(e) => setApiUrl(e.target.value)} type='text' />
          <button type="submit">GO!</button>
        </label>
        <textarea data-testid="form-textarea"
          onChange={(e) => setData(e.target.value)}
          type='text'
          placeholder='Enter JSON'
          />
        <label className="methods">
          <span id="get" onClick={() => setMethod('GET')} >GET</span>
          <span id="post" onClick={() => setMethod('POST')}>POST</span>
          <span id="put" onClick={() => setMethod('PUT')}>PUT</span>
          <span id="delete" onClick={() => setMethod('DELETE')}>DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;
