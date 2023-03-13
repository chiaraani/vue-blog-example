import { describe, it, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'

import SimpleField from '@/components/SimpleForm/Field.vue'

describe('SimpleField', () => {
	const data = {}
	const wrapper = render(SimpleField, {
		props: { name: 'title', type: 'text', data }
	})

	it('is bound to data.title', async () => {
		const input = wrapper.getByLabelText('Title')
		const value = 'My article'
		await fireEvent.update(input, value)
		expect(data.title).toEqual(value)
	})
})