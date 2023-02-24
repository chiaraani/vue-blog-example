export const host = 'http://localhost:5173/'

const fetchJSONFile = async fileName => (await fetch(host + fileName + '.json') ).json()

const memory = {}
export const findAll = resource => memory[resource] ||= fetchJSONFile(resource)