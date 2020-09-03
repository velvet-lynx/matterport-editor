<template>
  <div>
    <hero></hero>
    <showcase :modelSid="modelSid" /> 
    <mattertag-form></mattertag-form>
  </div>
</template>

<script>
import Showcase from './components/Showcase'
import Hero from './components/Hero'
import MattertagForm from './components/MattertagForm'

export default {
  name: 'App',
  components: {
    Hero,
    Showcase,
    MattertagForm
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
