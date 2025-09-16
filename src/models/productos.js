import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
    unique: true,
  },
  precio: {
    type: Number,
    required: true,
    min: 50,
    max: 1000000,
  },
  categoria: {
    type: String,
    required: true,
    enum: ["Infusiones", "Batidos", "Dulce", "Salado"],
  },

  descripcion_breve: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 250,
  },
  descripcion_amplia: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 500,
  },
  imagen: {
    type: String,
    required: true,
    validate: {
      validator: (valor) => {
        return /^(https?:\/\/.?[\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?(.[jpeg|jpg|png|webp])$/.test(
          valor
        );
      },
    },
  },


});

const Producto = mongoose.model("producto", productoSchema);

export default Producto;