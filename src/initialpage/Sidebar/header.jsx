/**
 * App Header
 */
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  headerlogo, lnEnglish, lnFrench, lnSpanish, lnGerman, Avatar_02, Avatar_03, Avatar_05,
  Avatar_06, Avatar_08, Avatar_09, Avatar_13, Avatar_17, Avatar_21
} from '../../Entryfile/imagepath'
import notifications from '../../assets/json/notifications';
import message from '../../assets/json/message';

const Header = (props) => {
  // console.log(Emails?.split('@')[0]);
  // const Emailss=Emails;
  //  console.log(loginvalue?.email,"ss");

  const data = notifications.notifications;
  const datas = message.message;
  const [notification, setNotifications] = useState(false);


  const handlesidebar = () => {
    document.body.classList.toggle('mini-sidebar');
  }
  const onMenuClik = () => {
    props.onMenuClick()
  }

  let pathname = location.pathname
  const { loginvalue } = useSelector((state) => state.user);
  const UserName = loginvalue?.email?.split('@')[0];
  const ProfileName = UserName?.charAt(0).toUpperCase() + UserName?.slice(1)
  console.log(ProfileName, "loginvalue");


  return (
    <div className="header" style={{ right: "0px" }}>
      {/* Logo */}
      <div className="header-left">
        <Link to="/app/main/dashboard" className="logo">
          <img src={headerlogo} width={40} height={40} alt="" />
        </Link>
      </div>
      {/* /Logo */}
      <a id="toggle_btn" href="#" style={{ display: pathname.includes('tasks') ? "none" : pathname.includes('compose') ? "none" : "" }} onClick={handlesidebar}>
        <span className="bar-icon"><span />
          <span />
          <span />
        </span>
      </a>
      {/* Header Title */}
      <div className="page-title-box">
        <h3>Dreamguy's Technologies</h3>
      </div>
      {/* /Header Title */}
      <a id="mobile_btn" className="mobile_btn" href="#" onClick={() => onMenuClik()}><i className="fa fa-bars" /></a>
      {/* Header Menu */}
      <ul className="nav user-menu">
        {/* Search */}
        <li className="nav-item">
          <div className="top-nav-search">
            <a href="" className="responsive-search">
              <i className="fa fa-search" />
            </a>
            <form>
              <input className="form-control" type="text" placeholder="Search here" />
              <button className="btn" type="submit"><i className="fa fa-search" /></button>
            </form>
          </div>
        </li>
        {/* /Search */}
        {/* Flag */}
        <li className="nav-item dropdown has-arrow flag-nav">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">
            <img src={lnEnglish} alt="" height={20} /> <span>English</span>
          </a>
          <div className="dropdown-menu dropdown-menu-end dropdown-menu-right">
            <a href="" className="dropdown-item">
              <img src={lnEnglish} alt="" height={16} /> English
            </a>
            <a href="" className="dropdown-item">
              <img src={lnFrench} alt="" height={16} /> French
            </a>
            <a href="" className="dropdown-item">
              <img src={lnSpanish} alt="" height={16} /> Spanish
            </a>
            <a href="" className="dropdown-item">
              <img src={lnGerman} alt="" height={16} /> German
            </a>
          </div>
        </li>
        {/* /Flag */}
        {/* Notifications */}
        <li className="nav-item dropdown">
          <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown" onClick={() => setNotifications(!notification)}>
            <i className="fa fa-bell-o" /> <span className="badge badge-pill">3</span>
          </a>
          <div className={`dropdown-menu dropdown-menu-end notifications ${notification ? "show" : ""}`}>
            <div className="topnav-dropdown-header">
              <span className="notification-title">Notifications</span>
              <a href="" onClick={() => setNotifications(false)} className="clear-noti"> Clear All </a>
            </div>
            <div className="noti-content">
              <ul className="notification-list">
                {data.map((val, index) => {
                  return (
                    <li className="notification-message" key={index}>
                      <Link onClick={() => localStorage.setItem("minheight", "true")} to="/app/administrator/activities">
                        <div className="media d-flex">
                          <span className="avatar">
                            <img alt="" src={val.image} />
                          </span>
                          <div className="media-body">
                            <p className="noti-details"><span className="noti-title">{val.name}</span> {val.contents} <span className="noti-title">{val.contents_2}</span></p>
                            <p className="noti-time"><span className="notification-time">{val.time}</span></p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <Link onClick={() => localStorage.setItem("minheight", "true")} to="/app/administrator/activities">View all Notifications</Link>
            </div>
          </div>
        </li>
        {/* /Notifications */}
        {/* Message Notifications */}
        <li className="nav-item dropdown">
          <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
            <i className="fa fa-comment-o" /> <span className="badge badge-pill">8</span>
          </a>
          <div className="dropdown-menu dropdown-menu-end notifications">
            <div className="topnav-dropdown-header">
              <span className="notification-title">Messages</span>
              <a href="" className="clear-noti"> Clear All </a>
            </div>
            <div className="noti-content">
              <ul className="notification-list">
                {datas.map((value, index) => {
                  return (
                    <li className="notification-message" key={index}>
                      <Link onClick={() => localStorage.setItem("minheight", "true")} to="/conversation/chat">
                        <div className="list-item">
                          <div className="list-left">
                            <span className="avatar">
                              <img alt="" src={value.image} />
                            </span>
                          </div>
                          <div className="list-body">
                            <span className="message-author">{value.name}</span>
                            <span className="message-time">{value.time}</span>
                            <div className="clearfix" />
                            <span className="message-content">{value.contents}</span>
                          </div>
                        </div>
                      </Link>
                    </li>

                  )
                })}

              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <Link onClick={() => localStorage.setItem("minheight", "true")} to="/conversation/chat">View all Messages</Link>
            </div>
          </div>
        </li>
        {/* /Message Notifications */}
        <li className="nav-item dropdown has-arrow main-drop">
          <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
            <span className="user-img me-1"><img src={Avatar_21} alt="" />
              <span className="status online" /></span>
            <span>{ProfileName ? ` ${ProfileName}` : "Admin"}</span>
          </a>
          <div className="dropdown-menu dropdown-menu-end">
            <Link className="dropdown-item" to="/app/profile/employee-profile">My Profile</Link>
            <Link className="dropdown-item" to="/settings/companysetting">Settings</Link>
            <Link className="dropdown-item" to="/login">Logout</Link>
          </div>
        </li>
      </ul>
      {/* /Header Menu */}
      {/* Mobile Menu */}
      <div className="dropdown mobile-user-menu">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
        <div className="dropdown-menu dropdown-menu-end dropdown-menu-right">
          <Link className="dropdown-item" to="/app/profile/employee-profile">My Profile</Link>
          <Link className="dropdown-item" to="/settings/companysetting">Settings</Link>
          <Link className="dropdown-item" to="/login">Logout</Link>
        </div>
      </div>
      {/* /Mobile Menu */}
    </div>

  );
}


export default withRouter(Header);