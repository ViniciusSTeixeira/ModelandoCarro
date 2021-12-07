var carro = {
  cor: "preto",
  capacidadeTanque: 40,
  quantidadeTanque: 20,
  consumoMedio: 7,
 
  previsao: function (capacidadeTanque, consumoMedio) {
    var quilom = this.quantidadeTanque * this.consumoMedio;
    return quilom;
  },
  restante: function (rodou) {
    return (this.quantidadeTanque -= rodou / this.consumoMedio);
  },
  "setCor": function(branco){
   this.cor = branco;
  },
  "setCapTanque": function(){
   this.capacidadeTanque
  },
  "setConsMedio": function(){
   this.consumoMedio
  }

};
