<template>
  <div>
    <hero></hero>
    <showcase :modelSid="modelSid" /> 
    <mattertag-form v-if="connected"></mattertag-form>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

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
  setup() {

    const modelSid = "SxQL3iGyoDo"
    const connected = computed(() => useStore().getters.isConnected)

    const getTourUrl = computed(() => `https://my.matterport.com/show?m=${this.modelSid}&play=1`)

    return {
      modelSid,
      getTourUrl,
      connected
    }
  }
  
}
</script>

<style>
</style>
