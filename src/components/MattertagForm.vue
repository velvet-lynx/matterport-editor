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
                <button @click="onSubmit" class="button is-primary" type="submit">Create</button>
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
    const store = useStore()
    const label = ref('')
    const stemVector = ref({ x: 0, y: 0, z: 0 })
    const anchorPosition = computed(() => store.state.capturedPosition)

    function onSubmit(e) {
      e.preventDefault()
      var res = {
        label: label.value,
        anchorPosition: Object(anchorPosition.value.value),
        stemVector: stemVector.value
      } 
      console.log(res)
      store.dispatch('createMattertag', {
        label: label.value,
        anchorPosition: {
          x: anchorPosition.value.x,
          y: anchorPosition.value.y,
          z: anchorPosition.value.z
        },
        stemVector: {
          x: stemVector.value.x,
          y: stemVector.value.y,
          z: stemVector.value.z,
        }
      })
    }

    return {
      label,
      anchorPosition,
      stemVector,
      onSubmit
    }
  }
}
</script>

<style>

</style>