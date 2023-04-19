import React from 'react';
import profilePic from '../images/my-pic.jpg';
import Profile from './Profile';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

class Header extends React.Component {

    render() {
        var data = this.props.headerData;
        var name = data.name;
        var profession = data.profession;
        var email = data.email;
        var phone = data.phone;
        var location = data.location;
        return (<header className="App-header App-block-style"  >
            <span>
                <Avatar alt="Jay" src={profilePic} sx={{ width: 150, height:150 }} />
                <Profile profileData={this.props.profileData} />
            </span>

            <Typography className="App-header-text"  >
                <Typography>
                    {name}
                </Typography>
                <Typography>
                    {profession}
                </Typography>
                <Typography>
                    {email}
                </Typography>
                <Typography>
                    {location}
                </Typography>
                <Typography>
                    {phone}
                </Typography>
            </Typography>
        </header>);
    }
}

export default Header;