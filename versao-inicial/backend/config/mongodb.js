const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/knowledge_stats', { useNewUrlParser: true })
    .catch(e => {
        const message = 'Erro! Não foi possível conectar com o MongoDB!'
        const { showWarning } = app.utils.logs

        showWarning(message)
        console.log('%s', message, '\x1b[0m')
    })