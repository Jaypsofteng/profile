import React from "react";

class Education extends React.Component {

    render() {
        return (
            <p className="App-block-style">
                <div className="App-tag-style">
                    Education
                </div>
                <div className="component" >
                    {this.props.educationData.map(edu => {
                        return <div className="component-header">
                            <span>
                                {edu.discription}
                            </span>
                            <span>
                                {edu.timeLine}
                            </span>
                        </div>
                    })}
                </div>
            </p>
        );
    }
}

export default Education;