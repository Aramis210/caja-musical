import './App.css';
import { useState } from 'react'

function App() {
  const [palabra, setPalabra] = useState("")

  function cambiarPalabra(event) {
    setPalabra(event.target.value)
  }

  function evaluarPalabra(palabra) {
    let pal1 = (palabra[0] + palabra[1])
    let pal2 = (palabra[0] + palabra[1] + palabra[2])

    if (pal1.toUpperCase() === 'DO' || pal1.toUpperCase() === 'RE' || pal1.toUpperCase() === 'MI' || pal1.toUpperCase() === 'FA'
      || pal1.toUpperCase() === 'LA' || pal1.toUpperCase() === 'SI') {
        console.log('Estoy aqui')
      return(
        alert('Puede estar en la caja musical')
      )
    } else if (pal2.toUpperCase() === 'SOL') {
      console.log('ahora soy un sol')
      return(
        alert('Puede estar en la caja musical')
      )
    } else {
      console.log('ahora estoy aqui')
      return(
        alert('No puede estar en la caja musical')
      )
    }
  }


  return (
    <div>
      <h1>Bienvenidos a la caja musical!!</h1>
      <input onChange={cambiarPalabra} value={palabra} />
      <button onClick={() => { evaluarPalabra(palabra); setPalabra('') }}>AGREGAR A LA CAJA</button>
    </div>
  );
}

export default App;
