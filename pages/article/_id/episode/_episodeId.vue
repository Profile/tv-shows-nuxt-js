<template>
  <div>
    <b-container>
      <h1 class="mt-4 mb-3">{{ episode.name }}</h1>
      <div>
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="4">
              <b-card-img :src="episode.image.original" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="8">
              <b-card-body>
                <b-card-text>
                  Rating: {{episode.rating.average}}
                </b-card-text>
                <b-card-text>
                  Genres: {{episode.genres.join(', ')}}
                </b-card-text>
                <b-card-text>
                  Language: {{episode.language}}
                </b-card-text>
                <b-card-text>
                  Premiered: {{episode.premiered}}
                </b-card-text>
                <b-card-text>
                  Network: {{episode.network.name}}
                </b-card-text>
                <b-card-text>
                  Summary: {{episode.network.name}}
                </b-card-text>
                <b-card-text>
                  {{episode.summary.replace(/(<([^>]+)>)/gi, '')}}
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>

      </div>
    </b-container>
  </div>
</template>

<script>
import { selectedEpisode } from '~/services/tvMazeAPI'

export default {
  name: 'EpisodePage',
  components: { Article },
  head() {
    return {
      title: this.episode.name
    }
  },
  async asyncData({ route, error }) {
    try {
      const episode = await selectedEpisode(route.params.episodeId)

      return {
        episode,
      }
    } catch {
      error({
        statusCode: 504,
        message: "Something is wrong :'("
      });
    }
  },
  computed: {
    metaTitle() {
      return this.episode?.name
    },
  }
}
</script>
