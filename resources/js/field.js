Nova.booting((Vue, router, store) => {
  Vue.component('index-currency-input', require('./components/IndexField'))
  Vue.component('detail-currency-input', require('./components/DetailField'))
  Vue.component('form-currency-input', require('./components/FormField'))
})
