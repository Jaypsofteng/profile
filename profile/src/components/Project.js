import React from "react";

class Project extends React.Component {
    render() {
        return (
            <p className="App-block-style">
                <div className="App-tag-style">
                    Projects
                </div>
                <div className="component" >
                    {this.props.projectData.map(proj => {
                        return (
                            <div >
                                <div className="component-header" >
                                    {proj.name}
                                </div>
                                <p className="project-style paragraph">
                                    Discription: {proj.discription}
                                    <div className="App-link">{proj.link}</div>
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