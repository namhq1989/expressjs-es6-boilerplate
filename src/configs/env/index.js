/*
 * App common variables
 */
export default {
  env: {
    production: 'production',
    development: 'development',
    test: 'test'
  },

  // Code conventions
  conventions: {
    number: 0,
    array: [],
    string: '',
    object: null
  },

  // Regex
  regex: {
    objectId: /^[0-9a-fA-F]{24}$/,
    phone: /^\+?1?(\d{10,12}$)/
  },

  // App locales
  locales: {
    list: 'en vi',
    en: 'en',
    vi: 'vi'
  }
}
