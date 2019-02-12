const schedule = require('node-schedule')

module.exports = app => {
    schedule.scheduleJob('*/20 * * * * *', async function () {
        const { showLog } = app.utils.logs

        const usersCount = await app.db('users').whereNull('deletedAt').count('id').first()
        const categoriesCount = await app.db('categories').count('id').first()
        const articlesCount = await app.db('articles').count('id').first()

        const { Stat } = app.api.stat

        const lastStat = await Stat.findOne({}, {}, { sort: { 'createdAt': -1 } })

        const stat = new Stat({
            users: usersCount.count,
            categories: categoriesCount.count,
            articles: articlesCount.count,
            createdAt: new Date()
        })

        const changeUsers = !lastStat || stat.users !== lastStat.users
        const changeCategories = !lastStat || stat.categories !== lastStat.categories
        const changeArticles = !lastStat || stat.articles !== lastStat.articles

        if (changeUsers || changeCategories || changeArticles) {
            stat.save().then(() => showLog('Stats', 'Estatísticas atualizadas!'))
        }
    })
}