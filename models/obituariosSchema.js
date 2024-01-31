import mongoose from "mongoose";

// Definir el esquema de datos
const obituariosSchema = new mongoose.Schema({
    nombre: String,
    velacion: String,
    exequias: String,
    hora: String,
    destino_final: String,
    fecha: String, // Cambiado a String
});

// Función para formatear la fecha como DD/MM/AAAA
const formatearFechaBogota = (fecha) => {
    const opcionesFecha = { timeZone: 'America/Bogota', day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Intl.DateTimeFormat('es-CO', opcionesFecha).format(fecha);
};

// Middleware para formatear la fecha antes de guardar
obituariosSchema.pre('save', function (next) {
    this.fecha = formatearFechaBogota(this.fecha);
    next();
});

// Crear el modelo basado en el esquema
const Obituarios = mongoose.model('Obituarios', obituariosSchema);

export default Obituarios;
