import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoute from './routes'
import GlobalStyles from './styles/GlobalStyle'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRoute />
    <GlobalStyles />
  </React.StrictMode>
)
