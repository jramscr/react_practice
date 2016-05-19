import React     from 'react';
import {List}    from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {Card}    from 'material-ui/Card';
import Contact   from './Contact';

class Contacts extends React.Component {
  constructor() {
    super();

    this.state = {
      people: [
        {
          "id": "1",
          "name": "John Doe",
          "photo_url": "http://i.imgur.com/B2WIXrF.png"
        },
        {
          "id": "2",
          "name": "Mark Zuckerberg",
          "photo_url": "https://lh4.googleusercontent.com/-wLDL5bCoI1U/AAAAAAAAAAI/AAAAAAAACgk/B9SpjMZ1Bf4/s0-c-k-no-ns/photo.jpg"
        },
        {
          "id": "3",
          "name": "Bill Gates",
          "photo_url": "http://a5.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,q_80,w_620/MTMyNDczNDI1MjgwMTQ1ODg2.jpg"
        },
        {
          "id": "4",
          "name": "Gregg Pollack",
          "photo_url": "https://pbs.twimg.com/profile_images/88469426/GreggSquare_400x400.png"
        },
        {
          "id": "5",
          "name": "Uncle Bob",
          "photo_url": "https://d26o5k45lnmm4v.cloudfront.net/authors-robert-martin-v0.jpg"
        }
      ]
    }
  }

  render(){
    let people = this.state.people.map((person) => {
      return (<Contact key={person.id} name={person.name} avatar={person.photo_url}/>);
    });

    return (
      <List>
        <Subheader>Direct Messages</Subheader>
        {people}
      </List>
    );
  }
}

export default Contacts;
