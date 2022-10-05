import IndexField from './components/IndexField'
import DetailField from './components/DetailField'

Nova.booting((app, store) => {
  app.component('index-external-url', IndexField)
  app.component('detail-external-url', DetailField)
})
