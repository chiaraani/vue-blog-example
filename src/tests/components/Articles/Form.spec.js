import { describe, it, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/vue' 

import ArticleForm from '@/components/Articles/Form.vue'
import { newArticle, article } from '@/tests/fixtures/articles'
import { createTestRouter } from '@/tests/test-support'
import fillArticleFormIn from '@/tests/components/Articles/fillFormIn'

describe('ArticleForm', () => {
	it('emits entered data', async () => {
		const router = await createTestRouter()
		const wrapper = render(ArticleForm, {
			global: { plugins: [router] }
		})

		await fillArticleFormIn(wrapper)

		expect(wrapper.emitted().save).toEqual([[newArticle]])
	})
})