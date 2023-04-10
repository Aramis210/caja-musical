import './App.css';
import { useState } from 'react'

function App() {
  const [palabra, setPalabra] = useState("")
  const [palabrasEnCaja, setPalabrasEnCaja] = useState([])
  const [mensaje, setMensaje] = useState('');


  function cambiarPalabra(event) {
    setPalabra(event.target.value)
  }

  function evaluarPalabra(palabra) {
    let pal1 = (palabra[0] + palabra[1])
    let pal2 = (palabra[0] + palabra[1] + palabra[2])

    if (pal1.toUpperCase() === 'DO' || pal1.toUpperCase() === 'RE' || pal1.toUpperCase() === 'MI' || pal1.toUpperCase() === 'FA'
      || pal1.toUpperCase() === 'LA' || pal1.toUpperCase() === 'SI') {
        setPalabrasEnCaja(palabrasEnCaja => [...palabrasEnCaja, palabra.toUpperCase()])
        console.log('Estoy aqui')
        setMensaje('Puede estar en la caja musical');
    } else if (pal2.toUpperCase() === 'SOL') {
      setPalabrasEnCaja(palabrasEnCaja => [...palabrasEnCaja, palabra.toUpperCase()])
      console.log('ahora soy un sol')
      setMensaje('Puede estar en la caja musical');
    } else {
      console.log('ahora estoy aqui')
      setMensaje('No puede estar en la caja musical');
    }
    setTimeout(() => {
      setMensaje('');
    }, 3000);
    
  }


  return (
    <div>
      <h1 id='titulo'>Bienvenidos a la caja musical!!</h1>
      <input onChange={cambiarPalabra} value={palabra} />
      <button className='App-boton' onClick={() => { 
        if (palabra) { // Comprueba si el valor de palabra no es null, undefined o vacío
          evaluarPalabra(palabra);
          setPalabra('');
        } else {
          setMensaje('Ingrese una palabra antes de agregar a la caja');
          setTimeout(() => setMensaje(''), 3000);
        }
      }}>AGREGAR A LA CAJA
      {mensaje && <span className="mensaje-temporal">{mensaje}</span>}
      </button>
      <div id='caja'>
        <h2 id='Titulocaja'>Palabras en la caja:</h2>
        <ul>
          {palabrasEnCaja.map((palabra, index) => <li key={index}>{palabra}</li>)}
        </ul>
      </div>
    </div>
  );
  
}

export default App;
