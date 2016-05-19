import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import Sidenav from './Sidenav/Sidenav';
import Messages from './Messages/Messages';
import MessageBox from './MessageBox/MessageBox'

require('./app.scss');

class App extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <AppBar
            title="React Workshop"
          />
          <div className="layout">
            <Sidenav />
            <Messages />
          </div>
          <MessageBox />
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
