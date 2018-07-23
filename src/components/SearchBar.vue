<template>
  <v-toolbar
      color="red"
      dense
    >
      <v-toolbar-title class="mr-5 align-center">
        <div class="logo-wrap">
          <img class="logo" src='../assets/ytLogo.png' /> 
          <span class="title">VueTube</span>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-text-field 
          clearable
          :value="term"
          label='Enter Search' 
          @input="onInput" 
          append-icon='search'
          color="white"
          hide-details
          single-line
          :error-messages='errorMessage'
        />
      </v-layout>
    </v-toolbar>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    errorMessage: String,
    term: String,
  },
  methods: {
    onInput(val) {
      this.$emit('termChange', val)
    }
  }
}
</script>

<style scoped>
  .logo {
    height: 25px;
    margin-right: 5px;
  }
  .logo-wrap {
    display: flex;
    align-items: center;
  }
</style>