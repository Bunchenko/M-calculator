import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import { ThemeContextProvider } from './context/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<ThemeContextProvider>
			<App />
		</ThemeContextProvider>
	</Provider>
);
