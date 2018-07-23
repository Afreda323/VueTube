<template>
  <li>
    <v-divider v-if="!first"></v-divider>
    <v-list-tile ripple @click="onVideoClick">
      <img :src="thumbnail" />
      <v-list-tile-content>
        <v-list-tile-title>{{video.snippet.title}}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </li>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: {
    first: Boolean,
    video: Object,
  },
  computed: {
    thumbnail() {
      return this.video.snippet.thumbnails.default.url
    }
  },
  methods: {
    onVideoClick() {
      this.$emit("selectVideo", this.video)
    }
  }
}
</script>

<style scoped>
  li img {
    height: 100%;
    margin-right: 10px;
  }
</style>
