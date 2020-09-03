<template>
  <div class="field is-horizontal">
    <div class="field-label">
      <label class="label"><slot></slot></label>
    </div>
    <div class="field-body">
      <input v-model="x" class="input" type="text" placeholder="X">
      <input v-model="y" class="input" type="text" placeholder="Y">
      <input v-model="z" class="input" type="text" placeholder="Z">
      <!-- <button class="button" id="select-position">
        <span class="icon">
          <i class="fas fa-crosshairs is-link"></i>
        </span>
      </button> -->
      <!-- <p id="pos"></p> -->
    </div>
  </div>
</template>

<script>
import { useModelWrapper } from '../utils/modelWrapper'

export default {
  props: {
    x: Number,
    y: Number,
    z: Number 
  },
  setup(props, { emit }) {
    return {
      xValue: useModelWrapper(props, emit, 'x'),
      yValue: useModelWrapper(props, emit, 'y'),
      zValue: useModelWrapper(props, emit, 'z'),
    }
  }

}
</script>

<style>

</style>