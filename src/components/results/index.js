import React from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/acai.css'

const Results = (props) =>  {
  let {data} = props

    return (
      <section>
        <pre data-testid="preText">
          {data ?
          (<>
          <JSONPretty data={data}/>
          </>):
          (<h1>Awaiting Input</h1>)}
          </pre>
      </section>
    );

}

export default Results;