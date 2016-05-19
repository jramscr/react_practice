import React from 'react';
import Card from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

require('./MessageBox.scss');

class MesssageBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card className="message-box">
        <textarea />
        <RaisedButton className="send-button" primary={true} label="Send" style={{ margin: 10 }}/>
      </Card>
    );
  }
}

export default MesssageBox;
