<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8>
      <v-text-field 
        clearable
        label='Enter Search' 
        @input="onInput" 
        append-icon='search'
        :error-messages='errorMessage'
      />
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    errorMessage: String
  },
  methods: {
    onInput(val) {
      this.$emit('termChange', val)
    }
  }
}
</script>

<style>
  
</style>