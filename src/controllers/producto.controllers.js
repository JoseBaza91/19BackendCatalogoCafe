

export const prueba = (req, res) => {
    res.status(201);
    res.send('Este es un mensaje desde el controlador')
 }

 export const crearProducto = async (req, res) => {
  try {
    //console.log(req),
    console.log(req.body)
    res.send('desde la logica de crear producto!')
  } catch (error) {
    console.error(error)
  }
}