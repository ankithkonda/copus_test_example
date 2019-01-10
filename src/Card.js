import React from "react"

class Card extends React.Component{
    
    render(){
        const {multiplier,factor} = this.props
        return <div>{multiplier * factor}</div>
    }
    
}

export default Card