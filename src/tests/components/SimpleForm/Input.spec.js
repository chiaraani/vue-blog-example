import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import SimpleInput from '@/components/SimpleForm/Input.vue'

describe('SimpleInput', () => {
	function testInput({name, type, selector, value}) {
		describe(`when ${name}`, () => {
			const data = {}
			const wrapper = mount(SimpleInput, { 
				props: { type, name, data }
			})
			const input = wrapper.find(`${selector}[name=${name}]`)

			it('is bound to data', async () => {
				await input.setValue(value)
				expect(data[name]).toEqual(value)
			})
		})
	}

	testInput({
		name: 'title', 
		type: 'text', 
		selector: 'input[type=text]',
		value: 'This is a title'
	})

	testInput({
		name: 'body', 
		type: 'textarea', 
		selector: 'textarea',
		value: 'This is body'
	})
})