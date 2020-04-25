
const buildUrl = (base, params, priorityParams) => {
    const theParams = {
        ...params,
        ...priorityParams,
    }

    if (Object.keys(theParams).length === 0) {
        return base
    }
    
    let resultUrl = `${base}?`
    let first = true
    for (let [key, value] of Object.entries(theParams)) {
        const sep = first ? '' : '&';
        first = false;
        resultUrl += `${sep}${key}=${value}`
    }

    return resultUrl
}

module.exports = buildUrl

