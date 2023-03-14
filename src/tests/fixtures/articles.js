export const articles = [
  {
    id: 1,
    slug: "1_how-to-emphasise-in-html",
    title: "How to emphasise in HTML",
    body: "Inside `em` HTML element.",
  },
  {
    id: 2,
    slug: "1_what-are-the-main-sections-of-vue-files",
    title: "What are the main sections of vue files?",
    body: "Script, Template, and Style",
  },
];

export const article = articles[0];

export const newArticle = {
  title: "How to show an alert modal in JavaScript?",
  body: "With browser built-in function `alert`.",
}

export const expectedNewArticle = { 
  ...newArticle, 
  id: 3, 
  slug: '3_how-to-show-an-alert-modal-in-javascript'
}