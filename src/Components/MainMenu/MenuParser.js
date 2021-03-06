let parseMenues = ({
  handleState,
  account,
  isDevelop,
  developerMode,
  updateDeveloperModeSetting,
  translations
}) => {
  const userName        = account,
    mainMenu            = (translations && translations.mainMenu) || {},
    file                = mainMenu.file || {},
    fileLabel           = file.label || '',
    fileSubMenues       = file.subMenues || {},
    edition             = mainMenu.edition || {},
    editionLabel        = edition.label || '',
    editionSubMenues    = edition.subMenues || {},
    library             = mainMenu.library || {},
    libraryLabel        = library.label || '',
    librarySubMenues    = library.subMenues || {},
    character           = mainMenu.character || {},
    characterLabel      = character.label || '',
    characterSubMenues  = character.subMenues || {},
    tools               = mainMenu.tools || {},
    toolsLabel          = tools.label || '',
    toolsSubMenues      = tools.subMenues || {},
    media               = mainMenu.media || {},
    mediaLabel          = media.label || '',
    mediaSubMenues      = media.subMenues || {},
    help                = mainMenu.help || {},
    helpLabel           = help.label || '',
    helpSubMenues       = help.subMenues || {},
    session             = mainMenu.session || {},
    sessionLabel        = userName || session.label || '',
    sessionSubMenues    = session.subMenues || {};
  return [
    {
      label: fileLabel,
      subMenues: [
        {
          label: fileSubMenues.saveSession,
          onClick: () => alert(`Clicked ${fileSubMenues.saveSession}`),
          visible: true
        },
        {
          label: fileSubMenues.loadGamePresets,
          onClick: () => alert(`Clicked ${fileSubMenues.loadGamePresets}`),
          visible: true
        }
      ]
    },
    {
      label: editionLabel,
      subMenues: [
        {
          label: editionSubMenues.uploadCustomImages,
          onClick: () => alert(`Clicked ${editionSubMenues.uploadCustomImages}`),
          visible: true
        },
        {
          label: editionSubMenues.uploadMap,
          onClick: () => alert(`Clicked ${editionSubMenues.uploadMap}`),
          visible: true
        },
        {
          label: editionSubMenues.configGame,
          onClick: () => alert(`Clicked ${editionSubMenues.configGame}`),
          visible: true
        }
      ]
    },
    {
      label: libraryLabel,
      subMenues: [
        {
          label: librarySubMenues.loadManuals,
          onClick: () => handleState({ showModal: 'manuals' }),
          visible: true
        },
        {
          label: librarySubMenues.viewMaps,
          onClick: () => handleState({ showModal: 'maps' }),
          visible: true
        },
        {
          label: librarySubMenues.bestiary,
          onClick: () => alert(`Clicked ${librarySubMenues.bestiary}`),
          visible: true
        },
        {
          label: librarySubMenues.weaponsItems,
          onClick: () => alert(`Clicked ${librarySubMenues.weaponsItems}`),
          visible: true
        },
        {
          label: librarySubMenues.magicPowers,
          onClick: () => alert(`Clicked ${librarySubMenues.magicPowers}`),
          visible: true
        }
      ]
    },
    {
      label: characterLabel,
      subMenues: [
        {
          label: characterSubMenues.characterSheet,
          onClick: () => alert(`Clicked ${characterSubMenues.characterSheet}`),
          visible: true
        },
        {
          label: characterSubMenues.inventory,
          onClick: () => alert(`Clicked ${characterSubMenues.inventory}`),
          visible: true
        },
        {
          label: characterSubMenues.magicPowers,
          onClick: () => alert(`Clicked ${characterSubMenues.magicPowers}`),
          visible: true
        }
      ]
    },
    {
      label: toolsLabel,
      subMenues: [
        {
          label: toolsSubMenues.commands,
          onClick: () => alert(`Clicked ${toolsSubMenues.commands}`),
          visible: true
        },
        {
          label: toolsSubMenues.devMode,
          onClick: () => updateDeveloperModeSetting(!developerMode),
          visible: isDevelop
        },
      ]
    },
    {
      label: mediaLabel,
      subMenues: [
        {
          label: mediaSubMenues.player,
          onClick: () => alert(`Clicked ${mediaSubMenues.player}`),
          visible: true
        }
      ]
    },
    {
      label: helpLabel,
      subMenues: [
        {
          label: helpSubMenues.about,
          onClick: () => handleState({ showModal: 'about' }),
          visible: true
        },
        {
          label: helpSubMenues.availableCommands,
          onClick: () => handleState({ showModal: 'availableCommands' }),
          visible: true
        }
      ]
    },
    {
      label: sessionLabel,
      subMenues: [
        {
          label: sessionSubMenues.profile,
          onClick: () => alert(`Clicked ${sessionSubMenues.profile}`),
          visible: true
        },
        {
          label: sessionSubMenues.signOut,
          onClick: () => handleState({ shouldLogOut: true }),
          visible: true
        }
      ]
    }
  ];
}

export default parseMenues;
