import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Summarize from '@/components/user-interface/Summarize.vue'

describe('Summarize', () => {
	it('rendes text straight away if text is shorter than maximum', () => {
		const wrapper = mount(Summarize, { props: { maxLength: 20, text: 'How are you?' } })
		expect(wrapper.text()).toEqual('How are you?')
	})


	it('rendes text sliced by maximum and appends three dots to it', () => {
		const wrapper = mount(Summarize, { props: { maxLength: 7, text: 'How are you?' } })
		expect(wrapper.text()).toEqual('How are...')
	})

	it('rendes text sliced by maximum, not breaking words, and appends three dots to it', () => {
		const wrapper = mount(Summarize, { props: { maxLength: 10, text: 'How are you?' } })
		expect(wrapper.text()).toEqual('How are...')
	})
})