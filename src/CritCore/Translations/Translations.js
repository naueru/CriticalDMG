let translations = {
    es: {
        mainMenu: {
            file: 'Archivo',
            edition: 'Edición',
            library: 'Biblioteca',
            help: 'Ayuda'
        }
    },
    en: {
        mainMenu: {
            file: 'File',
            edition: 'Edition',
            library: 'Library',
            help: 'Help'
        }
    }
}


let getTranslations = (lang = 'es') => {
    return translations[lang];
}

export default getTranslations;