import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux';
import { ThemeProvider } from './provider/ThemeProvider';
// import '../node_modules/normalize.scss/normalize.scss'; 
import './styles/index.scss'
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  // </React.StrictMode>
)

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App';
// import { ThemeProvider } from './provider/ThemeProvider';
// import { store } from './store/store';
// import './styles/index.scss';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Router>
//         <ThemeProvider>
//           <App />
//         </ThemeProvider>
//       </Router>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
