import HabitacionesDao from "../dao/habitaciones.dao.js";

const habitacionesDao= new HabitacionesDao();

export default class HabitacionesController {
crearhabitacion = async (req, res) => {
    try {
        const { body } = req;
        const result = await habitacionesDao.createFile(body);
        res.status(201).json({ status: "success", payload: result });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }

};


leerhabitaciones = async (req, res) => {
    try {
        const { hotel,fecha,habitacion,reservado,huespedes} = req.query;
        let result = await habitacionesDao.readFile()
        if (hotel) {
            result = result.filter((item) => item.hotel === hotel);
        }
        if (habitacion){
            result = result.filter((item) => item.habitacion === habitacion);
        }
        if (fecha) {
            result = result.filter((item) => item.fecha === fecha);
        }
        if (reservado) {
            result = result.filter((item) => item.reservado === reservado);
        }
        if (huespedes) {
            result = result.filter((item) => item.huespedes === huespedes);
        }
        res.status(200).json({ status: "success", payload: result });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
    
}


 



borrarhabitacionporid = async (req, res) => {
    try {
        const orderId = parseInt(req.params.id);
        const result = await habitacionesDao.deleteFile(orderId);
        res.status(200).json({ status: "success", payload: result });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }

}
modificarhabitacionporid = async (req, res) => {
    try {
        const orderId = parseInt(req.params.id);
        console.log(orderId);
        const { body } = req;
        const result = await habitacionesDao.updateFile(orderId, body);
        res.status(200).json({ status: "success", payload: result });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
}

mostrarhabitacionporid = async (req, res) => {
    try {
        const orderId = parseInt(req.params.id);
        const result = await habitacionesDao.readFileById(orderId);
        res.status(200).json({ status: "success", payload: result });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
}


 borrartodaslashabitaciones = async (req, res) => {
    try {
        await habitacionesDao.deleteAllFile();
        const result = await habitacionesDao.readFile();
        res.status(200).json({ status: "success", result });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
 }

 crearReserva = async (req, res) => {
    try {
        
        const {id} = req.params;
        let habitacion = await habitacionesDao.readFileById(Number(id));
        let reservaHecha = !habitacion.reservado;
        const result = await habitacionesDao.updateFile(Number(id), {reservado: reservaHecha});
        res.status(201).json({ status: "success" });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
}
}