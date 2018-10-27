function lastElement(list) {
    return list[list.length - 1]
}

const _lastElement = list => list[list.length - 1]

function lastElementRecrusive(list) {
    if (!Array.isArray(list)) {
        throw new Error('Cannot return last element of not a list.')
    }
    if (list.length > 1) {
        list.shift();
        return lastElementRecrusive(list)
    } else if (list.length === 1) {
        return list[0]
    }
}

const _lastElementRecrusive = list => {
    if (!Array.isArray(list)) {
        throw new Error('Cannot return last element of not a list.')
    }
    if (list.length === 1) {
        return list[0]
    }
    if (list.length > 1) {
        list.shift();
        return lastElementRecrusive(list)
    }
}

function lastElementRecrusiveNonDestructive(list, index = 0) {
    if (!Array.isArray(list)) {
        throw new Error('Cannot return last element of not a list.')
    }
    if (list.length === 1) {
        return list[0]
    }
    if (index === (list.length - 1)) {
        return list[index]
    } else {
        return lastElementRecrusiveNonDestructive(list, index + 1)
    }
}

const _lastElementRecrusiveNonDestructive = (list, index = 0) => {
    if (!Array.isArray(list)) {
        throw new Error('Cannot return last element of not a list.')
    }
    if (list.length === 1) {
        return list[0]
    }
    return index === (list.length - 1) ? list[index] : lastElementRecrusiveNonDestructive(list, index + 1)
}