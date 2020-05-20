// Translations
import getTranslations from '../../CritCore/Translations/Translations.js';

const getPrefabEvents = (lang) => {
  const translatedEvents = getTranslations(lang).events;

  return {
    softRain: {
      type: 'event',
      content:{
        text: translatedEvents.softRain,
        autoPlay: false
      }
    },
    heavyRain: {
      type: 'event',
      content:{
        text: 'Suddenly a bunch of thunders and a lot of water start falling from the sky.',
        autoPlay: false
      }
    },
    beefy: {
      type: 'event',
      content:{
        text: 'Suddenly the doors of the tavern open and a beefy man appears',
        image: {
          label: 'Do it!',
          title: 'Just do it!',
          url: 'http://cdn01.cdn.justjared.com/wp-content/uploads/headlines/2015/01/shia-labeouf-goes-shirtless-dances-in-a-cage-for-sias-elastic-hart.jpg',
          name: 'beefy'
        },
        sound: 'https://uc2186f92c8de061b294dc850aab.dl.dropboxusercontent.com/cd/0/get/A4C8mL5u0Fp6g-qTiL3umeY8yMnxOYYZghamd4-dXWCaAJvogrEG9IWqi-zoaabJDxbaZW6iAqbdUNV7y9a6zEhEzSJwcnWWgHBjvgwbmgHFs7i4ATTLvyblkys1ozHJepI/file?_download_id=66976913568844916442238941959775203345900686633725072789269321387&_notify_domain=www.dropbox.com&dl=1',
        autoPlay: true
      }
    }
  };
};

export default getPrefabEvents;
