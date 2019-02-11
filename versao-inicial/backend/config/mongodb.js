const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/knowledge_stats', { useNewUrlParser: true })
    .catch(e => {
        const message = 'Erro! Não foi possível conectar com o MongoDB!'
        console.log('\x1b[41m\x1b[37m%s', message, '\x1b[0m')
    })