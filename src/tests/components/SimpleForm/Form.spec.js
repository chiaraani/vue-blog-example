import { describe, it, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'

import SimpleForm from '@/components/SimpleForm/Form.vue'
import createTestRouter from '@/tests/test-support/createTestRouter'

describe('SimpleForm', async () => {
	const router = await createTestRouter()
	const wrapper = render(SimpleForm, {
		global: { plugins: [router] },
		props: { 
			fields: [{name: 'title', type: 'text'}],
			submitButton: 'Save'
		}
	})

	it('emits entered data', async () => {
		// Fill in "title" with "My article"
		const value = 'My article'
		const titleInput = wrapper.getByLabelText('Title')
		await fireEvent.update(titleInput, value)
		// Submit form
		const submitButton = wrapper.getByText('Save')
		await fireEvent.click(submitButton)
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