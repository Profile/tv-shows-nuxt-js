<template>
  <div>
    <b-container>
      <h1 class="mt-4 mb-3">{{ pageTitle }}</h1>
      <b-row v-if="tvShows?.length" align-v="start">
        <b-col cols="3" v-for="tvShow in tvShows" :key="tvShow.show.id">
          <Article :tv-show="tvShow.show" />
        </b-col>
      </b-row>
      <template v-else>
        <p>Pardon us, but no shows matching your query were found.</p>
        <nuxt-link to="/" title="not found Go homepage">
          Go homepage
        </nuxt-link>
      </template>
    </b-container>
  </div>
</template>

<script>
import { getSearchedShows } from '~/services/tvMazeAPI'
import Article from '~/components/Article'

export default {
  name: 'SearchPage',
  components: { Article },
  data() {
    return {
      pageTitle: `Results For: ${this.$route.query.q}`,
    }
  },
  head() {
    return {
      title: this.pageTitle,
    }
  },
  async asyncData({ route, error }) {
    try {
      const { q } = route.query
      const tvShows = await getSearchedShows(q)

      return {
        tvShows,
      }
    } catch {
      error({
        statusCode: 504,
        message: "Something is wrong :'(",
      })
    }
  },
}
</script>
