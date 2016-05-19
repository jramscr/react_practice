import React from 'react';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

class Contact extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <ListItem leftAvatar={<Avatar src={this.props.avatar}/>}>
        {this.props.name}
      </ListItem>
    );
  }
}

export default Contact;
