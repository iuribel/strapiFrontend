import React, {Fragment, useState, useEffect} from "react";
import Edituser from "./Edituser";

const Listusers = ()=>{
    const [users, setUsers]= useState([]);
    //eliminar usuario
    
    const deleteuser = async (id) =>{
        try {
            const deleteuser = await fetch(`http://localhost:1337/api/personas/${id}`,{
                method:"DELETE"
            });
            console.log(deleteuser);
            setUsers(users.filter(user=> user.id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    //obtener todos los usuarios
    const getUsers = async ()=>{
        try {
            
            const response = await fetch("http://localhost:1337/api/personas"); //by default it is a GET request
            const jsonData= await response.json();
            const arr=  Object.values(jsonData)[0];
            setUsers(arr);
            //console.log(arr);
            
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(()=>{
        getUsers();
    },[]);

    console.log(users);
    return (
        <Fragment>
            <table className ="table mt-5 text-center">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Fecha de Nacimiento</th>
                    <th>ID</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody>
                {/*<tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>*/}
                {users.map(user =>(
                    
                    <tr key = {user.id}>
                    <td>{user.name}</td>
                    <td>{user.birthday}</td>
                    <td>{user.document}</td>
                    <td>
                    <Edituser user={user}/>
                    </td>
                    <td>                    
                    <button className="btn btn-danger"
                    onClick={()=>deleteuser(user.id)}
                    >
                    Eliminar</button>
                    </td>
                    </tr>
                ))}                                
                </tbody>
            </table>
        </Fragment>
        
)}

export default Listusers;