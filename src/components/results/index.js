import React from 'react';

const Results = (props) =>  {

  // function LoadBackground() {
  //   const [isLoading, setIsLoading] = React.useState(true);
  //   const [data, setData] = React.useState([]);
  // }

    return (
      <section>
        <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      </section>
    );

}

export default Results;
