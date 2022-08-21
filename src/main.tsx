import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoute from './routes'
import GlobalStyles from './styles/GlobalStyle'
import { ModalProvider } from 'styled-react-modal'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalProvider>
      <AppRoute />
      <GlobalStyles />
    </ModalProvider>
  </React.StrictMode>
)
