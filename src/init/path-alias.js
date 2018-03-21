import moduleAlias from 'module-alias'

moduleAlias.addAliases({
  '@app-mongoose': `${process.cwd()}/src/utils/mongoose`,
  '@app-model': `${process.cwd()}/src/init/model`
})
