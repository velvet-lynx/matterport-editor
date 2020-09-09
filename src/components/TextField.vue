<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label"><slot></slot></label> 
    </div>
    <div class="field-body">
      <input 
        class="input"
        type="text"
        id="mattertag-label"
        @input="onInput">
    </div>
  </div>
</template>

<script>
// import { useModelWrapper } from '../utils/modelWrapper'
// import { ref } from 'vue'

export default {
  props: {
    value: String,
  },
  setup(_, { emit }) {
    function onInput(e) {
      emit('oninput', e.target.value)
    }

    return {
      onInput
      // message: useModelWrapper(props, emit)
    }
  }
}
</script>

<style>

</style>