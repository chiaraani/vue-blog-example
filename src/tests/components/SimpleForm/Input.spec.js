import { describe, it, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'

import SimpleInput from '@/components/SimpleForm/Input.vue'

describe('SimpleInput', () => {
	function testInput({name, type, selector, value}) {
		describe(`when ${name}`, () => {
			const data = {}
			const wrapper = render(SimpleInput, { 
				props: { type, name, data }
			})
			const input = wrapper.getByDisplayValue('', { selector: `${selector}[name=${name}]` })

			it('is bound to data', async () => {
				await fireEvent.update(input, value)
				expect(data[name]).toEqual(value)
			})

			wrapper.unmount()
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