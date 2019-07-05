import React , {Component, Fragment} from 'react'; 
import './App.css';

import Header from './components/Header';
// import Content from './components/Content';
// import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <Fragment>
          <Header brandname="Company Name" />
          {/* <Content /> */}
          {/* <Footer /> */}
      </Fragment>
    );
  }
}

export default App;   
