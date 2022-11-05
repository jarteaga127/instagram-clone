import "../styles/navbar.css";
import UserIcon from "./UserIcon";
import ProfileImage from "../images/joe-arteaga-profile.jpeg";

export default function NavBar() {
    return(
        <div className="navbar">
            <div className="navbar-container">
                <div className="site-logo">
                    <h2>ThisAppHasNoName</h2>
                </div>
                <div className="menu-options">
                    <ul className="menu-options-2">
                        <li className="menu-item">
                            <div className="menu-item-2">
                                <div className="option-icon"><i class="fa-solid fa-house"></i></div>
                                <div className="option-label">Home</div>
                            </div>
                        </li>
                        <li className="menu-item">
                            <div className="menu-item-2">
                                <div className="option-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                                <div className="option-label">Search</div>
                            </div>
                        </li>
                        <li className="menu-item">
                            <div className="menu-item-2">
                                <div className="option-icon"><i class="fa-regular fa-compass"></i></div>
                                <div className="option-label">Discover</div>
                            </div>
                        </li>
                        <li className="menu-item">
                            <div className="menu-item-2">
                                <div className="option-icon"><i class="fa-regular fa-paper-plane"></i></div>
                                <div className="option-label">Messages</div>
                            </div>
                        </li>
                        <li className="menu-item">
                            <div className="menu-item-2">
                                <div className="option-icon"><i class="fa-regular fa-heart"></i></div>
                                <div className="option-label">Notifications</div>
                            </div>
                        </li>
                        <li className="menu-item">
                            <div className="menu-item-2">
                                <div className="option-icon"><i class="fa-regular fa-square-plus"></i></div>
                                <div className="option-label">Post</div>
                            </div>
                        </li>
                        <li className="menu-item">
                            <div className="menu-item-2">
                                <div className="option-icon">
                                    <UserIcon iconSize="icon-tiny" borderStyle="no-border" image={ProfileImage}/>
                                </div>
                                <div className="option-label">Profile</div>
                            </div>
                        </li>
                    </ul>

                </div>
                <div className="other-options">
                <div className="option-icon"><i class="fa-solid fa-bars"></i></div>
                <div className="option-label">Other Options</div>
                </div>
            </div>
        </div>
    )
}