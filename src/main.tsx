// Libraries
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';

// import '../node_modules/normalize.scss/normalize.scss';

// Store
import { store } from './store/store';

// Styles
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<App />
	</Provider>
);
