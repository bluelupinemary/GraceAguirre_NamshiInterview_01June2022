import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './theme/default';
import GlobalStyles from './styles/GlobalStyles';
import CartContext, {CartContextProvider} from './store/cart-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={defaultTheme}>
    <CartContextProvider>
    <React.StrictMode>
      <GlobalStyles />
        <App />
    </React.StrictMode>
    </CartContextProvider>
  </ThemeProvider>
);
