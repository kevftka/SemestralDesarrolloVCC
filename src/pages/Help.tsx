import React from 'react'
import './help.sass'

import captionDrag from '../assets/captionDrag.gif'
import TCtrolImg from '../assets/TimeControll.jpg'
import StickTimeImg from '../assets/stickTime.png'
import TextAlignImg from '../assets/textAlign.png'
import addNewCap2Last from '../assets/addNewCaptionToEndOfLastOne.jpg'
import resizeVideo from '../assets/resizeVideo.png'

type State = {
  shortcuts: {
    keys: string[],
    clue: string,
  }[],
  features: {
    imageSrc: string,
    details: string
  }[],
}
export default class Help extends React.Component<{}, State> {
  state: State = {
    shortcuts: [
      {
        keys: ['ctrl', 'space'],
        clue: 'reproducir/pausar reproductor de video',
      },
      {
        keys: ['ctrl', 'right/left'],
        clue: 'avanzar/retroceder en la línea de tiempo [corto]',
      },
      {
        keys: ['ctrl', 'shift', 'right/left'],
        clue: 'avanzar/retroceder en la línea de tiempo [largo]',
      },
      {
        keys: ['ctrl', '+/-'],
        clue: 'acercar/alejar  la línea de tiempo',
      },
      {
        keys: ['ctrl', 'shift', '+/-'],
        clue: 'acercar/alejar la página web',
      },
      {
        keys: ['ctrl', '6/7'],
        clue: 'ir a [inicio del último título]/[fin del siguiente título]',
      },
      {
        keys: ['ctrl', 'down'],
        clue: 'seleccione el subtítulo actual',
      },
      {
        keys: ['escape'],
        clue: 'deseleccionar el subtítulo seleccionado',
      },

      {
        keys: ['tab', 'left/right'],
        clue: 'mirar el final del subtítulo seleccionado hacia adelante/atrás',
      },
      {
        keys: ['alt', 'left/right'],
        clue: 'mirar el comienzo del subtítulo seleccionado hacia adelante/atrás',
      },
      {
        keys: ['ctrl', '8/9'],
        clue: 'mirar el inicio/fin del subtitulo selecionado a la hora actual',
      },
      {
        keys: ['ctrl', 'enter'],
        clue: 'crear nuevo subtitulo',
      },
      {
        keys: ['enter'],
        clue: 'actualiza el valor de los subtítulos, también funciona automáticamente cuando cambias entre subtítulos',
      },
      {
        keys: ['ctrl', 'delete'],
        clue: 'borrar subtitulo selecionado',
      },
      {
        keys: ['ctrl', '0'],
        clue: 'alternar la dirección del texto en la entrada del editor de subtítulos [de izquierda a derecha]/[de derecha a izquierda]',
      },
      {
        keys: ['ctrl', 'z/y'],
        clue: 'deshacer/rehacer',
      },
      {
        keys: ['ctrl', 's'],
        clue: 'guardar subtitulos',
      },
    ],

    features: [
      {
        imageSrc: captionDrag,
        details: `puede arrastrar el principio o el final de los subtítulos para ampliar o limitar el tiempo de los subtítulos. 
        dragCaption.GIF también puede arrastrar el centro del título para moverlo hacia adelante o hacia atrás en el tiempo.`
      },
  
      {
        imageSrc: TCtrolImg,
        details: `Puedes cambiar la marca de tiempo manualmente haciendo doble clic en ella.
        Los cambios se aplicarán después de hacer clic fuera de la marca de tiempo.`
      },
      {
        imageSrc: StickTimeImg,
        details: "use el botón de tiempo fijo para pegar el inicio/final del título seleccionado al cursor de la línea de tiempo"
      },
      {
        imageSrc: TextAlignImg,
        details: "Puedes cambiar la alineación del texto según el idioma en el que escribes."
      },
      {
        imageSrc: addNewCap2Last,
        details: "Si agrega un nuevo título a los últimos 600 ms del último título, el nuevo título se insertará después del último."
      },
      {
        imageSrc: resizeVideo,
        details: "Puedes cambiar el tamaño del video arrastrando la línea delgada después del video y antes de la vista de subtítulos."
      }
    ]
  }

  render() {
    return (<>
      <h2 className="page-title">pagina de Ayuda</h2>
      <div className="wrapper">

        <h3> <a href="#features">características</a> </h3>
        <ul id="features">
          {this.state.features.map(f => <li>
            <img src={f.imageSrc} className="d-block" alt="" />
            <span> {f.details} </span>
          </li>)}
        </ul>

        <h3> <a href="#shortcuts">Atajos</a> </h3>
        <ul id="shortcuts">
          {this.state.shortcuts.map(sh => (
            <li className="shortcut d-flex justify-content-between">
              <span className="keys">
                {sh.keys.map((k, i) => <>
                  {i !== 0 ? <span className="plus">+</span> : ''}
                  <code className="key">{k}</code>
                </>)}
              </span>

              <span className="clue"> {sh.clue} </span>
            </li>
          ))}

        </ul>

      </div></>)
  }
}
