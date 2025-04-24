import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Song from './components/Song';
import SearchResults from './components/SearchResults';
import Library from './components/Library';

const App = () => {
  // Datos ficticios para resultados de búsqueda
  const [searchResults, setSearchResults] = useState([
    { title: 'Happier Than Ever', artist: 'Billie Eilish', duration: '4:58' },
    { title: 'Levitating', artist: 'Dua Lipa', duration: '3:24' },
    { title: 'Stay', artist: 'The Kid LAROI & Justin Bieber', duration: '2:20' }
  ]);

  // Estado para canciones en biblioteca
  const [librarySongs, setLibrarySongs] = useState([]);


  useEffect(() => {
    console.log("La app se ha cargado correctamente 🎵");
  }, []);
  useEffect(() => {
    console.log(`Biblioteca actualizada. Total de canciones: ${librarySongs.length}`);
  }, [librarySongs]);

  // Función para agregar canción a biblioteca
  const agregarABiblioteca = (cancion) => {
    const yaExiste = librarySongs.some(
      (s) => s.title === cancion.title && s.artist === cancion.artist
    );
    if (!yaExiste) {
      setLibrarySongs([...librarySongs, cancion]);
    }
  };

  // Función para eliminar canción de biblioteca
  const eliminarDeBiblioteca = (index) => {
    const nuevaLista = [...librarySongs];
    nuevaLista.splice(index, 1);
    setLibrarySongs(nuevaLista);
  };

  return (
    <div className="App">
      <Header />

      <SearchResults
        songs={searchResults}
        onAddToLibrary={agregarABiblioteca}
      />

      <Library
        songs={librarySongs}
        onRemoveFromLibrary={eliminarDeBiblioteca}
      />
    </div>
  );
};

export default App;
