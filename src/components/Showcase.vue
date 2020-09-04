<template>
  <div class="container">
    <div class="showcase-wrapper">
      <iframe
        :src="getTourUrl"
        @load="connectSdk"
        @mouseover="onMouseOver"
        @mouseout="onMouseOut"
        frameborder="0" allowfullscreen allow="vr"
        id="showcase_iframe"></iframe>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { onMounted } from 'vue'

export default {
  props: {
    modelSid: String
  },
  setup(props) {
    const store = useStore()
    const isMouseOverIframe = ref(false)

    const getTourUrl = computed(
      () => `https://my.matterport.com/show?m=${props.modelSid}&play=1`
    )

    
    function connectSdk() {
      store.dispatch('connectSdk')
    }

    function onMouseOver() {
      isMouseOverIframe.value = true
    }

    function onMouseOut() {
      isMouseOverIframe.value = false
    }

    onMounted(() => {
      window.addEventListener('blur', () => {
        if (isMouseOverIframe.value) {
          store.dispatch('endCapture')
        }
      })
    })

    return {
      connectSdk,
      getTourUrl,
      onMouseOver,
      onMouseOut
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