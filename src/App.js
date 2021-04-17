import './App.css';
import Home from './Home.js'
import Roots from './Roots.js'
import Growth from './Growth.js'
import Mycelium from './Mycelium.js'

import MyAppBar from './components/MyAppBar'
import Layout from './components/Layout'
import {BrowserRouter as Router, Route, Switch}from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <MyAppBar />
          <Switch>

            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/roots'>
              <Roots />
            </Route>

            <Route path='/growth'>
              <Growth />
            </Route>

            <Route path='/mycelium'>
              <Mycelium />
            </Route>

          </Switch>
        </Layout>
      </Router>
      
    </div>
  );
}

export default App;
