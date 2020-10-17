import React from 'react';

const solarySystem = [ 
fetch('https://api.le-systeme-solaire.net/rest/bodies/soleil')
  .then((response) => {
    return response.json()
  })
  .then((result) => {
    console.log(result)
  }),  

fetch('https://api.le-systeme-solaire.net/rest/bodies/mercure')
  .then((response) => {
    return response.json()
  })
  .then((result) => {
    console.log(result)
  }),

fetch('https://api.le-systeme-solaire.net/rest/bodies/venus')
  .then((response) => {
    return response.json()
  })
  .then((result) => {
    console.log(result)
  }),

fetch('https://api.le-systeme-solaire.net/rest/bodies/terre')
  .then((response) => {
    return response.json()
  })
  .then((result) => {
    console.log(result)
  }),

fetch('https://api.le-systeme-solaire.net/rest/bodies/mars')
  .then((response) => {
    return response.json()
  })
  .then((result) => {
    console.log(result)
  }),

fetch('https://api.le-systeme-solaire.net/rest/bodies/jupiter')
  .then((response) => {
    return response.json()
  })
  .then((result) => {
    console.log(result)
  }),

fetch('https://api.le-systeme-solaire.net/rest/bodies/saturne')
  .then((response) => {
    return response.json()
  })
  .then((result) => {
    console.log(result)
  }),

fetch('https://api.le-systeme-solaire.net/rest/bodies/uranus')
  .then((response) => {
    return response.json()
  })
  .then((result) => {
    console.log(result)
  }),

fetch('https://api.le-systeme-solaire.net/rest/bodies/neptune')
  .then((response) => {
    return response.json()
  })
  .then((result) => {
    console.log(result)
  })
]

class App extends React.Component {
  render(){ 
    return (
      <div className="App">
        <h1>the system solaire</h1>
      </div>
    );
  }
}

export default App;
