<template>
  <div class="showcase-wrapper">
    <iframe 
      :src="getTourUrl"
      frameborder="0" allowfullscreen allow="vr"
      id="showcase_iframe"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Showcase',
  props: ['modelSid'],
  computed: {
    getTourUrl() {
      return `https://my.matterport.com/show?m=${this.modelSid}&play=1`
    }
  }
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