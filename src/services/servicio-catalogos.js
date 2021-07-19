import servicioBase from '@/services/base'

const servicio = {};


servicio.colores = (datos) => {
    return servicioBase.post("catalogo/colores", datos)
        .then(r => {
            return r.data
        })
        .catch(err => {
            console.log(err);
        })
}

servicio.estilos = (datos) => {
    return servicioBase.post("catalogo/estilos", datos)
        .then(r => {
            return r.data
        })
        .catch(err => {
            console.log(err);
        })
}

servicio.tallas = (datos) => {
    return servicioBase.post("catalogo/tallas", datos)
        .then(r => {
            return r.data
        })
        .catch(err => {
            console.log(err);
        })
}

servicio.terminados = (datos) => {
    return servicioBase.post("catalogo/terminados", datos)
        .then(r => {
            return r.data
        })
        .catch(err => {
            console.log(err);
        })
}

servicio.temporalidades = (datos) => {
    return servicioBase.post("catalogo/temporalidades", datos)
        .then(r => {
            return r.data
        })
        .catch(err => {
            console.log(err);
        })
}
export default servicio

