import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import { FormControlLabel, FormGroup, Switch } from '@material-ui/core';
import { Link } from 'react-router-dom';


function Topbar() {
    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };
    return (
        <div>
            <div className="topbar-out">
                <div className="home-icon">
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}><HomeIcon/></Link>
                </div>
                <div className="nightmode">
                    <div className="sunny"><WbSunnyIcon/></div>
                    <FormGroup>
                    <FormControlLabel
                        control={<Switch size="small" checked={checked} onChange={toggleChecked} />}
                    />
                    </FormGroup>
                    <Brightness2Icon/>
                </div>
            </div>
        </div>
    )
}

export default Topbar
