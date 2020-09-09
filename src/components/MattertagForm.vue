<template>
  <section class="section">
    <div class="container">
      <form action="" id="mattertag-form">

        <text-field :value="label" @oninput="onLabelInput">Label</text-field>

        <position-field>Anchor Position</position-field>
        <p>{ x: {{anchorPosition.x}}, y: {{anchorPosition.y}}, z: {{anchorPosition.z}} }</p>

        <vector-field :value="stemVector" @oninput="onStemVectorInput">Stem Vector</vector-field>
        <p>{ x: {{stemVector.x}}, y: {{stemVector.y}}, z: {{stemVector.z}} }</p>

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
import { computed } from 'vue'
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
    const label = computed(() => store.state.currentMattertagInfos.label)
    const stemVector = computed(() => store.state.currentMattertagInfos.stemVector)
    const anchorPosition = computed(() => store.state.currentMattertagInfos.anchorPosition)

    function onLabelInput(value) {
      store.dispatch('inputLabel', value)
    }

    function onStemVectorInput(stemVector) {
      store.dispatch('inputStemVector', stemVector)
    }

    function onSubmit(e) {
      e.preventDefault()
      store.dispatch('createMattertag')
    }

    return {
      label,
      anchorPosition,
      stemVector,
      onSubmit,
      onLabelInput,
      onStemVectorInput
    }
  }
}
</script>

<style>

</style>