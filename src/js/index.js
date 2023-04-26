const { Song, Playlist } = require("./classes.js");

/**
 * Retrieves a list of songs from the Genius API based on a search query
 *
 * @param {string} query - The search query for songs
 * @returns {Promise<Array>} - A Promise that resolves to an array of unique songs matching the search query
 */
function getSongsList(query) {
  // Encode the search query to include special characters
  const encodedName = encodeURIComponent(query);

  // Construct the URL to call the Genius API search endpoint
  const url = `https://genius.com/api/search/songs?q=${encodedName}&limit=10`;

  // Call the Genius API search endpoint and get the response as JSON
  const response = fetch(url);
  const jsonResponse = response.json();

  console.log(jsonResponse);

  // Extract the songs from the response and map them to a new object with just their name and ID
  return jsonResponse.response.sections[0].hits.map(
    (song) =>
      new Song(
        song.result.title,
        song.result.artist_names,
        song.result.song_art_image_url
      )
  );
}

async function buttonTrigger(clickEvent) {
  console.log(clickEvent);

  const playlistTracklistElem = document.querySelector(".playlist>.tracklist");

  // Search for the parent with the class "song-results-option"
  let songElem = clickEvent.target.parentNode;
  while (songElem && songElem.className !== "song-results-option") {
    songElem = songElem.parentNode;
  }

  const addCase = songElem.querySelector(".song-add-btn");

  if (addCase) {
    const results = songElem.parentNode;
    results.removeChild(songElem);

    const svg = songElem.querySelector("svg");
    svg.parentNode.className = "song-remove-btn";
    svg.setAttribute("viewBox", "0 0 1024 1024");
    const path = svg.querySelector("g>path");
    path.setAttribute(
      "d",
      "M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m0-896C299.968 128 128 299.968 128 512s171.968 384 384 384 384-171.968 384-384S724.032 128 512 128z m192 448H320a64 64 0 1 1 0-128h384a64 64 0 0 1 64 64c0 35.392-28.608 64-64 64z"
    );

    playlistTracklistElem.append(songElem);
  } else {
    playlistTracklistElem.removeChild(songElem);
  }

  // update the playlist cookie (take into account that it might not exist yet)
  const cookies = document.cookie.split(";");
  let playlist = null;
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("playlist=")) {
      playlist = JSON.parse(cookie.split("=")[1]);
      break;
    }
  }

  console.log(cookies);
  console.log(playlist);

  if (!playlist) {
    playlist = { songs: [] };
  }

  const song = new Song(
    songElem.querySelector(".song-name").innerText,
    songElem.querySelector(".song-artists").innerText,
    songElem.querySelector(".song-image").src
  );

  if (addCase) {
    playlist.songs.push(song);
  } else {
    playlist.songs = playlist.songs.filter(
      (playlistSong) =>
        playlistSong.title !== song.title &&
        playlistSong.artists !== song.artists
    );
  }

  document.cookie = `playlist=${JSON.stringify(playlist)};max-age=86400`;

  console.log(document.cookie.split(";"));
  console.log(playlist);
}

document.addEventListener("DOMContentLoaded", () => {
  const cookies = document.cookie.split(";");
  let playlist = null;
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("playlist=")) {
      playlist = JSON.parse(cookie.split("=")[1]);
      break;
    }
  }

  if (playlist) {
    const songs = playlist.songs;
    const uniqueSongs = [];
    console.log(songs);
    songs.forEach((song) => {
      if (
        !uniqueSongs.find(
          (uniqueSong) =>
            uniqueSong.title === song.title &&
            uniqueSong.artists === song.artists
        )
      ) {
        uniqueSongs.push(song);
      }
    });

    playlist.songs = uniqueSongs;
    console.log(playlist);

    const playlistTracklistElem = document.querySelector(
      ".playlist>.tracklist"
    );
    playlist.songs.forEach((song) => {
      const songObj = new Song(song.title, song.artists, song.coverart);
      const songElem = songObj.toHTML(false);
      console.log(songElem);
      songElem
        .querySelector(".song-remove-btn>svg")
        .addEventListener("click", buttonTrigger);

      // check if the song is already in the playlist
      if (
        !playlistTracklistElem.querySelector(
          `[data-title="${song.title}"][data-artists="${song.artists}"]`
        )
      ) {
        playlistTracklistElem.appendChild(songElem);
      }
    });

    console.log(playlist);
    document.cookie = `playlist=${JSON.stringify(playlist)};max-age=86400`;
  }

  const songInput = document.querySelector(".search-input");

  if (songInput) {
    songInput.addEventListener("input", async (event) => {
      let songsList = await getSongsList(event.target.value);
      console.log(songsList);
      songsList.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        if (a.artists < b.artists) {
          return -1;
        }
        if (a.artists > b.artists) {
          return 1;
        }
        return 0;
      });
      const playlistTracklistElem = document.querySelector(
        ".playlist>.tracklist"
      );
      songsList = songsList.filter(
        (song) =>
          !playlistTracklistElem.querySelector(
            `[data-title="${song.title}"][data-artists="${song.artists}"]`
          )
      );
      const resultsContainer = document.querySelector(".results");
      resultsContainer.innerHTML = "";
      songsList.forEach((song) => {
        const songElem = song.toHTML(true);
        resultsContainer.appendChild(songElem);
        songElem
          .querySelector(".song-results-option>.song-add-btn>svg")
          .addEventListener("click", buttonTrigger);
      });
    });
  }
});
