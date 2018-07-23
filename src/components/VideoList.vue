<template>
  <v-list :two-line="breakpoint">
    <VideoListItem 
      v-for="(video, i) in videos"
      :key="video.etag" 
      :first="i === 0"
      :video="video"
      @selectVideo="selectVideo"
    />
  </v-list>
</template>

<script>
import VideoListItem from './VideoListItem'

export default {
  name: 'VideoList',
  components: {
    VideoListItem,
  },
  computed: {
    breakpoint() {
      const { mdAndUp, xs } = this.$vuetify.breakpoint
      if (mdAndUp || xs) return true
      else return false
    }
  },
  props: {
    videos: Array,
  },
  methods: {
    selectVideo(video) {
      this.$emit("selectVideo", video)
    }
  }
}
</script>

<style>
  
</style>