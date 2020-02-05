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
          about: 'Acerca de CriticalDMG',
          availableCommands: 'Comandos disponibles'
        }
      },
      session: {
        label: 'Cuenta',
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
    },
    welcome: {
      login: 'Ingresar',
      register: 'Registrarse',
      description: 'El kit de herramientas OpenSource para juegos RPG de mesa. ¡Bienvenido, Por favor ingresa para continuar!'
    },
    login: {
      userName: 'Nombre de usuario',
      password: 'Contraseña',
      button: 'Ingresar'
    },
    availableCommands: {
      title: 'Comandos disponibles',
      description: [
        {command :'{/say | /s} {text}', description: 'Current player says text'},
        {command :'{/yell | /y} {text}', description: 'Current player yells text'},
        {command :'{/whisper | /w} {text}', description: 'Current player whispers text'},
        {command :'{/roll | /r} {XdY+M}', description: 'Current player rolls X dices of Y faces and adds M to result'}
      ]
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
          about: 'About CriticalDMG',
          availableCommands: 'Available commands'
        }
      },
      session: {
        label: 'Account',
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
    },
    welcome: {
      login: 'Login',
      register: 'Register',
      description: 'The OpenSource table rpg toolkit. Welcome, Login to continue!'
    },
    login: {
      userName: 'User Name',
      password: 'Password',
      button: 'Login'
    },
    availableCommands: {
      title: 'Available commands',
      description: [
        {command :'{/say | /s} {text}', description: 'Current player says text'},
        {command :'{/yell | /y} {text}', description: 'Current player yells text'},
        {command :'{/whisper | /w} {text}', description: 'Current player whispers text'},
        {command :'{/roll | /r} {XdY+M}', description: 'Current player rolls X dices of Y faces and adds M to result'}
      ]
    }
  }
}


let getTranslations = (lang = 'en') => {
  return translations[lang] || translations['en'];
}

export default getTranslations;
