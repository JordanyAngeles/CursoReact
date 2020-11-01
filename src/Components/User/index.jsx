
import  React, {Component} from "react";
import Profile from "./Profile";


class UserComponent extends Component{
    constructor() {
        super();
        this.state={
            name: 'Jordany',
            lastname: 'Angeles Neri',
            age: 22,
            gender: 'Male',
            email:'jangelesn@gmail.com',
            counter:0
        }
    }
    SayHello = () =>{
        console.log("Hola a todos")
    }
    incrementCounterValue = () =>{
        let {counter} = this.state
        this.setState({
            counter: counter +=1
        })
    }
    incrementCounterValue2 = () =>{
        let {counter} = this.state
        this.setState({
            counter: counter +=2
        })
    }
    render(){
        const{name,
            lastname,
            age,
            gender,
            email,
            counter
        } = this.state
        return(
        <>
                <h1>Hola Mundo!</h1>
            <p>Mi nombre es {name} {lastname}</p>
            <p>Tengo {age} años</p>
            <p>Mi correo es {email}</p>
            <button onClick={() => this.incrementCounterValue()}>Incrementar</button>
            <p>Contador: {counter}</p>
            <Profile
                nombre={name}
                lastname={lastname}
                email={email}
                counter={counter}
                incrementCounterTwo={this.incrementCounterValue2}
        />
            </>
        )
    }
}

export default UserComponent;
