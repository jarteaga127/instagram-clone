
import "../styles/userlist.css";
import UserIcon from "./UserIcon";
import ProfileImage from "../images/joe-arteaga-profile.jpeg";

export default function UserList({suggestions}) {
    return(
        <div className="userlist">
            <div className="profile-bar">
                <div className="profile-left">
                <div className="profile-bar-icon">
                    <UserIcon image={ProfileImage} iconSize="icon-default"/>
                </div>
                <div className="profile-bar-label">
                    <div className="profile-username">joey.arteaga.127</div>
                    <div className="profile-name">Joseph Arteaga</div>
                    </div>
                </div>
                <div className="profile-right">
                    <a href="/">Switch</a>
                </div>
            </div>
            <div className="userlist-container">
                <div className="userlist-header">
                    Suggested Users
                </div>
                <ul className="userlist-ul">
  {suggestions.map(({id, name, username}) => (
                    <li className="userlist-item" key={id}>
                        <div className="userlist-item-left">
                        <div className="userlist-icon">
                            <UserIcon iconSize="icon-small"/>
                        </div>
                        <div className="userlist-label">
                            <div className="userlist-username">{username}</div>
                            <div className="userlist-name">{name}</div>
                        </div>
                        </div>
                        <div className="userlist-right">
                            <a href="/">Follow</a>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
            <div className="footer">
                <div className="footer-link-cont">
                    <ul className="footer-links">
                        <li className="footer-link-item">
                            <a href="/">About</a>
                        </li>
                        <li className="footer-link-item">
                            <a href="/">Help</a>
                        </li>
                        <li className="footer-link-item">
                            <a href="/">Blog</a>
                        </li>
                        <li className="footer-link-item">
                            <a href="/">API</a>
                        </li>
                        <li className="footer-link-item">
                            <a href="/">Jobs</a>
                        </li>
                        <li className="footer-link-item">
                            <a href="/">Privacy Policy</a>
                        </li>
                        <li className="footer-link-item">
                            <a href="/">Terms of Service</a>
                        </li>
                        <li className="footer-link-item">
                            <a href="/">Location</a>
                        </li>
                        <li className="footer-link-item">
                            <a href="/">Language</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    Created by Joseph Arteaga. This is for demonstration purposes only.
                </div>
            </div>
        </div>
    )
}