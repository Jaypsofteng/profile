import React from "react";
class Experience extends React.Component {

    render() {
        return (
            <p className="App-block-style">
                <div className="App-tag-style">
                    Experience
                </div>
                {this.props.experienceData.map(exp => {
                    return <div className="component" >
                        <div className="component-header" >
                            <span>
                                {exp.jobTitle}
                            </span>
                            <span>
                                {exp.jobTimeline}
                            </span>
                        </div>

                        {exp.jobDiscription.map(discription => {
                            return <span className="paragraph">{discription}</span>;
                        })}
                    </div>;
                })}
            </p>

        );
    }
}

export default Experience;