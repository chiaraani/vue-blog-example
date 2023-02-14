import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

document.title = 'My site'
import Title from '@/components/layout/Title.vue'

describe('MetaTags', () => {
	const wrapper = mount(Title, { slots: { default: 'Hello' } })

	it('renders title of page', () => expect(document.title).toEqual('Hello - My site'))
	it('renders heading one', () => expect(wrapper.find('h1').text()).toEqual('Hello'))
	it('changes title of page when it is called again', () => {
	  mount(Title, { slots: { default: 'Bye' } })
		expect(document.title).toEqual('Bye - My site')
	})
})