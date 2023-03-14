import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/vue'

import SimpleForm from '@/components/SimpleForm/Form.vue'
import { createTestRouter, fillIn, clickOn } from '@/tests/test-support'

describe('SimpleForm', async () => {
	const router = await createTestRouter()
	const previousTitle = 'This was my title'
	const wrapper = render(SimpleForm, {
		global: { plugins: [router] },
		props: { 
			fields: [{ name: 'title', type: 'text' }],
			default: { title: previousTitle },
			submitButton: 'Save'
		}
	})

	it('is filled in with default', () => {
		wrapper.getByDisplayValue(previousTitle, { selector: '#title_field' })
	})

	it('emits entered data', async () => {
		// Fill in "title" with "My article"
		const value = 'My article'
		await fillIn(wrapper, 'Title', value)
		// Submit form
		await clickOn(wrapper, 'Save')
		// Expect event "submit" to have been emitted with entered data
		expect(wrapper.emitted().submit).toEqual([[{ title: value }]])
	})

	it('renders link to home to cancel form', () => {
		wrapper.getByText(
			'Cancel',
			{ selector: `[href="${router.resolve({ name: 'home' }).path}"]` }
		)
	})
})