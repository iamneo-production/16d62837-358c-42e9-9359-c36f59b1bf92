import React from "react";
import "./Homepage.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Appbars() {
  return (
    <div>
      <header className="Navbar">
        <div className="Toolbar">
          <div className="Logo">
          </div>
          <div className="Title">Edko</div>
          <div>
            <ul className="menu">
              <div className="active"><a href = "/MyLearning">My Learning</a></div>
              <div className="active1"><a href = "/Course">Course</a></div>
              {/* <div className="active2"><a href ='/Time'>Session</a></div> */}
              <div><a className="active3" href = "/Certificates">Certificates</a></div>
              {/* <div><a className="active3" href = "/blog">Blog</a></div> */}
              {/* <div><a className="active4" href='/About'>About Us</a></div> */}
              <div><a className="active6" href='/Profile'>Profile</a></div>
              <div><a className="active5" href='/'>Sign Out</a></div>
            </ul>
          </div>

          {/* <div>
            <button className='button-30'><AccountCircleIcon/></button>
          </div> */}
        </div>
      </header>
      <div className="Toolbar" />
        {/* <h1>Welcome</h1> */}
    </div>
  );
}
