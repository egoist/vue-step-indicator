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
  render(h, { props, data, children }) {
    const steps = []
    for (let i = 0; i < props.total; i++) {
      const color = i === props.current ? props.currentColor : props.defaultColor
      const customClass = children ? children[0].data.staticClass : ''
      const data = children ? children[0].data : {}
      const attrs = assign({}, data, {
        class: ['step-indicator', customClass],
        style: {color, borderColor: color},
        on: {
          click: () => props.handleClick && props.handleClick(i)
        }
      })
      const tagName = children ? children[0].tag : 'div'
      steps.push(h(tagName, attrs, [i + 1]))
    }
    const attrs = assign({}, data, {
      class: ['step-indicators', data.class]
    })
    return h('div', attrs, [
      h('span', {class: 'step-indicators-line'}),
      ...steps
    ])
  }
}