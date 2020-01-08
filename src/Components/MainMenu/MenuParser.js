// Translations
import getTranslations from '../../CritCore/Translations/Translations.js';



let parseMenues = (lang = 'en') => {
  const translations  = getTranslations(lang),
    userName          = '', // ToDo define how to get user name if logged
    mainMenu          = (translations && translations.mainMenu) || {},
    file              = mainMenu.file || {},
    fileLabel         = file.label,
    fileSubMenues     = file.subMenues,
    edition           = mainMenu.edition || {},
    editionLabel      = edition.label,
    editionSubMenues  = edition.subMenues,
    library           = mainMenu.library || {},
    libraryLabel      = library.label,
    librarySubMenues  = library.subMenues,
    help              = mainMenu.help || {},
    helpLabel         = help.label,
    helpSubMenues     = help.subMenues,
    session           = mainMenu.session || {},
    sessionLabel      = userName || session.label,
    sessionSubMenues  = session.subMenues;
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
          onClick: () => alert(`Clicked ${librarySubMenues.loadManuals}`)
        },
        {
          label: librarySubMenues.viewMaps,
          onClick: () => alert(`Clicked ${librarySubMenues.viewMaps}`)
        },
        {
          label: librarySubMenues.bestiary,
          onClick: () => alert(`Clicked ${librarySubMenues.bestiary}`)
        },
        {
          label: librarySubMenues.weaponsItems,
          onClick: () => alert(`Clicked ${librarySubMenues.weaponsItems}`)
        }
      ]
    },
    {
      label: helpLabel,
      subMenues: [
        {
          label: helpSubMenues.about,
          onClick: () => alert(`Clicked ${helpSubMenues.about}`)
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
          onClick: () => alert(`Clicked ${sessionSubMenues.signOut}`)
        }
      ]
    }
  ];
}

export default parseMenues;