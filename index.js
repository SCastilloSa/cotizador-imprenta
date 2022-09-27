pagoOperacionesMenores = {
  alzado: true,
  separado: true,
  corcheteado: true,
  corte: true,
  perforado: true,
  pagoOperacionesMenores: 15,
  pagoAlzado: 500,
  pagoImpresion: 1600,}
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
    pagoOperacionesMenores
}

const tirajeUtil = ({moldes,cantidad, multiplicidad}) => cantidad / moldes * multiplicidad







costoImpresion: function () {
    return tirajeReal() * costotinta 
}
  costoManoDeObra: function () {
    const x = tirajeUtil() % 1000
    if (x === 0) {
      return pagoImpresion * tirajeUtil() / 1000
    } else {
      return pagoImpresion * parseInt(tirajeUtil() / 1000 + 1)
    } 
}
  costoAlzado: function () {
    if (alzado) {
      const x = tirajeUtil() % 1000
      if (x === 0) {
        return pagoAlzado * tirajeUtil() / 1000
      } else {
        return pagoAlzado * (parseInt(tirajeUtil() / 1000) + 1)
      }
    } else {
      return 0
    } 
}
  costoPerforado: function () {
    if (perforado) {
      const x = tirajeUtil() % 1000
      if (x === 0) {
        return pagoAlzado * tirajeUtil() / 1000
      } else {
        return pagoAlzado * (parseInt(tirajeUtil() / 1000) + 1)
      }
    } else {
      return 0
    } 
}
  costoTerminado: function () {
    return tirajeUtil() / untal * pagoOperacionesMenores 
}
  costoSeparado: function () {
    if (separado) {
      return tirajeUtil() / untal * pagoOperacionesMenores
    } else {
      return 0
    } 
}
  costoCorcheteado: function () {
    if (corcheteado) {
      return tirajeUtil() / untal * pagoOperacionesMenores
    } else {
      return 0
    } 
}
  costoCorte: function () {
    if (corte) {
      return tirajeUtil() / untal * pagoOperacionesMenores
    } else {
      return 0
    } 
}
  costoOperacional: function () {
    return diseno + costoPapel() + costoImpresion() +
        costoManoDeObra() + costoAlzado() + costoSeparado() +
        costoCorcheteado() + costoCorte() + costoTerminado() +
        costoPerforado() 
    }
  costoTotal: function () {
    return costoOperacional() * (1 + gastosGenerales / 100) 
}
  precioDeVenta: function () {
    let precio = costoTotal() * (1 + utilidad / 100) + impuesto / 100 * costoTotal() * utilidad / 100
    precio = Math.ceil(precio / 100) * 100
    return precio 
}
  precioConIVA: function () {
    return precioDeVenta() * 1.19
  }

function $cl (number) {
  let pesos = new Intl.NumberFormat('cl-ES').format(number)
  pesos = `$ ${pesos}`
  return pesos
}