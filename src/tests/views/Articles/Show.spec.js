import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest'
import { mount } from '@vue/test-utils'

import { article } from '@/tests/fixtures/articles'
vi.doMock('@/db', () => ({ default: { articles: [article] } }))

import ArticleView from '@/views/Articles/Show.vue'
import { createTestRouter, spyComponent } from '@/tests/test-support'
import Title from '@/components/layout/Title.vue'

import DeleteButton from '@/components/Articles/DeleteButton.vue'
spyComponent(DeleteButton)

describe('ArticleView', () => {
  let router, wrapper
  beforeAll(async () => {
    document.body.innerHTML = "<div id='floating'></div><div id='modals'></div>"
    router = await createTestRouter({
      name: 'article',
      params: { id: 0 },
    })
    wrapper = mount(ArticleView, {
      global: { plugins: [router] },
    })
  })
  afterAll(() => (document.body.innerHTML = ''))

  it('renders title of article', () => {
    expect(wrapper.findComponent(Title).text()).toEqual(article.title)
  })

  it('renders body of article', () => {
    expect(wrapper.html()).toContain(
      '<p>Inside <code>em</code> HTML element.</p>'
    )
  })

  it('renders delete button', () => {
    expect(DeleteButton).toHaveBeenSetupWith({ id: '0' })
  })
})
