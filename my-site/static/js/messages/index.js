import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhLocale from './message_cn'
import enLocale from './message_en'
import jaLocale from './message_ja'

Vue.use(VueI18n)

const messages = {
  en: enLocale,
  zh: zhLocale,
  ja: jaLocale
}
var lang = localStorage.getItem('locale')
if (lang === undefined || lang === null) {
  lang='zh'
}
const i18n = new VueI18n({
  locale: lang,
  messages
})

export default i18n
