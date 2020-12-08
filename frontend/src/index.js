import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './App.scss';

// biblioteca do fontawesome
//import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
//import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
//fim fontawesome

//antes de importar o fontawesome
//library.add(fab, faCheckSquare, faCoffee)

//depois de importar fontawesome awui colocamos os icones que queremos adicionar
library.add(faCheckSquare)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


