<template>
  <div>
    <b-container>
      <h1 class="mt-4 mb-3">{{ pageTitle }}</h1>
      <b-row v-if="popularTvShows?.length" align-v="start">
        <b-col cols="3" v-for="tvShow in popularTvShows" :key="tvShow.id">
          <Article :tv-show='tvShow' />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { getPopularShows } from '~/services/tvMazeAPI'
import Article from '~/components/Article'

export default {
  name: 'IndexPage',
  components: { Article },
  data() {
    return {
      pageTitle: 'Popular Tv Shows',
    }
  },
  head() {
    return {
      title: this.pageTitle,
    }
  },
  async asyncData({ error }) {
    try {
      const popularTvShows = await getPopularShows()

      return {
        popularTvShows,
      }
    } catch (e) {
      console.log(e)
    }
  },
}
</script>
