import React from "react";
import Typography from '@mui/material/Typography';

class Tools extends React.Component {
    render() {
        return (
            <p className="App-block-style">
                <Typography variant="h5" sx={{margin: 1}} className="App-tag-style">
                Technical Competencies &amp; Professional Skills
                </Typography>
                <div className="component" >
                    <div className="component-header tools-style" >
                        <Typography className="paragraph" variant='body1'>
                        {this.props.toolsData.map(tool => {
                            return (<Typography>{tool}</Typography>);
                        })}
                        <Typography sx={{marginTop: 4}}></Typography>
                        {this.props.skillsData.map(skill => {
                            return (<Typography>{skill}</Typography>);
                        })}
                        </Typography>
                        
                    </div>
                </div>
            </p>
        );
    }

}

export default Tools;