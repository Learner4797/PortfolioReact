import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import DescriptionIcon from '@material-ui/icons/Description';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import SettingsIcon from '@material-ui/icons/Settings';
import PhotoIcon from '@material-ui/icons/Photo';
import LinkIcon from '@material-ui/icons/Link';
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


function Sidebar() {
    return (
        <div>
            <div className="Sidebar">
                <div className="logo">
                    <h1>PORTFOLIO</h1>
                </div>
                <div className="account">
                <div className="profimg"><img src="./images/ashish.jpg" alt="profile-pic"/></div>
                    <h2>Ashish singh</h2>
                    <div className="social">
                        <a href="https://www.instagram.com/ash1sh_1hakur10/?hl=en"><InstagramIcon/></a>
                        <a href="https://www.linkedin.com/in/ashish-singh-1771091a5/"><LinkedInIcon /></a>
                        <a href="https://github.com/Learner4797"><GitHubIcon /></a>
                    </div>
                </div>
                <div className="link-section">
                    <div className="tile">
                        <div className="icon">
                            <HomeIcon/>
                        </div>
                        <div className="title">
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>HOME</Link>
                        </div>
                    </div>
                    <div className="tile">
                        <div className="icon">
                            <InfoIcon/>
                        </div>
                        <div className="title">
                        <Link to="/About" style={{ textDecoration: 'none', color: 'white' }}>ABOUT</Link>
                        </div>
                    </div>
                    <div className="tile">
                        <div className="icon">
                            <DescriptionIcon/>
                        </div>
                        <div className="title">
                        <Link to="/Certification" style={{ textDecoration: 'none', color: 'white' }}>CERTIFICATION</Link>
                        </div>
                    </div>
                    <div className="tile">
                        <div className="icon">
                            <WbIncandescentIcon/>
                        </div>
                        <div className="title">
                        <Link to="/Projects" style={{ textDecoration: 'none', color: 'white' }}>PROJECTS</Link>
                        </div>
                    </div>
                    <div className="tile">
                        <div className="icon">
                            <SettingsIcon/>
                        </div>
                        <div className="title">
                        <Link to="/Skills" style={{ textDecoration: 'none', color: 'white' }}>SKILLS</Link>
                        </div>
                    </div>
                    <div className="tile">
                        <div className="icon">
                            <PhotoIcon/>
                        </div>
                        <div className="title">
                        <Link to="/Photowall" style={{ textDecoration: 'none', color: 'white' }}>PHOTO WALL</Link>
                        </div>
                    </div>
                    <div className="tile">
                        <div className="icon">
                            <LinkIcon/>
                        </div>
                        <div className="title">
                        <Link to="/Connect" style={{ textDecoration: 'none', color: 'white' }}>CONNECT</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
