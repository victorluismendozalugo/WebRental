import servicioBase from '@/services/base'

const servicio = {};


servicio.productosCon = (datos) => {
    return servicioBase.post("catalogo/productosweb", datos)
        .then(r => {
            return r.data
        })
        .catch(err => {
            console.log(err);
        })
}

servicio.productosFiltros = (datos) => {
    return servicioBase.post("catalogo/productosfiltros", datos)
        .then(r => {
            return r.data
        })
        .catch(err => {
            console.log(err);
        })
}

export default servicio

