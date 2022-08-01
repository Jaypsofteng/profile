import React from "react";
class Profile extends React.Component {
    render() {
        var details = this.props.profileData.details;
        return (
            <p >
                <div>
                    <p className="paragraph">
                        {details}
                    </p>
                </div>
            </p>);
    }

}

export default Profile;