import { fireEvent } from '@testing-library/vue' 

export default function clickOn(wrapper, text) {
	return fireEvent.click(
		wrapper.getByText(text)
	)
}