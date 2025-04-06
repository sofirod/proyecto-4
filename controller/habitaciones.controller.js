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
        const result = await habitacionesDao.readFile();
        res.status(200).json({ status: "success", payload: result });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
    
}



borrarhabitacionporid = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await habitacionesDao.deleteFile(id);
        res.status(200).json({ status: "success", payload: result });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }

}
modificarhabitacionporid = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const result = await habitacionesDao.updateFile(id, body);
        res.status(200).json({ status: "success", payload: result });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
}
}