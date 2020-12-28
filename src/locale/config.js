import VueI18n from 'vue-i18n'
import { messages } from './messages'

const i18n = new VueI18n({
  locale: 'ru', // set locale
  messages // set locale messages
})

export default i18n
