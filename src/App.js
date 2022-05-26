import React  from 'react';
import NavBar from './components/navbar';
import NewComp from './components/newcomp';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'

function App () {

  const Apikey=process.env.REACT_APP_NEWS_API

    return (
      <Router>
        <NavBar />
        {/* <NewComp pageSize={6} country={'in'} category='general' apikey={this.Apikey} /> */}
        <Routes>
          <Route path="/" element={<NewComp pageSize={6} country={'in'} category={'general'} apikey={Apikey}/>} />
          <Route path="/sports" element= {<NewComp pageSize={6} country={'in'} category={'sports'} apikey={Apikey}/>} />
          <Route path="/business" element= {<NewComp pageSize={6} country={'in'} category={'business'} apikey={Apikey}/>} />
          <Route path="/science" element= {<NewComp pageSize={6} country={'in'} category={'science'} apikey={Apikey}/>} />
          <Route path="/health" element= {<NewComp pageSize={6} country={'in'} category={'health'} apikey={Apikey}/>} />
          <Route path="/entertainment" element= {<NewComp pageSize={6} country={'in'} category={'entertainment'} apikey={Apikey}/>} />
          <Route path="/technology" element= {<NewComp pageSize={6} country={'in'} category={'technology'} apikey={Apikey}/>} />
          {/* <Route path="/about" element= {<NewComp pageSize={6} country={'in'} category={'sports'} apikey={Apikey}/>} /> */}
        </Routes>
      </Router>
    );
}
export default App;