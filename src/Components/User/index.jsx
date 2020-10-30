
import  React, {Component} from "react";

class UserComponent extends Component{
    constructor() {
        super()
    }
    SayHello = () =>{
        console.log("Hola a todos")
    }
    render(){
        return(
            <h1>Hola Mundo!</h1>
        )
    }
}

export default UserComponent;
