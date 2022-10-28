import { TV_MAZE_API_URL } from '~/.github/config/tvMazeAPI'
import { $fetch } from 'ohmyfetch/node'

function fetchTvMaze(url, params) {
  return $fetch(url, {
    baseURL: TV_MAZE_API_URL,
    params: { ...params },
  })
}

/**
 * Get tv shows (listing)
 */
export function getPopularShows() {
  return fetchTvMaze('/shows')
}

/**
 * Get searched tv shows.
 */
export function getSearchedShows(q) {
  return fetchTvMaze(`/search/shows`, { q })
}

/**
 * Get tv show.
 */
export function getItem(id) {
  return fetchTvMaze(`/shows/${id}`)
}

/**
 * Get tv show`s episodes lists.
 */
export function selectedArticleEpisodes(id) {
  return fetchTvMaze(`/shows/${id}/episodes`)
}

/**
 * Get episode.
 */
export function selectedEpisode(id) {
  return fetchTvMaze(`/episodes/${id}`)
}
