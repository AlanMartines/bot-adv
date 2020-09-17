const readline = require('readline-sync')
const state = require('./state.js')

function robot() {
  const content = {
    maximumSentences: 10
  }

  content.searchTerm = askAndReturnSearchTerm()
  content.prefix = askAndReturnPrefix()
  content.lang = askAndReturnLanguage()
  state.save(content)

  function askAndReturnSearchTerm() {
    return readline.question('Digite um termo de pesquisa na Wikipedia: ')
  }

  function askAndReturnPrefix() {
    const prefixes = ['Quem é', 'O que é', 'A história de']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma opção: ')
    const selectedPrefixText = prefixes[selectedPrefixIndex]

    return selectedPrefixText
  }
  //console.log(JSON.stringify(content, null, 4))

  function askAndReturnLanguage(){
		const language = ['pt','en', 'es', 'fr']
		const selectedLangIndex = readline.keyInSelect(language,'Escolha um idioma: ')
		const selectedLangText = language[selectedLangIndex]

		return selectedLangText
	  }
    //console.log(JSON.stringify(content, null, 4))
}

module.exports = robot
