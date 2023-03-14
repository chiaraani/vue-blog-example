import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/vue'

import NewArticleView from '@/views/Articles/New.vue'
import { newArticle, expectedNewArticle, articles } from '@/tests/fixtures/articles'
import { createTestRouter, mockFetchResponse } from '@/tests/test-support'
import fillArticleFormIn from '@/tests/components/Articles/fillFormIn'

mockFetchResponse("articles.json", articles)

describe('NewArticleView', async () => {
	const router = await createTestRouter()
	vi.spyOn(router, 'push')
	const wrapper = render(NewArticleView, {
		global: { plugins: [router] }
	})

	await fillArticleFormIn(wrapper)
	
	it('redirects to new article show', () => {
		expect(router.push).toHaveBeenCalledWith({ name: 'article', params: { slug: expectedNewArticle.slug } })
	})
})