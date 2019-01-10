import React from "react"

class NumberInput extends React.Component{
    render(){

        const {numberInputOnChange} = this.props

        return <div><input type="number" onChange={(event)=>{
            numberInputOnChange(event.target.value)
        }}/></div>
    }

}
export default NumberInput