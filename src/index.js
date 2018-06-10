import assign from 'nano-assign'
import './style.css'

export default {
  name: 'StepIndicator',
  functional: true,
  props: {
    total: {
      type: Number,
      required: true
    },
    current: {
      type: Number,
      required: true
    },
    currentColor: {
      type: String,
      default: 'rgb(68, 0, 204)'
    },
    defaultColor: {
      type: String,
      default: 'rgb(130, 140, 153)'
    },
    handleClick: {
      type: Function
    }
  },
  render(h, { props, data }) {
    const steps = []
    for (let i = 0; i < props.total; i++) {
      const color = i <= props.current ? props.currentColor : props.defaultColor
      const active = i <= props.current ? ' active': ''
      const width = (100 / props.total) + '%'
      if (i == (props.total - 1)) {
        width = '0';
      }
      steps.push(h('div', {
        class: 'step-slider-item step-item' + active,
        style: {color, borderColor: color, width: width},
        attrs: {'data-value': i},
        on: {
          click: () => props.handleClick && props.handleClick(i)
        }
      }))

      document.styleSheets[0].addRule(`.step-item`, `background-color: ${props.defaultColor};`);
      document.styleSheets[0].addRule(`.step-item:after`,`border: 5px solid ${props.defaultColor};`);
      document.styleSheets[0].addRule(`.step-item:before`,`background-color: ${props.defaultColor};`);
      document.styleSheets[0].addRule(`.step-item.active:after`,`border-color: ${props.currentColor};`);
      document.styleSheets[0].addRule(`.step-item.active:before`,`background-color: ${props.currentColor};`);
    }
    const attrs = assign({}, data, {
      class: ['step-progress', data.class]
    })
    return h('div', attrs, [
      h('div', {class: 'step-slider'}, [...steps])
    ])
  }
}
