import React from 'react';

const Profile =(props) => (
    <>
    <h1>COMPONENTE DE PERFIL</h1>
    <p>Nombre del Cliente: {props.nombre}</p>
    <p>Contador: {props.counter}</p>
    <button onClick={props.incrementCounterTwo}>+2</button>
    </>
)
export default Profile