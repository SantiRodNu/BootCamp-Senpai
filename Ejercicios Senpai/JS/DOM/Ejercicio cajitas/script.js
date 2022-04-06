function pintarCajitas(cajitas) {
    if (cajitas.length) {
      return [...cajitas].forEach(pintarCajitas);
    }
    cajitas.style.background = "blue";
  }
  
  function agrandarCajita(e) {
    e.target.style.width = e.target.offsetWidth + 10 + "px";
    e.target.style.height = e.target.offsetHeight + 10 + "px";
  }
  
  const cajitaUno = document.getElementById("cajita-1");
  
  pintarCajitas(cajitaUno);

  // EJ 2

  const ejercicio2 = document.getElementsByClassName ('ej-2')

  pintarCajitas(ejercicio2[1])

  // EJ 3 

  const pintandoEj3= document.querySelector('.ej-3:nth-child(4)')

  pintarCajitas(pintandoEj3)

  // EJ 4

  const contenedor = document.querySelector('.contenedor-cajitas')
  const cajita = document.createElement('div')
  cajita.classList.add('test-box')
  contenedor.appendChild(cajita);

  // EJ 5

  const ejercicio5 = document.getElementById('ej-5')
  ejercicio5.style.background= 'violet'
  ejercicio5.style.width= '100px';

  // EJ 6

  const cajaRoja = document.querySelector('.test-box.bad-box')
    cajaRoja.remove()

  const cajaMalvada = document.querySelector('#contenedor-ej-6')

     cajaMalvada.appendChild(cajaRoja)
        pintarCajitas(cajaRoja)

  // EJ 7 

    const cajaMovediza = document.querySelector('.test-box.moving-box')
    const dejarlaQuieta = () =>
        cajaMovediza.classList.add('calm-box')
    
    cajaMovediza.addEventListener("click", dejarlaQuieta)

  // EJ 8

    const cajaCrece = document.querySelector('.test-box.ej-8')
    cajaCrece.addEventListener('click', agrandarCajita)


  // EJ9

    const cajaRota = document.querySelector('#ej-9')

        cajaRota.addEventListener('click', () => {
        cajaRota.style.transform= 'rotate(120deg)';
    } )



// EJ 10
    const cajitaVerde = document.querySelector('#ej-10')
    const botonEscribir = document.querySelector('#escribir')
    const input10 = document.querySelector('.text-input-box > input')
    botonEscribir.addEventListener('click', () => {
        cajitaVerde.textContent = input10.value
    })

 // EJ 11

    const primerInput = document.querySelector('.primerValor')
    const segundoInput = document.querySelector('#segundoValor')
    const boton11 = document.querySelector('.number-input-box > button')
    const cajita11 = document.querySelector('#ej-11')
    const resultado = (parseFloat(primerInput.value) + parseFloat(segundoInput.value))

    boton11.addEventListener('click', () => {
      cajita11.textContent = resultado.value
      
    })

    