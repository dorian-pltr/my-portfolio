module.exports = {
  locales: ['en', 'fr'],
  output: './locales/$LOCALE/$NAMESPACE.json',
  useKeysAsDefaultValue: false,
  keySeparator: '___',
  namespaceSeparator: ':::',
  sort: true,
  createOldCatalogs: false,
}
