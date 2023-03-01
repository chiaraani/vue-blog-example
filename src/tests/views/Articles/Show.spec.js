import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import ArticleView from '@/views/Articles/Show.vue'
import router from '@/router/index.js'
import { article } from '@/tests/fixtures/articles'
import Title from '@/components/layout/Title.vue'
vi.mock('@/data', async () => ({ 
	findRecord: async (resource, slug) => resource === 'articles' && slug === article.slug && article
}) )

describe('ArticleView', async () => {
  router.push({ name: 'article', params: { slug: article.slug } });
  await router.isReady();
	const wrapper = mount(ArticleView, {
		global: { plugins: [router] }
	})

	it('renders title of article', () => expect(wrapper.findComponent(Title).text()).toEqual(article.title) )
	it('renders body of article', () => expect(wrapper.html()).toContain('<p>Inside <code>em</code> HTML element.</p>') )
})