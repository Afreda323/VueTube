<template>
  <v-list>
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