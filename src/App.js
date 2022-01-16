import React from "react"
import Array from "./array";
import "./App.css"

class App extends React.Component {

    constructor() {
        super();
        this.Array = {
            out: 0
        }
        this.refOutput = React.createRef();
    }

    myFunction(value){
        let currentValue = value;
        let output = this.refOutput.current
        this.setState({out: currentValue})

        if(output.value === '0'){
            output.value = '';
        }
        output.value += currentValue

       if (output.value === 'Infinity') {
            setTimeout(() => {
                output.value = '0'
            }, 1000)
        }

    }

    myOperationFunction(value){
        let output = this.refOutput.current;
        if (value === "="){
           output.value = eval(output.value);
        }
    }



    render() {
        return(
            <div className="container">
              <div className="output">
               <input ref={this.refOutput} type= "text" defaultValue={this.Array.out}></input>
              </div>
                <div className="buttons">
                    {Array.buttons.map(item =>
                     <button onClick={()=> {this.myFunction(item.val)}}>
                         {item.val}</button>)}
                    {Array.operations.map(item =>
                        <button onClick={()=> {this.myOperationFunction(item.val)}}>
                            {item.val}</button>)}
                </div>
            </div>
            )
        }
    }

    export default App
