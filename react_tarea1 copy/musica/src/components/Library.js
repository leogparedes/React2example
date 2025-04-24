import React from 'react';
import Song from './Song';

const Library = ({ songs, onRemoveFromLibrary }) => {
  return (
    <div className="library">
      <h2 className="library-title">Mi Biblioteca</h2>
      <div className="song-list">
        {songs.map((song, index) => (
          <div key={`${song.title}-${index}`}>
            <Song
              title={song.title}
              artist={song.artist}
              duration={song.duration}
            />
            <button
              onClick={() => onRemoveFromLibrary(index)}
              className="remove-button"
            >
              Borrar de mi biblioteca
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;

