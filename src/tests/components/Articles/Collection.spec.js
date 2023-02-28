import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import ArticlesCollection from '@/components/Articles/Collection.vue'
import { articles } from '@/tests/fixtures/articles'
import { spyComponent } from '@/tests/test-support/expectComponentToHaveBeenMounted'
import ArticleItem from '@/components/Articles/Item.vue'

describe('ArticlesCollection', () => {
	spyComponent(ArticleItem)
	const wrapper = mount(ArticlesCollection, { props: { articles } })

	it('displays a collection of articles', () => {
		articles.forEach( article => expect(ArticleItem).toHaveBeenMountedWith({ article }) )
	})
})