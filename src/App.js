import React from "react"
import Card from "./Card"
import NumberInput from "./NumberInput"

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            numberToMultiply:0
        }

    }
    render(){
        const {numberToMultiply} = this.state
    return<div><NumberInput numberInputOnChange={number=>{
        this.setState({
            numberToMultiply : number
        })
    }}/>
    <Card multiplier={numberToMultiply} factor={2}/>
    <Card multiplier={numberToMultiply} factor={5}/>
    <Card multiplier={numberToMultiply} factor={10}/>
    </div>    
    }


}

export default App


