module.exports = function () {
  var faker = require('faker')
  var _ = require('lodash')

  return {
    people: _.times(100, function (n) {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar()
      }
    }),
    accounts: require('./accounts'),
    avails: require('./avails'),
    campaigns: require('./campaigns'),
    dayparts: require('./dayparts'),
    markets: require('./markets'),
    offers: require('./offers'),
    openPreempts: require('./open-preempts'),
    orderLineItems: require('./order-line-items'),
    orders: require('./orders'),
    priceGuide: require('./price-guide'),
    programs: require('./programs'),
    requestedAvails: require('./requested-avails'),
    specials: require('./specials'),
    tickets: require('./tickets')
  }
}
