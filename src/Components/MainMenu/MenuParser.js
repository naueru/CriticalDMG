// Config
import config from '../../CritCore/Config/config';

// Translations
import getTranslations from '../../CritCore/Translations/Translations.js';

const { defaultLanguage } = config;

let parseMenues = (lang = defaultLanguage, handleState, account) => {
  const translations    = getTranslations(lang),
    userName            = account,
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
          onClick: () => alert(`Clicked ${fileSubMenues.saveSession}`)
        },
        {
          label: fileSubMenues.loadGamePresets,
          onClick: () => alert(`Clicked ${fileSubMenues.loadGamePresets}`)
        }
      ]
    },
    {
      label: editionLabel,
      subMenues: [
        {
          label: editionSubMenues.uploadCustomImages,
          onClick: () => alert(`Clicked ${editionSubMenues.uploadCustomImages}`)
        },
        {
          label: editionSubMenues.uploadMap,
          onClick: () => alert(`Clicked ${editionSubMenues.uploadMap}`)
        },
        {
          label: editionSubMenues.configGame,
          onClick: () => alert(`Clicked ${editionSubMenues.configGame}`)
        }
      ]
    },
    {
      label: libraryLabel,
      subMenues: [
        {
          label: librarySubMenues.loadManuals,
          onClick: () => handleState({ showModal: 'manuals' })
        },
        {
          label: librarySubMenues.viewMaps,
          onClick: () => handleState({ showModal: 'maps' })
        },
        {
          label: librarySubMenues.bestiary,
          onClick: () => alert(`Clicked ${librarySubMenues.bestiary}`)
        },
        {
          label: librarySubMenues.weaponsItems,
          onClick: () => alert(`Clicked ${librarySubMenues.weaponsItems}`)
        },
        {
          label: librarySubMenues.magicPowers,
          onClick: () => alert(`Clicked ${librarySubMenues.magicPowers}`)
        }
      ]
    },
    {
      label: characterLabel,
      subMenues: [
        {
          label: characterSubMenues.characterSheet,
          onClick: () => alert(`Clicked ${characterSubMenues.characterSheet}`)
        },
        {
          label: characterSubMenues.inventory,
          onClick: () => alert(`Clicked ${characterSubMenues.inventory}`)
        },
        {
          label: characterSubMenues.magicPowers,
          onClick: () => alert(`Clicked ${characterSubMenues.magicPowers}`)
        }
      ]
    },
    {
      label: toolsLabel,
      subMenues: [
        {
          label: toolsSubMenues.commands,
          onClick: () => alert(`Clicked ${toolsSubMenues.commands}`)
        }
      ]
    },
    {
      label: mediaLabel,
      subMenues: [
        {
          label: mediaSubMenues.player,
          onClick: () => alert(`Clicked ${mediaSubMenues.player}`)
        }
      ]
    },
    {
      label: helpLabel,
      subMenues: [
        {
          label: helpSubMenues.about,
          onClick: () => handleState({ showModal: 'about' })
        },
        {
          label: helpSubMenues.availableCommands,
          onClick: () => handleState({ showModal: 'availableCommands' })
        }
      ]
    },
    {
      label: sessionLabel,
      subMenues: [
        {
          label: sessionSubMenues.profile,
          onClick: () => alert(`Clicked ${sessionSubMenues.profile}`)
        },
        {
          label: sessionSubMenues.signOut,
          onClick: () => handleState({ shouldLogOut: true })
        }
      ]
    }
  ];
}

export default parseMenues;
