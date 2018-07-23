<template>
  <v-list :two-line="breakpoint">
    <VideoListItem 
      v-for="(video, i) in videos"
      :key="video.etag" 
      :first="i === 0"
      :video="video"
      @selectVideo="selectVideo"
    />
    <v-btn v-if="videos.length && hasNextPage" @click="loadMore" color="red">LOAD MORE</v-btn>
  </v-list>
</template>

<script>
import VideoListItem from './VideoListItem'

export default {
  name: 'VideoList',
  components: {
    VideoListItem,
  },
  props: {
    videos: Array,
    hasNextPage: Boolean,
  },
  computed: {
    breakpoint() {
      const { mdAndUp, xs } = this.$vuetify.breakpoint
      if (mdAndUp || xs) return true
      else return false
    }
  },
  methods: {
    selectVideo(video) {
      this.$emit("selectVideo", video)
    },
    loadMore() {
      this.$emit("loadMore")
      console.log(this.videos, this.hasNextPage)
    }
  }
}
</script>

<style>
  
</style>