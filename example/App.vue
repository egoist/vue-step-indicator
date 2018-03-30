<template>
  <div id="app">
    <github-badge slug="egoist/vue-step-indicator" />
    <h1><span>👣</span> vue-step-indicator</h1>
    <label>
      Current step: <input type="number" v-model.number="current" min="0" :max="total - 1">
    </label>
    <label>
      Total steps: <input type="number" v-model.number="total" min="2" max="10">
    </label>
    <label>
      Current color: <input type="color" v-model="currentColor">
    </label>
    <label>
      Default color: <input type="color" v-model="defaultColor">
    </label>
    <div class="indicator">
      <step-indicator :handleClick="handleClick" :current="current" :total="total" :current-color="currentColor" :default-color="defaultColor"></step-indicator>
    </div>
    <div class="code">
      <prism language="html">{{ code }}</prism>
    </div>
  </div>
</template>

<script>
import 'prismjs'
import 'prismjs/themes/prism-solarizedlight.css'
import Prism from 'vue-prism-component'
import GithubBadge from 'vue-github-badge'
import StepIndicator from '../src'
import genCode from './genCode'

export default {
  components: {
    StepIndicator,
    Prism,
    GithubBadge
  },

  data() {
    return {
      current: 1,
      total: 3,
      currentColor: StepIndicator.props.currentColor.default,
      defaultColor: StepIndicator.props.defaultColor.default
    }
  },

  methods: {
    handleClick(index) {
      console.log('Clicked', index)
    }
  },

  computed: {
    code() {
      return genCode(this)
    }
  }
}
</script>

<style>
body {
  font: 14px/1.4 -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}
pre {
  background-color: transparent !important;
  border: 2px solid #dfe7ef;
}

pre code {
  white-space: pre-wrap !important;
}

h1 {
  font-weight: 300;
}

h1 span {
  font-size: 1rem;
}
</style>

<style scoped>
#app {
  max-width: 500px;
  margin: 30px auto;
}
label {
  display: flex;
  font-size: 1rem;
}

label input {
  margin-left: 10px;
}

.indicator {
  padding: 20px 0;
}

</style>
