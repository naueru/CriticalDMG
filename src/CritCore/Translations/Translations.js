// Config
import config from '../Config/config';

const {
  registerFormSettings
}                       = config,
passwordSettings        = registerFormSettings.password || {},
pwdMinSetting           = passwordSettings.minLength,
pwdMaxSetting           = passwordSettings.maxLength;

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
      description: 'El kit de herramientas OpenSource para juegos RPG de mesa. ¡Bienvenido, Por favor ingresa para continuar!',
      400: 'El nombre de usuario o email elegidos ya han sido utilizados',
      401: 'Nombre de usuario o contraseña incorrectos',
      500: 'Ups!, error interno, intente nuevamente más tarde'
    },
    login: {
      userName: 'Nombre de usuario',
      password: 'Contraseña',
      button: 'Ingresar'
    },
    register: {
      title: 'Crear cuenta',
      email: 'E-mail',
      emailTooltip: 'Dirección de E-mail',
      userName: 'Nombre de usuario',
      userTooltip: 'Nombre de usuario',
      password: 'Ingrese contraseña',
      passwordTooltip : `${pwdMinSetting}-${pwdMaxSetting} letras & números`,
      repeatPassword: 'Repita la contraseña',
      repeatPasswordTooltip : `${pwdMinSetting}-${pwdMaxSetting} letras & números`,
      alterEgo: 'Nombre visible / Alter ego',
      alterEgoTooltip: 'Nombre visible / Alter ego',
      icon: 'Elija un avatar',
      submit: 'Crear',
      selectPlaceholder: 'Elija un ícono'
    },
    availableCommands: {
      title: 'Comandos disponibles',
      description: [
        {command :'{/say | /s} {text}', description: 'Current player says text'},
        {command :'{/yell | /y} {text}', description: 'Current player yells text'},
        {command :'{/whisper | /w} {text}', description: 'Current player whispers text'},
        {command :'{/roll | /r} {XdY+M}', description: 'Current player rolls X dices of Y faces and adds M to result'}
      ]
    },
    events: {
      softRain: 'Lentamente, unas cuantas gotas comienzan a caer desde el cielo.',
      heavyRain: 'Repentinamente, un puñado de truenos y un montón de agua comienza a caer del cielo.'
    },
    errors: {
      commands: {
        invalidPrefix: 'Lo siento,',
        invalidSufix: 'no es un comando válido.',
        invalidRoll: 'Tirada inválida, por favor use el formato: XdY+mod, ej.: "2d6+4". El modificador es opcional.'
      }
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
      description: 'The OpenSource table rpg toolkit. Welcome, Login to continue!',
      400: 'The chosen username or email are already in use',
      401: 'Invalid username or password',
      500: 'Oops!, internal error, try again later.'
    },
    login: {
      userName: 'User Name',
      password: 'Password',
      button: 'Login'
    },
    register: {
      title: 'Create account',
      email: 'E-mail',
      emailTooltip: 'E-mail address',
      userName: 'User name',
      userTooltip: 'User Name',
      password: 'Password',
      passwordTooltip : `${pwdMinSetting}-${pwdMaxSetting} letters & numbers`,
      repeatPassword: 'Repeat password',
      repeatPasswordTooltip : `${pwdMinSetting}-${pwdMaxSetting} letters & numbers`,
      alterEgo: 'Visible name / Alter ego',
      alterEgoTooltip: 'Alter Ego / Visual name',
      icon: 'Choose an avatar',
      submit: 'Create',
      selectPlaceholder: 'Select an icon'
    },
    availableCommands: {
      title: 'Available commands',
      description: [
        {command :'{/say | /s} {text}', description: 'Current player says text'},
        {command :'{/yell | /y} {text}', description: 'Current player yells text'},
        {command :'{/whisper | /w} {text}', description: 'Current player whispers text'},
        {command :'{/roll | /r} {XdY+M}', description: 'Current player rolls X dices of Y faces and adds M to result'}
      ]
    },
    events: {
      softRain: 'Softly a few drops start falling from the sky.',
      heavyRain: 'Suddenly a bunch of thunders and a lot of water start falling from the sky.'
    },
    errors: {
      commands: {
        invalidPrefix: 'Sorry,',
        invalidSufix: 'is not a valid command.',
        invalidRoll: 'Invalid roll, please use the following format: XdY+mod, i.e.: "2d6+4". The modifier is optional'
      }
    }
  }
}


let getTranslations = (lang = 'en') => {
  return translations[lang] || translations['en'];
}

export default getTranslations;
