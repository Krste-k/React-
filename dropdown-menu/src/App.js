import logo from './logo.svg';
import './App.css';
import pic from './img/pic.png'
import user from './img/user.png'
import edit from './img/edit.jpg'
import inbox from './img/inbox.jpg'
import seting from './img/seting.png'
import help from './img/help.jpg'
import logout from './img/logout.png'
import React, {useState} from 'react';

function App() {
  const [open , setOpen] = useState(false);

  return (
    <div className="App">
    <div className='menu-container'>
      <div className='menu-trigger' onClick={() => {setOpen(!open)}}>
      <img src={pic}></img>
      </div>
      <div className={`dropdawn-menu ${open? 'active' : 'inactive'}`}>
        <h3>The Krste <span>Dev</span></h3>
        <ul>
          <DropdawnItem img = {user} text = {"My Profile"}/>
          <DropdawnItem img = {edit} text = {"Edit"}/>
          <DropdawnItem img = {inbox} text = {"Inbox"}/>
          <DropdawnItem img = {seting} text = {"Seting"}/>
          <DropdawnItem img = {help} text = {"Help"}/>
          <DropdawnItem img = {logout} text = {"Logout"}/>
        </ul>
      </div>
    </div>
    </div>
  );
}
function DropdawnItem(props){
  return(
<li className='dropdawnItem'>
  <img src={props.img}></img>
  <a>{props.text}</a>
</li>
  );
}

export default App;
