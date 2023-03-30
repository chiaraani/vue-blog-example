import { describe, it, expect, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { fireEvent, screen } from '@testing-library/vue'

import Modal from '@/components/user-interface/Modal.vue'

describe('Modal', () => {
  const slot = 'Are you sure?'
  let wrapper
  beforeAll(() => {
    document.body.innerHTML = "<div id='modals'></div>"
    wrapper = mount(Modal, { slots: { default: slot } })
  })

  it('is hidden by default', async () => {
    expect(screen.queryByText(slot)).toBeNull()
  })

  it('opens when its open exposed method is called', async () => {
    wrapper.vm.open()
    await nextTick()
    screen.getByText(slot)
  })

  it('closes when cancel is clicked', async () => {
    fireEvent.click(screen.getByText('Cancel'))
    await nextTick()
    expect(document.body.textContent).not.toContain(slot)
  })
})
