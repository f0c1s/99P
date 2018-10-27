function secondLast(list) {
    if (!Array.isArray(list)) {
        throw new Error('Cannot return second last element from not a list')
    }
    if (list.length < 2) {
        throw new Error('Cannot return second last element from list not containing at least 2 elements')
    }
    return list[list.length - 2]
}