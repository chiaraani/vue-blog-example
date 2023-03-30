import { describe, it, expect, vi, beforeAll } from 'vitest'
import { render } from '@testing-library/vue'

import { createTestRouter } from '@/tests/test-support'

import { newArticle, article } from '@/tests/fixtures/articles'
const db = { articles: [{ ...article }] }
vi.doMock('@/db', async () => ({ default: db }))

let formProps, formSave
vi.doMock('@/components/Articles/Form.vue', async () => ({
  default: {
    props: ['article'],
    created() {
      formProps = this.$props
      formSave = () => this.$emit('save', newArticle)
    },
    template: '<span></span>',
  },
}))

import EditArticleView from '@/views/Articles/Edit.vue'

describe('EditArticleView', () => {
  let router
  beforeAll(async () => {
    router = await createTestRouter({
      name: 'edit article',
      params: { id: 0 },
    })
    router.push = vi.fn()
    render(EditArticleView, { global: { plugins: [router] } })
  })

  it('sets title', () => {
    expect(document.title).toContain(`Edit article - ${article.title}`)
  })

  it('fills form with article', () => {
    expect(formProps).toEqual({ article })
  })

  it('saves article', () => {
    formSave()
    expect(db.articles[0]).toEqual(newArticle)
  })

  it('redirects to article', () => {
    expect(router.push).toHaveBeenCalledWith({
      name: 'article',
      params: { id: '0' },
    })
  })
})
