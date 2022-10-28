<template>
  <nuxt-link :to="`/article/${tvShow.id}`" :title="tvShow.name">
    <b-card
      body-class="article"
      :title="tvShow.name"
      :img-src="tvShow.image.medium"
      :img-alt="tvShow.name"
      img-top
      tag="article"
      class="mb-3"
    >
      <b-card-text>
        {{ tvShow.genres.join(', ') }}
      </b-card-text>
    </b-card>
  </nuxt-link>
</template>
<script>
export default {
  name: 'Article',
  props: {
    tvShow: {
      id: Number,
      name: String,
      image: {
        medium: String,
      },
      genres: Array,
    },
  },
}
</script>
