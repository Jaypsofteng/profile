import React from "react";
import Typography from '@mui/material/Typography';

class Experience extends React.Component {

    render() {
        return (
            <p className="App-block-style">
                <Typography variant="h5" sx={{ margin: 1 }} className="App-tag-style">
                    Experience
                </Typography>
                {this.props.experienceData.map(exp => {
                    return <div className="component" >
                        <div className="component-header">
                            <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>
                                <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>
                                    {exp.jobTitle}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>
                                    {exp.company}
                                </Typography>
                            </Typography>
                            <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>

                                <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>
                                    {exp.start}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>
                                    {exp.end}
                                </Typography>
                            </Typography>
                        </div>

                        {exp.jobDiscription.map(discription => {
                            return <Typography className="paragraph" variant='body1'>{discription}</Typography>;
                        })}
                    </div>;
                })}
            </p>

        );
    }
}

export default Experience;