<template>
  <div>
    <b-container>
      <h1 class="mt-4 mb-3">{{ selectedArticle.name }}</h1>
      <div>
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="4">
              <b-card-img
                :src="selectedArticle.image.original"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="8">
              <b-card-body>
                <b-card-text>
                  Rating: {{ selectedArticle.rating.average }}
                </b-card-text>
                <b-card-text>
                  Genres: {{ selectedArticle.genres.join(', ') }}
                </b-card-text>
                <b-card-text>
                  Language: {{ selectedArticle.language }}
                </b-card-text>
                <b-card-text>
                  Premiered: {{ selectedArticle.premiered }}
                </b-card-text>
                <b-card-text>
                  Network: {{ selectedArticle.network.name }}
                </b-card-text>
                <b-card-text> Summary: </b-card-text>
                <b-card-text>
                  {{ selectedArticle.summary.replace(/(<([^>]+)>)/gi, '') }}
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
      <template v-if="episodes.length">
        <h2 class="mt-4 mb-3">Episodes</h2>
        <b-row v-if="episodes?.length" align-v="start">
          <b-col cols="3" v-for="episode in episodes" :key="episode.id">
            <Article
              :link="`/article/${selectedArticle.id}/episode/${episode.id}`"
              :tv-show="episode"
            />
          </b-col>
        </b-row>
      </template>
    </b-container>
  </div>
</template>

<script>
import { getItem, selectedArticleEpisodes } from '~/services/tvMazeAPI'
import Article from '~/components/Article'

export default {
  name: 'TvShowPage',
  components: { Article },
  head() {
    return {
      title: this.selectedArticle.name,
    }
  },
  async asyncData({ route, error }) {
    try {
      const selectedArticle = await getItem(route.params.id)
      const episodes = await selectedArticleEpisodes(route.params.id)

      return {
        selectedArticle,
        episodes,
      }
    } catch {
      error({
        statusCode: 504,
        message: "Something is wrong :'(",
      })
    }
  },
  computed: {
    metaTitle() {
      return this.selectedArticle?.name
    },
  },
}
</script>
