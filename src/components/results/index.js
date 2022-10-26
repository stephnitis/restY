import React from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/acai.css'

const Results = (props) =>  {
  // let {data} = props
  // let {headers} = props

    return (
      <section>
        <pre data-testid="preText">
          {props.data ?
          (<>
          <JSONPretty data={props.data}/>
          <JSONPretty data={props.headers}/>          
          </>):
          (<h1>Awaiting Input</h1>)}
          </pre>
      </section>
    );

}

export default Results;