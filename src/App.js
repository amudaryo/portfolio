import './App.css';
import Home from './Home'
import Roots from './Roots'
import MyAppBar from './components/MyAppBar'
import Layout from './components/Layout'

function App() {
  return (
    <div className="App">
      <Layout>
        <MyAppBar />
        <Home />
        </Layout>
    </div>
  );
}

export default App;
