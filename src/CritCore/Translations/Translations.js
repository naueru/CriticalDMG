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
          weaponsItems: 'Armas y objetos',
          magicPowers: 'Magia / poderes'
        }
      },
      character: {
        label: 'Personaje',
        subMenues: {
          characterSheet: 'Hoja de personaje',
          inventory: 'Inventario',
          magicPowers: 'Magia / poderes'
        }
      },
      tools: {
        label: 'Herramientas',
        subMenues: {
          commands: 'Comandos'
        }
      },
      media: {
        label: 'Media',
        subMenues: {
          player: 'Reproductor/mezclador de audio'
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
    },
    about: {
      description: 'CriticalDMG es una plataforma de juegos RPG  de mesa de código abierto.',
      docsLinkLabel: 'Leer la documentación'
    },
    chatLog: {
      inputPlaceholder: '> Ingrese texto o comando'
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
          weaponsItems: 'Weapons and items',
          magicPowers: 'Magic / powers'
        }
      },
      character: {
        label: 'Character',
        subMenues: {
          characterSheet: 'Character sheet',
          inventory: 'Inventory',
          magicPowers: 'Magic / powers'
        }
      },
      tools: {
        label: 'Tools',
        subMenues: {
          commands: 'Commands'
        }
      },
      media: {
        label: 'Media',
        subMenues: {
          player: 'Audio player/mixer'
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
    },
    about: {
      description: 'CriticalDMG is an opensource table RPG platform.',
      docsLinkLabel: 'Read the documentation'
    },
    chatLog: {
      inputPlaceholder: '> Insert text or command'
    }
  }
}


let getTranslations = (lang = 'en') => {
  return translations[lang] || translations['en'];
}

export default getTranslations;
