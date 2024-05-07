const BASE_URL = "https://api.notion.com/v1"
const PAGE_SIZE = 10;
const RECORDS_TO_FETCH = 40;

const REQUEST_OPTIONS = {
    headers: {
        'Authorization': 'Bearer ' + process.env.NOTION_API_TOKEN,
        'Notion-Version': '2022-06-28'
    }
};

const results = [];
let requestUrl = `${BASE_URL}/users?page_size=${PAGE_SIZE}`;
let pageData;
do {
    console.log(`Fetching ${requestUrl}`);
    const pageResponse = await fetch(requestUrl, REQUEST_OPTIONS);
    pageData = await pageResponse.json();
    results.push(...pageData.results);
    requestUrl = `${BASE_URL}/users?page_size=${PAGE_SIZE}&start_cursor=${pageData.next_cursor}`;
} while (pageData.next_cursor && results.length < RECORDS_TO_FETCH);

console.log(`${results.length} users fetched. Starting with ${results[0].name} and ending with ${results[results.length - 1].name}`);
