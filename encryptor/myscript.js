const input = document.getElementById('input-text');
const output = document.getElementById('output-text');


  // Encrypt Function
  function encrypt() {

      // Get elemento de la textarea Input
      const input = document.getElementById('input-text');

      // Get elemento de la textarea Output
      const output = document.getElementById('output-text');

      // Get valor inicial del texto del Input
      textoInicial = input.value;

      //Transformar el texto original, usando funcion replaceAll()
      let textoEncriptado = textoInicial.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');

      // Actualizar el valor del textarea "ouput" al texto transformado
      output.value = textoEncriptado;

    }

  // Decrypt Function
  function decrypt() {
        // Get elemento de la textarea Input
        const input = document.getElementById('input-text');

        // Get elemento de la textarea Output
        const output = document.getElementById('output-text');

        // Get valor inicial del texto del Input
        textoInicial = input.value;

        //Transformar el texto original, usando funcion replaceAll()
        let textoDesencriptado = textoInicial.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');

        // Actualizar el valor del textarea "ouput" al texto transformado
        output.value = textoDesencriptado;
  }

  // BOTON DE COPIADO ============

  // ANIMACION SECRETA CAPIBARA ============
  function secret(){
    title = "Capibara!";
    document.getElementById('capi').innerHTML = title;
  }
  
  

