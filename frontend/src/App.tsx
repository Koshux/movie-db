import React from 'react'
import './App.css'
import GenreProvider from './context/GenreContext'
import Movies from './components/Movies'

function App() {
  return (
    <GenreProvider>
      <div className="App">
        <header className="App-header">
          <Movies />
        </header>
      </div>
    </GenreProvider>
  );
}

export default App
