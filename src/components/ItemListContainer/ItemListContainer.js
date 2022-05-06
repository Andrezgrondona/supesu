import React from "react"

export default class ItemListContainer extends React.Component{
    render(){
        return(
            <div className="BannerHeader"> {this.props.greeting}</div>  
        )
        
    }
}