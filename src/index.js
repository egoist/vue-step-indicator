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
    const style = []
    for (let i = 0; i < props.total; i++) {
      const color = i <= props.current ? props.currentColor : props.defaultColor
      const active = i <= props.current ? ' active': ''
      const item = 'step-item-' + i
      const width = (100 / props.total) + '%'
      steps.push(h('div', {
        class: 'step-slider-item ' + item + active,
        style: {color, borderColor: color, width: width},
        attrs: {'data-value': i},
        on: {
          click: () => props.handleClick && props.handleClick(i)
        }
      }))
      style.push(`
        .${item} {
          background-color: ${props.defaultColor};
        }

        .${item}:after {
          border: 5px solid ${props.defaultColor};
        }

        .${item}:before {
          background-color: ${props.defaultColor};
        }

        .${item}.active:after {
          border-color: ${props.currentColor};
        }

        .${item}.active:before {
          background-color: ${props.currentColor};
        }
      `)
    }
    const attrs = assign({}, data, {
      class: ['step-progress', data.class]
    })
    return h('div', attrs, [
      h('div', {class: 'step-slider'}, [...steps]),
      h('style', {}, [...style])
    ])
  }
}
