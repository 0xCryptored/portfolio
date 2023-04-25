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
      alert("Encriptado!", 3000)

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
    alert("Desencriptado!", 3000)
  }

  // BOTON DE COPIADO ============
  function copy() {
    // Get el campo de texto
    var copyText = document.getElementById("output-text");
  
    // Seleccionar el campo
    copyText.select();
    copyText.setSelectionRange(0, 99999);

     // copiar el texto dentro del campo
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Se copio el texto: " + copyText.value, 3000);
  }

  // CAMBIOS SECRETOS CAPIBARA ============
  function secret(){
    let capi = "Capibara!";
    const title = document.getElementById('capi');
    if (title.innerHTML === "Cryptored Labs"){
      title.innerHTML = capi;
    }else{
      title.innerHTML = "Cryptored Labs";
    }
  }

  // SHOW ALERT
  function alert(message, delay) {
    var alert = document.getElementById("alert");
    alert.innerHTML = message;
    alert.style.display = "inline-block";
    setTimeout(function(){
      alert.style.display = "none";
    }, delay);
  }


  document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.querySelector('.copyButton');
    copyButton.onclick = () => {
      copy();
      secret();
    }
  });
  

  
  

