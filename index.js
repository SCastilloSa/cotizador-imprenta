pagoOperacionesMenores = {
  alzado: true,
  separado: true,
  corcheteado: true,
  corte: true,
  perforado: true,
  pagoOperacionesMenores: 15,
  pagoAlzado: 500,
  pagoImpresion: 1600,
}
let data = {
    nombre: "sebastian",
    tipoTrabajo: "talonarios",
    tipoCliente: "cliente",
    cantidad: 1000,
    moldes: 1,
    multiplicidad: 3,
    sobrantes: 20,
    untal: 50,
    diseno: 1000,
    gastosGenerales: 0.7,
    utilidad: 0.5,
    impuesto: 0.27,
    hojasResma: 500,
    costoResma: 8000,
    costoTinta: 2,
    ...pagoOperacionesMenores
}

const tirajeUtil = ({moldes,cantidad, multiplicidad}) => cantidad / moldes * multiplicidad
const costoImpresion = () => tirajeReal() * costotinta 
const costoManoDeObra = () => tirajeUtil() % 1000 === 0 ? pagoImpresion * tirajeUtil() / 1000 : pagoImpresion * parseInt(tirajeUtil() / 1000 + 1)
const costoAlzado = () => tirajeUtil() % 1000 === 0 ? pagoAlzado * tirajeUtil() / 1000 : pagoAlzado * parseInt(tirajeUtil() / 1000 + 1)
const costoPerforado = () => tirajeUtil() % 1000 === 0 ? pagoAlzado * tirajeUtil() / 1000 : pagoAlzado * parseInt(tirajeUtil() / 1000 + 1)
const costoTerminado = () => tirajeUtil() / untal * pagoOperacionesMenores 
const costoSeparado = () => tirajeUtil() / untal * pagoOperacionesMenores 
const costoCorcheteado = () => tirajeUtil() / untal * pagoOperacionesMenores 
const costoCorte = () => tirajeUtil() / untal * pagoOperacionesMenores

const costoOperacional = () => (data.diseno + costoPapel() + costoImpresion() +
costoManoDeObra() + costoAlzado() + costoSeparado() +
costoCorcheteado() + costoCorte() + costoTerminado() +
costoPerforado())

const costoTotal = () => costoOperacional() * (1 + gastosGenerales / 100)
const precioDeVenta = () => {
    let precio = costoTotal() * (1 + data.utilidad) + impuesto / 100 * costoTotal() * data.utilidad
    precio = Math.ceil(precio / 100) * 100
    return precio 
}

const precioConIVA = () => {
    return precioDeVenta() * 1.19
  }

function $cl (number) {
  let pesos = new Intl.NumberFormat('cl-ES').format(number)
  pesos = `$ ${pesos}`
  return pesos
}