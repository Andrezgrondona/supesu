import React from "react"

export default class ItemListContainer extends React.Component{
    render(){
        return(
            <div className="BannerHeader"> {this.props.greeting}</div>  
        )
        
    }
}




/* import React from "react"


export default function ItemListContainer (){
    const [] = React.useState(BannerHeader)
        return(
            <div className="BannerHeader"> {this.props.greeting}</div>  
        )    

}  */