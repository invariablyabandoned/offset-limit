
const BASE_URL = 'https://pokeapi.co/api/v2'
const PAGE_SIZE = 20;
const PAGES_TO_FETCH = 5;

const results = [];
for (let pageNumber = 0; pageNumber < PAGES_TO_FETCH; pageNumber++) {
    const offset = pageNumber * PAGE_SIZE;
    const requestUrl = `${BASE_URL}/pokemon?offset=${offset}&limit=${PAGE_SIZE}`;
    console.log(`Fetching ${requestUrl}`);
    const response = await fetch(requestUrl);
    const resultWrapper = await response.json();
    results.push(...resultWrapper.results);
}

console.log(`${results.length} pokemon fetched. Starting with ${results[0].name} and ending with ${results[results.length - 1].name}`);
