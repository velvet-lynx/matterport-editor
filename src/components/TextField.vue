<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label"><slot></slot></label> 
    </div>
    <div class="field-body">
      <input v-model="message" class="input" type="text" id="mattertag-label" name="label">
    </div>
  </div>
</template>

<script>
import { useModelWrapper } from '../utils/modelWrapper'
// import { ref } from 'vue'

export default {
  props: {
    modelValue: String,
  },
  setup(props, { emit }) {
    return {
      message: useModelWrapper(props, emit)
    }
  }
}
</script>

<style>

</style>