module.exports = app => {
    function showLog(local, message) {
        console.log('\x1b[35m[%s]\x1b[37m %s', local, message, '\x1b[0m')
    }

    function showWarning(message) {
        console.log('\x1b[41m\x1b[37m%s', message, '\x1b[0m')
    }

    return { showLog, showWarning }
}