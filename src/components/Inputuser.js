import React, {Fragment, useState} from "react";

const Inputuser = ()=>{

    const [Nombre, setNombre]=useState("Nombre");
    const [Birthday, setBirthday]=useState("AAAA-MM-DD");
    const [Id, setId]= useState("0000000000")

    const onSubmitForm = async e =>{
        try{
            const body = {Nombre,Birthday,Id};
            const response = await fetch("http://localhost:5000/users",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(body)
            });

            console.log(response);
            window.location.reload();

        }catch (err){

        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Añadir usuario</h1>
            <form className="d-flex" onSubmit={onSubmitForm}>
                <input type="text" className="form-control"
                value={Nombre} onChange={e => setNombre(e.target.value)}/>
                <input type="text" className="form-control"
                value={Birthday} onChange={e => setBirthday(e.target.value)} />
                <input type="number" className="form-control"
                value={Id} onChange={e => setId(e.target.value)}/>
                <button className="btn btn-success">Añadir</button>
            </form>
        </Fragment>
)}

export default Inputuser;