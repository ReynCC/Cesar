function ConvertirFrase(frase, cantDesplazamiento) {

      var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      var nuevaFrase = "";
  
      frase = frase.toUpperCase();

        for (var i = 0; i < frase.length; i++) {

          var letra = frase[i];

          var posicion = abc.indexOf(letra);
  
        if (posicion === -1) {

          nuevaFrase += letra;

          continue;

      }
  
        var nuevaPosicion = (posicion + cantDesplazamiento) % abc.length;

        if (nuevaPosicion < 0) {

          nuevaPosicion += abc.length;

      }
  
          nuevaFrase += abc[nuevaPosicion];

    }
  
        return nuevaFrase;

  }