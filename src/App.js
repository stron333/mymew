import React, { Component } from 'react';
import FormatArticles from './components/Format'
import art from './fixtures'

class App extends Component {
  render() {
    return (
      <div >
        <FormatArticles article={art[2]}/>    
      </div>
    );
  }
}

export default App;