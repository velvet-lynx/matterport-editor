<template>
  <div class="field is-horizontal">
    <div class="field-label">
      <label class="label"><slot></slot></label>
    </div>
    <div class="field-body">
      <input :value="value.x" @input="updateX" class="input" type="text" placeholder="X">
      <input :value="value.y" @input="updateY" class="input" type="text" placeholder="Y">
      <input :value="value.z" @input="updateZ" class="input" type="text" placeholder="Z">
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
// import { onMounted } from 'vue'

export default {
  props: {
    value: {
      x: String,
      y: String,
      z: String
    },
  },
  setup(props, { emit }) {

    function updateX(e) {
      emit('oninput', {
        x: e.target.value,
        y: props.value.y,
        z: props.value.z
      })
    }

    function updateY(e) {
      emit('oninput', {
        x: props.value.x,
        y: e.target.value,
        z: props.value.z
      })
    }

    function updateZ(e) {
      emit('oninput', {
        x: props.value.x,
        y: props.value.y,
        z: e.target.value
      })
    }

    return {
      updateX,
      updateY,
      updateZ
    }
  }

}
</script>

<style>

</style>