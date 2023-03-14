import { describe, it, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/vue' 

import ArticleForm from '@/components/Articles/Form.vue'
import { newArticle, article } from '@/tests/fixtures/articles'
import { createTestRouter, fillIn, clickOn } from '@/tests/test-support'

export async function fillInArticleForm(wrapper, data = newArticle) {
	await fillIn(wrapper, 'Title', data.title)
	await fillIn(wrapper, 'Body', data.body)
	return clickOn(wrapper, 'Save')
}

describe('ArticleForm', () => {
	it('emits entered data', async () => {
		const router = await createTestRouter()
		const wrapper = render(ArticleForm, {
			global: { plugins: [router] }
		})

		await fillInArticleForm(wrapper)
		expect(wrapper.emitted().save).toEqual([[newArticle]])
	})
})