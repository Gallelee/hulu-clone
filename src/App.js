import React from "react";
import requests from "./apiRequests";
import Row from "./Row";


function App() {
  return(
  <div>
    <Row name="Popular Movies" fetchMedia={requests.getPopular}/>
  </div>
  )
}

export default App;
