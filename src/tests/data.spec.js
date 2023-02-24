import { describe, it, expect, vi } from 'vitest'

import { host, findAll } from '@/data.js'

global.fetch = vi.fn()

const mockFetchRespone = (expectedPath, data) => {
	fetch.mockImplementation(async actualPath => {
		if (actualPath == host + expectedPath) return { json: () => data }
	})
}

describe('findAll', () => {
	it('returns promise resolved with data', async () => {
		const data = [{ id: 1, property1: 'value1' }, { id: 2, property1: 'value2' }]
		mockFetchRespone('records.json', data)

		expect(await findAll('records')).toEqual(data)
	})
})