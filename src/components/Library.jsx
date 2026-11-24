import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (<LibrarySong songs={songs} setCurrentSong={setCurrentSong} song={song} id={song.id} key={song.id} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs} />))}
            </div>
            <p className="library-credits">Music by Marek Zielinski, Alex Morgan, and Yevhen Astafiev from <a href="https://pixabay.com/music/" target="_blank" rel="noopener noreferrer">Pixabay</a>.</p>
        </div>
    )
}

export default Library;