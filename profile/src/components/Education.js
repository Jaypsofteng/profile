import React from "react";
import Typography from '@mui/material/Typography';

class Education extends React.Component {

    render() {
        return (
            <p className="App-block-style">
                <Typography variant="h5" sx={{margin: 1}}className="App-tag-style">
                    Education
                </Typography>
                <div className="component" >
                    {this.props.educationData.map(edu => {
                        return <div className="component-header">
                            <Typography>
                                {edu.discription}
                            </Typography>
                            <Typography>
                                {edu.timeLine}
                            </Typography>
                        </div>
                    })}
                </div>
            </p>
        );
    }
}

export default Education;