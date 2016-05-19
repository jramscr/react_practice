import React from 'react';
import Card from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

require('./MessageBox.scss');

class MessageBox extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Card className="message-box">
        <div className='textarea-container'>
          <textarea/>
        </div>
        <RaisedButton label='Send' className='send-button' />
      </Card>
    );
  }
}

export default MessageBox;
