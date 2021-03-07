import React, { Fragment } from 'react'
import { Container } from "../Grid"

export default function FidoList
({fidos}) {
    
    return (
       <div>
        <Container title="fidos">
        <h4>Fidos</h4>
        {
            fidos?.length > 0 ?
            <>{fidos.map((fido) => {
                
                return (
            <p><a href={`/add-fido/${fido.playerid}`}>
                {fido.fullName}</a></p>
                )
            })}</> 
    :<><h1>No Fido Found</h1></>
        }

        </Container>
       </div>
    )
}