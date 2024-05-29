import React, { Component } from "react"

class Hunter extends Component{
    render(){
        return <div>Hello {this.props.name} . Your area is { this.props.area }</div>;
    }
}
export default Hunter