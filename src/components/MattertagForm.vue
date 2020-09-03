<template>
  <section class="section">
    <div class="container">
      <form class="mt-6" action="" id="mattertag-form">

        <!-- <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Label</label> 
          </div>
          <div class="field-body">
            <input v-model="label" class="input" type="text" id="mattertag-label"><br>
          </div>
        </div>
        <p>{{ label }}</p> -->
        <text-field v-model="label">Label</text-field>
        {{ label }}

        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">Anchor Position</label>
          </div>
          <div class="field-body">
            <input class="input" type="text" id="anchor-x" placeholder="X">
            <input class="input" type="text" id="anchor-y" placeholder="Y">
            <input class="input" type="text" id="anchor-z" placeholder="Z">
            <!-- <button class="button" id="select-position">
              <span class="icon">
                <i class="fas fa-crosshairs is-link"></i>
              </span>
            </button> -->
            <!-- <p id="pos"></p> -->
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">Stem Vector</label>
          </div>
          <div class="field-body">
            <input class="input" type="text" id="stem-x" placeholder="X">
            <input class="input" type="text" id="stem-y" placeholder="Y">
            <input class="input" type="text" id="stem-z" placeholder="Z">
          </div>
        </div>

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
import { ref } from 'vue'
import TextField from './TextField'
import PositionField from './PositionField'

export default {
  name: 'mattertag-form',
  components: {
    TextField,
    
  },
  setup() {
    const label = ref('')

    return {
      label
    }
  }
}
</script>

<style>

</style>