const buildUrl = (base, params, priorityParams) => {
    const index = base.indexOf('?')
    const baseParams = {}
    if (index > -1) {
        const pairs = base.substring(index + 1).split('&')
        pairs.forEach(element => {
            if (element) {
                const param = element.split('=')
                baseParams[param[0]] = param[1]
            }
        });
    }
    
    const theParams = {
        ...baseParams,
        ...params,
        ...priorityParams,
    }
    
    if (Object.keys(theParams).length === 0) {
        return base
    }

    let resultUrl = index > -1 ? base.substring(0, index) : base
    let first = true
    for (let [key, value] of Object.entries(theParams)) {
        const sep = first ? '?' : '&';
        resultUrl += `${sep}${key}=${value}`
        first = false;
    }

    return resultUrl
}

module.exports = buildUrl
