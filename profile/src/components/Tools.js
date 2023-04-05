import React from "react";

class Tools extends React.Component {
    render() {
        return (
            <p className="App-block-style">
                <div className="App-tag-style">
                    Languages &amp; Tools
                </div>
                <div className="component" >
                    <div className="component-header tools-style" >
                        <p className="paragraph">
                        {this.props.toolsData.map(tool => {
                            return (<span>{tool}</span>);
                        })}
                        </p>
                    </div>
                </div>
            </p>
        );
    }

}

export default Tools;