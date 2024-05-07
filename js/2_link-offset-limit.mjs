const BASE_URL = 'https://pokeapi.co/api/v2'
const RECORDS_TO_FETCH = 100;

const results = [];
let requestUrl = `${BASE_URL}/pokemon`;
let pageData;
do {
    console.log(`Fetching ${requestUrl}`);
    const pageResponse = await fetch(requestUrl);
    pageData = await pageResponse.json();
    results.push(...pageData.results);
    requestUrl = pageData.next;
} while (pageData.next !== null && results.length < RECORDS_TO_FETCH);

console.log(`${results.length} pokemon fetched. Starting with ${results[0].name} and ending with ${results[results.length - 1].name}`);
