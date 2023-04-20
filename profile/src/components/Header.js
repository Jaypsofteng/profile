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
            <Typography>
            <Avatar alt="Jay" src={profilePic} sx={{ width: 150, height:150 }} />
            <Typography className="App-header-text"  >
                <Typography variant='subtitle1'>
                    {name}
                </Typography>
                <Typography variant='subtitle1'>
                    {profession}
                </Typography>
                <Typography variant='subtitle1'>
                    {email}
                </Typography>
                <Typography variant='subtitle1'>
                    {location}
                </Typography>
                <Typography variant='subtitle1'>
                    {phone}
                </Typography>
            </Typography>
            </Typography>
            <Profile profileData={this.props.profileData} />
         
        </header>);
    }
}

export default Header;