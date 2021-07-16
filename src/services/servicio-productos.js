import servicioBase from '@/services/base'

const servicio = {};


servicio.productosCon = (datos) => {
    return servicioBase.post("catalogo/productos", datos)
        .then(r => {
            return r.data
        })
        .catch(err => {
            console.log(err);
        })
}

export default servicio

