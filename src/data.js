export const host = "http://localhost:5173/";

const fetchJSONFile = async (fileName) => {
  const data = await fetch(host + fileName + ".json");
  return data.json();
};

const memory = {};
export const findAll = (resource) => {
  return (memory[resource] ||= fetchJSONFile(resource));
};
export const findRecord = async (resource, slug) => {
  const record = (await findAll(resource)).find(
    (record) => record.slug === slug
  );
  if (record !== null && record !== undefined) return record;
  else throw new Error("404");
};
