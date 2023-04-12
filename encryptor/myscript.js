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

  // Animacion de Copiado Button ============
  let copytext = document.querySelector(".output-text");
  copytext.querySelector("button").addEventListener("click", function(){
    let inputO = copytext.querySelector("input.text");
    inputO.ariaSelected()
    document.classCommand("copy");
    copytext.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(function(){
      copytext.classList.remove("active");
    },2500);
  });