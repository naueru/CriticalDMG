let translations = {
  es: {
    mainMenu: {
      file: {
        label: 'Archivo',
        subMenues: {
          saveSession: 'Grabar sesión actual',
          loadGamePresets: 'Cargar preseteos de juego'
        }
      },
      edition: {
        label: 'Edición',
        subMenues: {
          uploadCustomImages: 'Subir imagen',
          uploadMap: 'Subir mapa',
          configGame: 'Configurar juego'
        }
      },
      library: {
        label: 'Biblioteca',
        subMenues: {
          loadManuals: 'Abrir manuales',
          viewMaps: 'Ver mapas',
          bestiary: 'Bestiario',
          weaponsItems: 'Armas y objetos'
        }
      },
      help: {
        label: 'Ayuda',
        subMenues: {
          about: 'Acerca de CriticalDMG'
        }
      },
      session: {
        label: 'Iniciar sesión',
        subMenues: {
          profile: 'Perfil',
          signOut: 'Salir'
        }
      }
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
      file: {
        label: 'File',
        subMenues: {
          saveSession: 'Save current session',
          loadGamePresets: 'Load game presets'
        }
      },
      edition: {
        label: 'Edition',
        subMenues: {
          uploadCustomImages: 'Upload image',
          uploadMap: 'Upload map',
          configGame: 'Configure game'
        }
      },
      library: {
        label: 'Library',
        subMenues: {
          loadManuals: 'Load manuals',
          viewMaps: 'View maps',
          bestiary: 'Bestiary',
          weaponsItems: 'Weapons and items'
        }
      },
      help: {
        label: 'Help',
        subMenues: {
          about: 'About CriticalDMG'
        }
      },
      session: {
        label: 'Log in',
        subMenues: {
          profile: 'Profile',
          signOut: 'Logout'
        }
      }
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
