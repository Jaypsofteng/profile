import React from "react";
import Typography from '@mui/material/Typography';

class Project extends React.Component {
    render() {
        return (
            <p className="App-block-style">
                <Typography variant="h5" sx={{margin: 1}}className="App-tag-style">
                    Projects
                </Typography>
                <div className="component" >
                    {this.props.projectData.map(proj => {
                        return (
                            <div >
                                <Typography className="component-header" variant="subtitle1" >
                                    <u>{proj.name}</u>
                                </Typography>
                                <p className="project-style paragraph">
                                    <Typography variant='body1'>
                                        {proj.discription}
                                    </Typography>
                                    <Typography className="App-link">{proj.link}</Typography>
                                </p>
                            </div>
                        );
                    })}

                </div>
            </p>
        );
    }
}

export default Project;