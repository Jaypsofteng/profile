import React from 'react';
import profilePic from '../images/my-pic.jpg';
import Profile from './Profile';
class Header extends React.Component {

    render() {
        var data = this.props.headerData;
        var name = data.name;
        var profession = data.profession;
        var email = data.email;
        return (<header className="App-header App-block-style"  >
            <div>
                <img src={profilePic} alt="jay" className="App-profile" />
                <Profile profileData={this.props.profileData} />
            </div>
            <p className="App-header-text"  >
                <div>
                    {name}
                </div>
                <div>
                    {profession}
                </div>
                <div>
                    {email}
                </div>
            </p>
        </header>);
    }
}

export default Header;