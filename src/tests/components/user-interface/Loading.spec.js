import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Loading from '@/components/user-interface/Loading.vue'

describe('Loading', () => {
	const wrapper = mount(Loading, { props: { data: null }, slots: { default: 'Data was loaded!' } })

	it('renders loading sign', () => expect(wrapper.find('img').attributes('alt')).toEqual('Loading...') )
	it('renders slot', async () => {
		await wrapper.setProps({ data: 'records' })
		expect(wrapper.find('img[alt="Loading..."]').exists()).toBe(false)
		expect(wrapper.text()).toEqual('Data was loaded!')
	})
})