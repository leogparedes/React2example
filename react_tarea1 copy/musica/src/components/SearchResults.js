import React from 'react';
import Song from './Song';

const SearchResults = ({ songs, onAddToLibrary }) => {
  return (
    <div className="search-results">
      <h2 className="search-title">Resultados de búsqueda</h2>
      <div className="song-list">
        {songs.map((song, index) => (
          <div key={`${song.title}-${index}`}>
            <Song
              title={song.title}
              artist={song.artist}
              duration={song.duration}
            />
            <button
              onClick={() => onAddToLibrary(song)}
              className="add-button"
            >
              Agregar a mi biblioteca
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;

