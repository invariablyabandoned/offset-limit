function base64encode(input) {
    return Buffer.from(input).toString('base64')
}

function base64decode(input) {
    return Buffer.from(input, 'base64').toString()
}

function encodeOffsetLimitUrl(offsetLimitUrl) {
    if (!offsetLimitUrl) {
        return null;
    }
    const [plain, query] = offsetLimitUrl.split('?');
    const encodedQuery = base64encode(query);
    return `${plain}?cursor=${encodedQuery}`;
}

function decodeOffsetLimitUrl(encodedOffsetLimitUrl) {
    const [plain, query] = encodedOffsetLimitUrl.split('?cursor=');
    if(!query) return plain;
    const decodedQuery = base64decode(query);
    return `${plain}?${decodedQuery}`;
}

export async function obfuscatedFetch(url) {
    const requestUrl = decodeOffsetLimitUrl(url);
    const pageResponse = await fetch(requestUrl);
    const pageData = await pageResponse.json();

    return {
        data: pageData.results,
        meta: {
            next: encodeOffsetLimitUrl(pageData.next),
            count: pageData.count,
        }
    }
}
