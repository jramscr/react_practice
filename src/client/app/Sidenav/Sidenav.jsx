import React from 'react';
import {Card} from 'material-ui/Card';
import Channels from './Channels/Channels';
import Divider from 'material-ui/Divider';

require('./Sidenav.scss');

class Sidenav extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Card className="side-nav">
        <Channels />
        <Divider />
      </Card>
    );
  }
}

export default Sidenav;