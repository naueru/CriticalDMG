let translations = {
  es: {
    mainMenu: {
      file: 'Archivo',
      edition: 'Edición',
      library: 'Biblioteca',
      help: 'Ayuda'
    },
    statusBar: {
      amountPlayers: 'Jugadores:',
      timeSpent: 'Tiempo trans.:',
      gameName: 'Juego:',
      sessionNumber: 'Sesión N°:'
    }
  },
  en: {
    mainMenu: {
      file: 'File',
      edition: 'Edition',
      library: 'Library',
      help: 'Help'
    },
    statusBar: {
      amountPlayers: 'Players:',
      timeSpent: 'Time spent:',
      gameName: 'Game:',
      sessionNumber: 'Session N°:'
    }
  }
}


let getTranslations = (lang = 'en') => {
  return translations[lang] || translations['en'];
}

export default getTranslations;
