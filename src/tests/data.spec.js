import { describe, it, expect, vi } from 'vitest'

import { host, findAll } from '@/data'
import { articles } from '@/tests/fixtures/articles'

global.fetch = vi.fn()

const mockFetchRespone = (expectedPath, data) => {
	fetch.mockImplementation(async actualPath => {
		if (actualPath == host + expectedPath) return { json: () => data }
	})
}

describe('findAll', () => {
	it('returns promise resolved with data', async () => {
		mockFetchRespone('records.json', articles)
		expect(await findAll('records')).toEqual(articles)
	})
})