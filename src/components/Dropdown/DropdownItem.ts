import { h, Fragment, type SetupContext } from 'vue'
import type { MenuOption } from './types'
export default function DropdownItem(props: MenuOption, ctx: SetupContext) {
  return h(Fragment, [
    props.divided && h('li', { role: 'separator', class: 'divided-placeholder' }),
    h(
      'li',
      {
        class: {
          'er-dropdown__item': true,
          'is-disabled': props.disabled,
          'is-divided': props.divided
        },
        id: `dropdown-item-${props.key}`,
        onClick: () => ctx.emit('click', props)
      },
      [props.label]
    )
  ])
}
