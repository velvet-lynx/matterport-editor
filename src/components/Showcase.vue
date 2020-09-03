<template>
  <section class="section">
    <div class="container">
      <div class="showcase-wrapper">
        <iframe
          :src="getTourUrl"
          @load="connectSdk"
          frameborder="0" allowfullscreen allow="vr"
          id="showcase_iframe"></iframe>
      </div>
    </div>
  </section>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  props: {
    modelSid: String
  },
  setup(props) {
    const store = useStore()
    const getTourUrl = computed(
      () => `https://my.matterport.com/show?m=${props.modelSid}&play=1`
    )

    function connectSdk() {
      store.dispatch('connectSdk')
    }

    return {
      connectSdk,
      getTourUrl,
    }
  },
}
</script>

<style>
.showcase-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}

.showcase-wrapper iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>