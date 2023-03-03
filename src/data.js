export const host = import.meta.env.BASE_URL;

const fetchJSONFile = async (fileName) => {
  const data = await fetch(host + fileName + ".json");
  return data.json();
};

String.prototype.slugify = function() {
  return this.toLowerCase()
   .replace(/ /g, '-')
   .replace(/[^\w-]+/g, '');
}

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

export const createRecord = async (resource, data) => {
  let id
  if (memory[resource].constructor === Array) {
    const lastId = memory[resource][memory[resource].length - 1].id
    id = lastId + 1
  } else {
    memory[resource] = []
    id = 1
  }

  const slug = `${id}_${data.title.slugify()}`
  
  const newRecord = {id, slug, ...data}
  memory[resource].push(newRecord)
}
