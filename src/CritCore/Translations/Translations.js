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
          commands: 'Comandos',
          devMode: 'Modo desarrollo'
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
      // This section is for the about modal inside the app
      description: 'CriticalDMG es una plataforma de juegos RPG  de mesa de código abierto.',
      docsLinkLabel: 'Leer la documentación'
    },
    aboutUs: {
      // This section is for the about-us page
      introduction: {
        slogan: 'The ultimate toolkit platform for remote tabletop RPG',
        whatIs: '¿Qué es CriticalDMG?',
        description: `CriticalDMG es un proyecto OpenSource dedicado a
 todos los jugadores de rol de mesa que no puede o prefieren jugar a
 distancia. Es en escencia un conjunto de herramientas que pueden utilizar o no
 para hacer de tu experiencia de juego lo más parecido a jugar en persona.`
      },
      slider: {
        title: '¿Qué ofrecemos?',
        features: {
          maps: 'Visor de mapas',
          log: 'Chat y log'
        }
      },
      contributors: {
        title: 'Colaboradores',
        sheet: {
          data: {
            name: 'Nombre:',
            team: 'Equipo:',
            gender: 'Género:'
          },
          attributes: {
            title: 'Atributos',
            physical: {
              title: 'Físicos',
              str: {
                label: 'Fue',
                description: 'Fuerza',
              },
              dex: {
                label: 'Des',
                description: 'Destreza',
              },
              sta: {
                label: 'Est',
                description: 'Estamina',
              }
            },
            social: {
              title: 'Sociales',
              cha: {
                label: 'Car',
                description: 'Carisma',
              },
              man: {
                label: 'Man',
                description: 'Manipulación',
              },
              com: {
                label: 'Cal',
                description: 'Calma',
              }
            },
            mental: {
              title: 'Mentales',
              int: {
                label: 'Int',
                description: 'Inteligencia',
              },
              wit: {
                label: 'Ing',
                description: 'Ingenio',
              },
              res: {
                label: 'Res',
                description: 'Resolución',
              }
            }
          },
          skills: {
            title: 'Habilidades',
            programming: {
              title: 'Programación',
              fronEndDev: {
                label: 'Front - Dev',
                description: 'Todo lo relacionado al desarrollo de front-end.',
              },
              backEndDev:{
                label: 'Back - Dev',
                description: 'Todo lo relacionado al desarrollo de back-end.',
              },
              unitTest: {
                label: 'Test unitarios',
                description: 'Todo lo relacionado a los test unitarios.',
              }
            },
            testing: {
              title: 'Testeo',
              dataBase: {
                label: 'Base de datos',
                description: 'Todo lo relacionado a las Bases de datos.',
              },
              manualTesting:{
                label: 'Testeo Manual',
                description: 'Todo lo relacionado al testeo manual.',
              },
              autoTesting: {
                label: 'Test Automatizado',
                description: 'Todo lo relacionado al testeo automatizado.',
              }
            },
            others: {
              title: 'Otros',
              leadership: {
                label: 'Liderazgo',
                description: 'Todo relacionado al liderazgo y guiar al equipo.',
              },
              agile:{
                label: 'Ágiles',
                description: 'Todo lo relacionado con metodologías ágiles.',
              },
              design: {
                label: 'Diseño',
                description: 'Todo lo relacionado con UI/UX.',
              }
            }
          },
          health: 'Salud',
          willpower: 'Fuerza de voluntad'
        }
      },
      footer: {
        contactUs: 'Contáctenos'
      }
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
      500: 'Ups!, error interno, intente nuevamente más tarde',
      600: 'El email elegido ya ha sido utilizado.',
      601: 'El nombre de usuario elegido ya ha sido utilizado.'
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
      selectPlaceholder: 'Elija un ícono',
      errors: {
        email: 'Email inválido',
        emailMinMaxLength: 'Caracteres: Min 6 | Max 60',
        userName:'UserName inválido',
        userNameMinMaxLength: 'Caracteres: Min 6 | Max 20',
        password:'Caracteres: Min 4 | Max 30',
        alterEgo:'Este campo es requerido',
        isPwdMatched:'Las contraseñas no coinciden',
        fieldRequired: 'Este campo es requerido',
      },
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
    },
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
          commands: 'Commands',
          devMode: 'Developer Mode'
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
      // This section is for the about modal inside the app
      description: 'CriticalDMG is an opensource table RPG platform.',
      docsLinkLabel: 'Read the documentation'
    },
    aboutUs: {
      // This section is for the about-us page
      introduction: {
        slogan: 'The ultimate toolkit platform for remote tabletop RPG',
        whatIs: 'What is CriticalDMG?',
        description: `CriticalDMG is an OpenSource project targeted to
 every tabletop rpg player that needs or rather play remotely. It essentially is
 a bunch of tools that you may use or not to make your playing experience the most
 similar to play face to face.`
      },
      slider: {
        title: 'What we provide?',
        features: {
          maps: 'Map viewer',
          log: 'Chat & log'
        }
      },
      contributors: {
        title: 'Contributors',
        sheet: {
          data: {
            name: 'Name:',
            team: 'Team:',
            gender: 'Gender:'
          },
          attributes: {
            title: 'Attributes',
            physical: {
              title: 'Physical',
              str: {
                label: 'Str',
                description: 'Strenght',
              },
              dex: {
                label: 'Dex',
                description: 'Dextery',
              },
              sta: {
                label: 'Sta',
                description: 'Stamina',
              }
            },
            social: {
              title: 'Social',
              cha: {
                label: 'Cha',
                description: 'Charisma',
              },
              man: {
                label: 'Man',
                description: 'Manipulation',
              },
              com: {
                label: 'Com',
                description: 'Composure',
              }
            },
            mental: {
              title: 'Mental',
              int: {
                label: 'Int',
                description: 'Intelligence',
              },
              wit: {
                label: 'Wit',
                description: 'Wits',
              },
              res: {
                label: 'Res',
                description: 'Resolve',
              }
            }
          },
          skills: {
            title: 'Skills',
            programming: {
              title: 'Programming',
              fronEndDev: {
                label: 'Front - Dev',
                description: 'Everything related to front-end develop.',
              },
              backEndDev:{
                label: 'Back - Dev',
                description: 'Everything related to back-end develop.',
              },
              unitTest: {
                label: 'Unit tests',
                description: 'Everything related to unit testing',
              }
            },
            testing: {
              title: 'Testing',
              dataBase: {
                label: 'Database',
                description: 'Everything related to Databases',
              },
              manualTesting:{
                label: 'Man. testing',
                description: 'Everything related to manual testing',
              },
              autoTesting: {
                label: 'Auto. testing',
                description: 'Everything related to automation testing',
              }
            },
            others: {
              title: 'Others',
              leadership: {
                label: 'Lead',
                description: 'Everything related to leadership and guiding people',
              },
              agile:{
                label: 'Agile',
                description: 'Everything related to agile methods',
              },
              design: {
                label: 'Design',
                description: 'Everything related to UI/UX',
              }
            }
          },
          health: 'Health',
          willpower: 'Willpower'
        }
      },
      footer: {
        contactUs: 'Contact Us'
      }
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
      500: 'Oops!, internal error, try again later.',
      600: 'The chosen email is already in use.',
      601: 'The chosen username is already in use.'
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
      selectPlaceholder: 'Select an icon',
      errors: {
        email: 'Invalid email',
        emailMinMaxLength: 'Characters: Min 6 | Max 60',
        userName:'Invalid username',
        userNameMinMaxLength: 'Characters: Min 6 | Max 20',
        password:'Characters: Min 4 | Max 30',
        alterEgo:'This field is required',
        isPwdMatched:'Passwords do not match',
        fieldRequired: 'This field is required',
      },
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
    },
  }
}


let getTranslations = (lang = 'en') => {
  return translations[lang] || translations['en'];
}

export default getTranslations;
