import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/vue'

import SimpleField from '@/components/SimpleForm/Field.vue'
import { fillIn } from '@/tests/test-support'

describe('SimpleField', () => {
	const data = {}
	const wrapper = render(SimpleField, {
		props: { name: 'title', type: 'text', data }
	})

	it('is bound to data.title', async () => {
		const value = 'My article'
		await fillIn(wrapper, 'Title', value)
		expect(data.title).toEqual(value)
	})
})