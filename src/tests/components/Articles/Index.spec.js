import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import ArticlesIndex from '@/components/Articles/Index.vue'
import { articles } from '@/tests/fixtures/articles'
vi.mock('@/data', async () => ({ 
	findAll: vi.fn( async resource => resource == 'articles' && articles ) 
}))
import { spyComponent } from '@/tests/test-support/expectComponentToHaveBeenMounted'
import ArticlesCollection from '@/components/Articles/Collection.vue'

describe('ArticlesIndex', () => {
	spyComponent(ArticlesCollection)
	mount(ArticlesIndex)

	it('finds all articles and mounts collection of them', () => expect(ArticlesCollection).toHaveBeenMountedWith({ articles }) )
})