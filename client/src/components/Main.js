require('normalize.css/normalize.css');
require('styles/App.css');
import f from './f'

import React from 'react';

f()

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">XXXXXXXXXXXXXXx</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
