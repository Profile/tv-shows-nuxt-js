import { TV_MAZE_API_URL } from '~/.github/config/tvMazeAPI'

function fetchTvMaze(url, params) {
  return fetch(url, {
    baseURL: TV_MAZE_API_URL,
    params
  });
}

/**
 * Get tv shows (listing)
 */
function getMovies(query, page = 1) {
  return fetchTvMaze(`movie/${query}`, { page });
}
