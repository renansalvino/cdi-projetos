import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
  colors: {
    primary: {
      100: "#0A68F6",
      500: "#1405FF",
      900: "#0C065F"
    },
    secondary: {
      100: "#b17df2",
      500: "#7305ff",
      900: "#3a0d72"
    },
    warning: {
      100: "#ebd66b",
      500: "#eed812",
      900: "#b7a505"
    },
    gray: {
      100: "#eaeaea",
      500: "#8c8c8c",
      900: "#000"
    }
  },
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
});

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
