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

export default servicio

