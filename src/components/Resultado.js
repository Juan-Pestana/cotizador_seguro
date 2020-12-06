import React from 'react'
import styled from '@emotion/styled'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import PropTypes from 'prop-types'



const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;

`;

const ResultadoCotización = styled.div`
    background-color: rgb(127, 224, 237);
    padding: .5rem;
    border: 1px solid #26C6DA;
    margin-top: 1rem;
    text-align: center;
    position: relative
`

const TextoCotizacion = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
 
    margin: 0;

`;
const Resultado = ({cotizacion}) => {

   

    return (
        <div>
            {cotizacion === 0 ? <Mensaje>Selecciona Marca, Año y tipo de seguro</Mensaje> : 
            <ResultadoCotización>
                <TransitionGroup component = 'span' className='resultado'>
                    <CSSTransition classNames='resultado' key={cotizacion} timeout={{enter: 500, exit: 500}}>
                     <TextoCotizacion>El total es: <span>{cotizacion}</span>€</TextoCotizacion>
                    </CSSTransition>
                </TransitionGroup>
            </ResultadoCotización>}
        </div>
    )
}

Resultado.propTypes ={
    cotizacion: PropTypes.number.isRequired
}

export default Resultado
