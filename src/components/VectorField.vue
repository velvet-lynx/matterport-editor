<template>
  <div class="field is-horizontal">
    <div class="field-label">
      <label class="label"><slot></slot></label>
    </div>
    <div class="field-body">
      <input :value="modelValue.x" @input="updateX" class="input" type="number" placeholder="X">
      <input :value="modelValue.y" @input="updateY" class="input" type="number" placeholder="Y">
      <input :value="modelValue.z" @input="updateZ" class="input" type="number" placeholder="Z">
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

export default {
  props: {
    modelValue: Object,
  },
  setup(props, { emit }) {

    function updateX(e) {
      emit('update:modelValue', {
        x: e.target.value,
        y: props.modelValue.y,
        z: props.modelValue.z})
    }

    function updateY(e) {
      emit('update:modelValue', {
        x: props.modelValue.x,
        y: e.target.value,
        z: props.modelValue.z})
    }

    function updateZ(e) {
      emit('update:modelValue', {
        x: props.modelValue.x ,
        y: props.modelValue.y,
        z: e.target.value})
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