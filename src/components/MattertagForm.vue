<template>
  <section class="section">
    <div class="container">
      <form action="" id="mattertag-form">

        <text-field v-model="label">Label</text-field>

        <position-field>Anchor Position</position-field>
        <p>{ x: {{anchorPosition.x}}, y: {{anchorPosition.y}}, z: {{anchorPosition.z}} }</p>

        <vector-field v-model="stemVector">Stem Vector</vector-field>

        <div class="field is-horizontal">
          <div class="field-label"></div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <button @click="onSubmit" class="button is-primary" type="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import TextField from './TextField'
import VectorField from './VectorField'
import PositionField from './PositionField'

export default {
  name: 'mattertag-form',
  components: {
    TextField,
    VectorField,
    PositionField
  },
  setup() {
    const label = ref('')
    const stemVector = ref({ x: 0, y: 0, z: 0 })
    const anchorPosition = computed(() => useStore().state.capturedPosition)

    return {
      label,
      anchorPosition,
      stemVector
    }
  }
}
</script>

<style>

</style>