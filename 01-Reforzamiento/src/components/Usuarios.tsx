import { useEffect, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';
export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>()

    useEffect(() => {
        reqResApi.get<ReqResListado>('/users')
            .then(resp => {
                console.log(resp.data.data);
                setUsuarios(resp.data.data);
            })
            .catch(console.log);
    }, [])

    const renderItem = ({id, first_name, last_name, email, avatar}: Usuario) => {
        return (
            <tr key={id.toString()}>
                <img src={avatar} alt={first_name} style={{width:50, borderRadius:100}}></img>
                <th>{first_name} {last_name}</th>
                <th>{email}</th>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios: </h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios?.map(renderItem)
                    }
                </tbody>
            </table>
        </>
    )
};
