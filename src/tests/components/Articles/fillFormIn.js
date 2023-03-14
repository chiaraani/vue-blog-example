import { newArticle } from '@/tests/fixtures/articles'
import { fillIn, clickOn } from '@/tests/test-support'

export default async function fillArticleFormIn(wrapper) {
	await fillIn(wrapper, 'Title', newArticle.title)
	await fillIn(wrapper, 'Body', newArticle.body)
	await clickOn(wrapper, 'Save')
}