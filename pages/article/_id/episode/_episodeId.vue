<template>
  <div>
    <b-container>
      <nav aria-label="breadcrumb" class="mt-4 mb-3">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item">
            <a :href="`/article/${selectedArticle.id}`">{{
              selectedArticle.name
            }}</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ episode.name }}
          </li>
        </ol>
      </nav>
      <h1 class="mt-4 mb-3">{{ episode.name }}</h1>
      <div>
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="4">
              <b-card-img
                :src="episode.image.original"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="8">
              <b-card-body>
                <b-card-text>
                  Rating: {{ episode.rating.average }}
                </b-card-text>
                <b-card-text> Season: {{ episode.season }} </b-card-text>
                <b-card-text> Summary: </b-card-text>
                <b-card-text>
                  {{ episode.summary.replace(/(<([^>]+)>)/gi, '') }}
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
import { getItem, selectedEpisode } from '~/services/tvMazeAPI'

export default {
  name: 'EpisodePage',
  head() {
    return {
      title: this.episode.name,
    }
  },
  async asyncData({ route, error }) {
    try {
      const episode = await selectedEpisode(route.params.episodeId)
      const selectedArticle = await getItem(route.params.id)

      return {
        episode,
        selectedArticle,
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
      return this.episode?.name
    },
  },
}
</script>
