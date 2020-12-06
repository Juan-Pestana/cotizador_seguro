import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'


const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;

    li{
        text-transform: capitalize
    }
`


const Resumen = ({datos}) => {

    const {marca, year, plan} = datos

    if( marca === '' || year === '' || plan === '') return null


    return (
        <ContenedorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {marca}</li>
                <li>Año: {year}</li>
                <li>Plan: {plan}</li>
            </ul>
        </ContenedorResumen>
    )
}

Resumen.propTypes ={
    datos : PropTypes.object.isRequired
}

export default Resumen
