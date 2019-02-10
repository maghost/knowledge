module.exports = app => {
    function existsOrError(value, message) {
        if (!value) throw message
        if (Array.isArray(value) && value.length === 0) throw message
        if (typeof value === 'string' && !value.trim()) throw message
        if (typeof value === 'object' && !Object.keys(value).length) throw message
    }

    function notExistsOrError(value, message) {
        try {
            existsOrError(value, message)
        } catch (message) {
            return
        }

        throw message
    }

    function equalsOrError(valueA, valueB, message) {
        if (valueA !== valueB) throw message
    }

    return { existsOrError, notExistsOrError, equalsOrError }
}