import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import SimpleField from '@/components/SimpleForm/Field.vue'

describe('SimpleField', () => {
	function testField(label, inputSelector, props, moreTests) {
		describe(`when ${props.name}`, () => {
			const wrapper = mount(SimpleField, { props })

			it("renders label", () => {
				expect(wrapper.find(`label[for='${props.name}']`).text()).toEqual(label)
			})
			it("renders input", () => {
				expect(wrapper.find(`${inputSelector}[name='${props.name}']`).exists()).toBe(true)
			})
			it('renders required sign', () => expect(wrapper.text()).toContain('*') )
			it('renders required input', () => {
				expect(wrapper.find(`${inputSelector}[required]`).exists()).toBe(true)
			})

			if (moreTests) moreTests(wrapper)
		})
	}

	testField('Title', "input[type=text]", { 
		name: 'title', type: 'text', size: 'large' 
	}, wrapper => {
		it('renders large class', () => {
	 		expect(wrapper.find(".large").exists()).toBe(true)
		})

		describe('when valid', async () => {
			await wrapper.find('input').setValue('This is a title')

			it('sets valid class', () => {
				expect(wrapper.find('.valid').exists()).toBe(true)
			})
		})
	})

	testField('Body', 'textarea', { 
		name: 'body', type: 'textarea' 
	}, wrapper => {
		describe('when invalid', async () => {
			await wrapper.find('textarea').trigger('focusout')

			it('sets invalid class', () => {
				expect(wrapper.find('.invalid').exists()).toBe(true)
			})

			it('renders error message', () => {
				expect(wrapper.text()).toContain('Constraints not satisfied')
			})
		})
	})
})