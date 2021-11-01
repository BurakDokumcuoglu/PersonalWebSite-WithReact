import React from "react";
import "../style/navbar.css";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();

  const directToHakkimda = () => {
    history.push({ pathname: "/"});
  };
  const directToJobs = () => {
    history.push({ pathname: "/jobs"});
  };
  const directToComments = () => {
    history.push({ pathname: "/comments"});
  };
  const directToContact = () => {
    history.push({ pathname: "/contact"});
  };

  return (
    <div className="navbar-container navbar-static-top fixed-top">
      <ul className="navbar-items">
        <li className="navbar-item" >Burak Dökümcüoğlu</li>
        <li className="navbar-item" onClick={()=>directToHakkimda()}>Hakkımda</li>
        <li className="navbar-item" onClick={()=>directToJobs()}>Yaptığım İşler</li>
        <li className="navbar-item" onClick={()=>directToComments()}>Yorumlar</li>
        <li className="navbar-item" onClick={()=>directToContact()}>İletişim</li>
      </ul>
    </div>
  );
}

export default Navbar;
