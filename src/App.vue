<template>
  <Showcase :modelSid="modelSid" /> 
</template>

<script>
import Showcase from './components/Showcase'

export default {
  name: 'App',
  components: {
    Showcase,
  },
  data: function() {
    return {
      modelSid: "SxQL3iGyoDo"
    }
  },
  computed: {
    getTourUrl: function () {
      return `https://my.matterport.com/show?m=${this.modelSid}&play=1`
    }
  }
}
</script>

<style>
</style>
