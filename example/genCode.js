import StepIndicator from '../src'

const makeAttrs = ctx => {
  const attrs = ['current', 'total', 'currentColor', 'defaultColor']
  return attrs.map(key => {
    if (ctx[key] !== StepIndicator.props[key].default) {
      return `    ${key}="${ctx[key]}"`
    }
    return false
  }).filter(Boolean).join('\n')
}

export default ctx => `
<template>
  <step-indicator
${makeAttrs(ctx)}
  />
</template>

<script>
import StepIndicator from 'vue-step-indiactor'

export default {
  components: {
    StepIndicator
  }
}
</script>

<style src="vue-step-indicator/dist/vue-step-indicator.css"></style>
`.trim()
