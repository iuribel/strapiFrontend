import React, {Fragment, useState} from "react";

const Edituser = ({user})=>{
    const [Nombre, setNombre] = useState(user.nombre);
    const [Birthday, setBirthday] = useState(user.birthday);
    const [Id, setId] = useState(user.id);
    //Edit user (update user)
    const updateUser = async e =>{
        e.preventDefault();
        try {
            const body = {Nombre,Birthday,Id};
            const response = await fetch(`http://localhost:5000/users/${user.id}`,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location.reload();
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
    <Fragment>
       
        <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${user.id}`}>
        Editar
        </button>


        <div className="modal" id={`id${user.id}`}>
        <div className="modal-dialog">
            <div className="modal-content">

            
            <div className="modal-header">
                <h4 className="modal-title">Editar usuario</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>

            
            <div className="modal-body">
                <input type="text" className="form-control" value={Nombre} onChange={e =>
                setNombre(e.target.value)}/>
                <input type="text" className="form-control" value = {Birthday} onChange={e =>
                setBirthday(e.target.value)}/>
                <input type="number" className="form-control" value ={Id} onChange={e =>
                setId(e.target.value)}/>
            </div>

            
            <div className="modal-footer">

                <button type="button" className="btn btn-warning" data-dismiss="modal"
                onClick={e => updateUser(e)}
                >Guardar</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
            </div>

            </div>
        </div>
        </div>
    </Fragment>
)};

export default Edituser;