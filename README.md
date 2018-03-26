# vue-step-indicator

[![NPM version](https://img.shields.io/npm/v/vue-step-indicator.svg?style=flat)](https://npmjs.com/package/vue-step-indicator) [![NPM downloads](https://img.shields.io/npm/dm/vue-step-indicator.svg?style=flat)](https://npmjs.com/package/vue-step-indicator) [![CircleCI](https://circleci.com/gh/egoist/vue-step-indicator/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/vue-step-indicator/tree/master)

Simple step indicator for Vue.js

## Install

```bash
yarn add vue-step-indicator
```

CDN: [UNPKG](https://unpkg.com/vue-step-indicator/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-step-indicator/dist/) (available as `window.StepIndicator`)

## Usage

👉👀 [Check out the demo!](https://vue-step-indicator.egoist.moe)

```vue
<template>
  <step-indicator :current="1" :total="3"></step-indicator>
</template>

<script>
import StepIndicator from 'vue-step-indicator'

export default {
  components: {
    StepIndicator
  }
}
</script>

<style src="vue-step-indicator/dist/vue-step-indicator.css"></style>
```

## API

### Props

|Prop|Type|Default|Description|
|---|---|---|---|
|current|number|(Required)|Index of current step|
|total|number|(Required)|Total steps|
|currentColor|string|`'rgb(68, 0, 204)'`|Color of current step|
|defaultColor|string|`'rgb(130, 140, 153)'`|Default color of each step|
|handleClick|function<index>||Triggered when an indicator is clicked|

## License

MIT &copy; [EGOIST](https://github.com/egoist)
