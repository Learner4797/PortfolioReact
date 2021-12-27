import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import DescriptionIcon from '@material-ui/icons/Description';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import SettingsIcon from '@material-ui/icons/Settings';
import PhotoIcon from '@material-ui/icons/Photo';
import LinkIcon from '@material-ui/icons/Link';
import { Link } from 'react-router-dom';


function Iconbar() {
    return (
        <div>
            <div className="icon-container">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}><HomeIcon style={{padding:'8px 0',fontSize:'32',cursor:'pointer'}}/></Link>
            <Link to="/About" style={{ textDecoration: 'none', color: 'white' }}><InfoIcon style={{padding:'8px 0',fontSize:'32',cursor:'pointer'}}/></Link>
            <Link to="/Certification" style={{ textDecoration: 'none', color: 'white' }}><DescriptionIcon style={{padding:'8px 0',fontSize:'32',cursor:'pointer'}}/></Link>
            <Link to="/Projects" style={{ textDecoration: 'none', color: 'white' }}><WbIncandescentIcon style={{padding:'8px 0',fontSize:'32',cursor:'pointer'}}/></Link>
            <Link to="/Skills" style={{ textDecoration: 'none', color: 'white' }}><SettingsIcon style={{padding:'8px 0',fontSize:'32',cursor:'pointer'}}/></Link>
            <Link to="/Photowall" style={{ textDecoration: 'none', color: 'white' }}><PhotoIcon style={{padding:'8px 0',fontSize:'32',cursor:'pointer'}}/></Link>
            <Link to="/Connect" style={{ textDecoration: 'none', color: 'white' }}><LinkIcon style={{padding:'8px 0',fontSize:'32',cursor:'pointer'}}/></Link>
            </div>
        </div>
    )
}

export default Iconbar;
