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
    alzado: true,
    separado: true,
    corcheteado: true,
    corte: true,
    perforado: true,
    pagoOperacionesMenores: 15,
    pagoAlzado: 500,
    pagoImpresion: 1600,
}

const tirajeUtil = (data) => {
    return 
}



function calculos (data) {
    
    const calculos2 = {

    pagoOperacionesMenores: 15,
    pagoAlzado: 500,
    pagoImpresion: 1600,
    tirajeUtil: function () {
      return cantidad / moldes * multiplicidad
    },
    tirajeReal: function () {
      return this.tirajeUtil() + sobrantes * multiplicidad
    },
    costoPapel: function () {
      return costoresma / hojasresma * this.tirajeReal()
    },
    diseno: function () {
      return diseno
    },
    costoImpresion: function () {
      return this.tirajeReal() * costotinta
    },
    costoManoDeObra: function () {
      const x = this.tirajeUtil() % 1000
      if (x === 0) {
        return this.pagoImpresion * this.tirajeUtil() / 1000
      } else {
        return this.pagoImpresion * parseInt(this.tirajeUtil() / 1000 + 1)
      }
    },
    costoAlzado: function () {
      if (alzado) {
        const x = this.tirajeUtil() % 1000
        if (x === 0) {
          return this.pagoAlzado * this.tirajeUtil() / 1000
        } else {
          return this.pagoAlzado * (parseInt(this.tirajeUtil() / 1000) + 1)
        }
      } else {
        return 0
      }
    },
    costoPerforado: function () {
      if (perforado) {
        const x = this.tirajeUtil() % 1000
        if (x === 0) {
          return this.pagoAlzado * this.tirajeUtil() / 1000
        } else {
          return this.pagoAlzado * (parseInt(this.tirajeUtil() / 1000) + 1)
        }
      } else {
        return 0
      }
    },
    costoTerminado: function () {
      return this.tirajeUtil() / untal * this.pagoOperacionesMenores
    },
    costoSeparado: function () {
      if (separado) {
        return this.tirajeUtil() / untal * this.pagoOperacionesMenores
      } else {
        return 0
      }
    },
    costoCorcheteado: function () {
      if (corcheteado) {
        return this.tirajeUtil() / untal * this.pagoOperacionesMenores
      } else {
        return 0
      }
    },
    costoCorte: function () {
      if (corte) {
        return this.tirajeUtil() / untal * this.pagoOperacionesMenores
      } else {
        return 0
      }
    },
    costoOperacional: function () {
      return diseno + this.costoPapel() + this.costoImpresion() +
          this.costoManoDeObra() + this.costoAlzado() + this.costoSeparado() +
          this.costoCorcheteado() + this.costoCorte() + this.costoTerminado() +
          this.costoPerforado()
    },
    costoTotal: function () {
      return this.costoOperacional() * (1 + gastosGenerales / 100)
    },
    precioDeVenta: function () {
      let precio = this.costoTotal() * (1 + utilidad / 100) + impuesto / 100 * this.costoTotal() * utilidad / 100
      precio = Math.ceil(precio / 100) * 100
      return precio
    },
    precioConIVA: function () {
      return this.precioDeVenta() * 1.19
    }
  }

  return calculos2
}



function $cl (number) {
  let pesos = new Intl.NumberFormat('cl-ES').format(number)
  pesos = `$ ${pesos}`
  return pesos
}