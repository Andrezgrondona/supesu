import React from "react"

export default class Item extends React.Component{
    render(){
        return(
            <div className="BannerHeader"> {this.props.greeting}</div>  
        )
        
    }
}