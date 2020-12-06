

export function diferenciaYears (year){
    return new Date().getFullYear() - year
}

export function calcularOrigen (origen){
    let incremento;
    switch(origen){
        case 'europeo':
            incremento = 1.30
            break;
        case 'americano':
            incremento = 1.15
            break;
        case 'asiatico' :
            incremento = 1.0
            break
        default:
            break;
    }
    return incremento
}

export function calcularPlan (plan){

    return plan === 'basico' ? 1.20 : 1.5

}

