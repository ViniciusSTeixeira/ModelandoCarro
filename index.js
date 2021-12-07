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
  "setCor": function(novaCor){
   this.cor = novaCor
  },
  "setCapTanque": function(novaCapacidade){
   this.capacidadeTanque = novaCapacidade
  },
  "setConsMedio": function(novoConsumo){
   this.consumoMedio = novoConsumo
  },
  "getConsumoMedio": function(){
    console.log(carro.consumoMedio + ' km/l')
  },
};
