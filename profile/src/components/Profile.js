import React from "react";
import Typography from '@mui/material/Typography';

class Profile extends React.Component {
    render() {
        var details = this.props.profileData.details;
        return (
            <p >
                <Typography>
                    <p className="paragraph">
                        <Typography variant='body1'>
                        {details}
                        </Typography>
                    </p>
                </Typography>
            </p>);
    }

}

export default Profile;