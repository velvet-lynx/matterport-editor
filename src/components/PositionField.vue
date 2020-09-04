<template>
  <div class="field is-horizontal">
    <div class="field-label">
      <label class="label"><slot></slot></label>
    </div>
    <div class="field-body">
      <button @click="capture" class="button" id="select-position">
        <span class="icon">
          <i class="fas fa-crosshairs is-link"></i>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup() {

    const store = useStore()

    function capture(e) {
      e.preventDefault()
      store.dispatch('capture')
    }

    return {
      capture
    }
  }
}
</script>

<style>

</style>