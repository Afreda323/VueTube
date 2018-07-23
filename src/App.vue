<template>
  <v-app dark>
    <v-container>
      <SearchBar 
        @termChange="onTermChange" 
        :errorMessage="searchError" 
      />
      <VideoList 
        :videos="videos"
        @selectVideo="selectVideo"
      />
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios'
import SearchBar from "./components/SearchBar"
import VideoList from "./components/VideoList"

const API_KEY = 'AIzaSyCYUjdISCd1KAhpstLOJpKPG1EfkXg-Scw'
const API_URL = 'https://www.googleapis.com/youtube/v3/search'

export default {
  name: "App",
  components: {
    SearchBar,
    VideoList,
  },
  data() {
    return {
      searchError: '',
      videos: [],
    }
  },
  methods: {
    async onTermChange(term) {
      this.searchError = ''
      if (term !== '') {
        try {
          const { data } = await axios.get(API_URL, {
            params: {
              key: API_KEY,
              type: 'video',
              part: 'snippet',
              q: term,
            }
          })
          this.videos = data.items
        } catch (error) {
          this.searchError = error.message || 'Something went wrong.'
        }
      }
    },
    selectVideo(video) {
      console.log(video)
    }
  },
}
</script>