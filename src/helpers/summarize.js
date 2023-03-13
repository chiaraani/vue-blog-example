export default function summarize({ text, maxLength }) {
  if (text.length <= maxLength) return text;

  const sliced = text.slice(0, maxLength + 1);
  const words = sliced.split(" ");
  words.pop();
  return words.join(" ") + "...";
}
