import { describe, it, expect } from 'vitest'

import capitalize from '@/helpers/capitalize'

describe('capitalize', () => {
	it('switches first character of string to uppercase', () => {
		expect(capitalize('john')).toEqual('John')
	})
})