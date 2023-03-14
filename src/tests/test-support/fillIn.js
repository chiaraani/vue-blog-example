import { fireEvent } from '@testing-library/vue' 

export default function fillIn(wrapper, label, value) {
	return fireEvent.update(
		wrapper.getByLabelText(label), 
		value
	)
}
