<template>
  <v-card v-if="selectedVideo">
    <div class="video-wrap">
      <iframe 
        :src="iframeSrc" 
        frameborder="0" 
        allow="autoplay; encrypted-media" 
        allowfullscreen
      />
    </div>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{selectedVideo.snippet.title}}</h3>
        <div>{{selectedVideo.snippet.description}}</div>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "VideoDetail",
  props: ['selectedVideo'],
  computed: {
    iframeSrc() {
      const { videoId } = this.selectedVideo.id
      return `https://www.youtube.com/embed/${videoId}`
    }
  }
}
</script>

<style scoped>
  .video-wrap {
    margin: 0 16px 16px 16px;
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 25px;
    height: 0;
  }
  .video-wrap iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-top: 16px;
  }
</style>