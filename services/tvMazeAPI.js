import { TV_MAZE_API_URL } from '~/.github/config/tvMazeAPI'

function fetchTvMaze(url, params) {
  return fetch(`${TV_MAZE_API_URL}${url}`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    ...params,
  })
}

/**
 * Get tv shows (listing)
 */
export function getPopularShows() {
  return fetchTvMaze('/shows').then((res) => res.json())
}
