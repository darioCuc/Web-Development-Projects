import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";


function createCard(contact) {
  return <Card 
    key={contact.id}
    name={contact.name} 
    img={contact.imgURL}
    tel={contact.tel}
    email={contact.email}
  />
}


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media.licdn.com/dms/image/C4D03AQHKUbav7reIYA/profile-displayphoto-shrink_800_800/0/1629292247332?e=2147483647&v=beta&t=R_3IcfG_-o2JO4MsLr3xF-I71zEz_Fbt8hPVnLumCxY" />
      {contacts.map(createCard)}
      
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
