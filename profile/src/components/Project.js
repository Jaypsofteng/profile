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
                                    <div className="App-link">{proj.link}</div>
                                    <div>
                                        Discription: {proj.discription}
                                    </div>
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