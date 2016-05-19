import React from 'react';
import {Card} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Channels from './Channels/Channels';
import Contacts from './Contacts/Contacts';

require('./Sidenav.scss');

class Sidenav extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <Card className='side-nav'>
        <Channels />
        <Divider />
        <Contacts />
      </Card>
    );
  }
}

export default Sidenav;
