import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/vue'

import TheHeader from '@/components/layout/TheHeader.vue'
import { createTestRouter, spyComponent } from '@/tests/test-support'
import { RouterLink } from 'vue-router'

describe('TheHeader', async () => {
  const links = [{ name: 'home' }, { name: 'about' }]
  spyComponent(RouterLink)
  const router = await createTestRouter()
  render(TheHeader, { global: { plugins: [router] } })

  links.forEach((link) => {
    it(`renders link to ${JSON.stringify(link)}`, () =>
      expect(RouterLink).toHaveBeenSetupWith({ to: link }))
  })
})
