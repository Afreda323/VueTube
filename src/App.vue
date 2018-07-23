<template>
  <v-app dark>
    <SearchBar 
      :term="term"
      @termChange="onTermChange" 
      :errorMessage="searchError" 
    />
    <v-container fluid grid-list-md>
      <v-layout :column="breakpoint">
        <v-flex xs12 sm8 md6>
          <VideoDetail :selectedVideo="selectedVideo" />
        </v-flex>
        <v-flex xs12 sm4 md6>
          <VideoList 
            v-if="videos.length"
            :videos="videos"
            :hasNextPage="!!nextPage"
            @loadMore="loadMore"
            @selectVideo="selectVideo"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios'
import SearchBar from "./components/SearchBar"
import VideoList from "./components/VideoList"
import VideoDetail from "./components/VideoDetail"

const API_KEY = 'AIzaSyCYUjdISCd1KAhpstLOJpKPG1EfkXg-Scw'
const API_URL = 'https://www.googleapis.com/youtube/v3/search'

export default {
  name: "App",
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
  },
  data() {
    return {
      term: '',
      searchTerm: '',
      searchError: '',
      videos: [],
      selectedVideo: null,
      nextPage: null,
    }
  },
  computed: {
    breakpoint () {
      if (this.$vuetify.breakpoint.smAndUp) return false
      else return true
    }
  },
  methods: {
    onTermChange(term) {
      this.searchError = ''
      this.term = term
      this.nextPage = null
      
      this.fetchData()
    },
    loadMore() {
      this.fetchData(this.nextPage)
    },
    async fetchData(nextPage) {
      const params = {
        key: API_KEY,
        type: 'video',
        part: 'snippet',
        q: this.term,
      }
      if(nextPage) params.pageToken = nextPage
      try {
        const { data } = await axios.get(API_URL, { params })
        if(data.nextPageToken) { this.nextPage = data.nextPageToken }
        if (nextPage) {
          this.videos = [...this.videos, ...data.items]
        } else {
          this.videos = data.items
        }
      } catch (error) {
        this.searchError = error.message || 'Something went wrong.'
      }
    },
    selectVideo(video) {
      this.selectedVideo = video
    }
  },
}
</script>