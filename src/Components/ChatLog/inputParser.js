// Predefined events
import getPrefabEvents from '../../constants/events/genericEvents';

// Translations
import getTranslations from '../../CritCore/Translations/Translations.js';

const parse = (input = '', user, language) => {
  const translations      = getTranslations(language) || {},
    errorTranslations     = translations.errors || {},
    commandErrorTrans     = errorTranslations.commands || {},
    invalidCommandPrefix  = commandErrorTrans.invalidPrefix || '',
    invalidCommandSufix   = commandErrorTrans.invalidSufix || '',
    invalidRoll           = commandErrorTrans.invalidRoll || '',
    { icon, alterEgo }    = user,
    character             = alterEgo;

  let isSay               = input[0] !== '/',
    verifiedInput         = isSay ? '/say ' + input : input,
    terms                 = verifiedInput.split(' '),
    command               = terms[0].toLowerCase(),
    result;

  switch(command) {
    case '/say':
    case '/s':
      result = {
        type: 'message',
        content:{
          text: verifiedInput.slice(command.length),
          actionModifier: '',
          picture: '',
          icon,
          character
        }
      };
      break;
    case '/yell':
    case '/y':
      result = {
        type: 'message',
        content:{
          text: verifiedInput.slice(command.length),
          actionModifier: 'Yelling',
          picture: '',
          icon,
          character
        }
      };
      break;
    case '/whisper':
    case '/w':
      result = {
        type: 'message',
        content:{
          text: verifiedInput.slice(command.length),
          actionModifier: 'Whispering',
          picture: '',
          icon,
          character
        }
      };
      break;
    case '/roll':
    case '/r':
      let dicesTerm   = (terms[1] || '').toLowerCase(),
        negSubTerms   = dicesTerm.split('-'),
        negativeTerm  = -Number(negSubTerms[1]),
        baseTerm      = negSubTerms[0],
        posSubTerms   = baseTerm.split('+'),
        finalDices    = posSubTerms[0].split('d'),
        positiveTerm  = Number(posSubTerms[1]),
        dices         = Number(finalDices[0]),
        faces         = Number(finalDices[1]),
        modifier      = negativeTerm || positiveTerm || 0,
        results       = [],
        total         = modifier,
        roll          = {
          dices,
          faces,
          modifier,
          results,
          total,
          character
        };
      if (dices && faces) {
        for (let i = 0; i < roll.dices; i++) {
          let rnd = Math.ceil(Math.random()*roll.faces);
          roll.results.push(rnd);
          roll.total += rnd;
        }
        result = {
          type: 'roll',
          content: roll
        };
      } else {
        result = {
          type: 'error',
          content: {
            text: invalidRoll
          }
        }
      }
      break;
    case '/event':
    case '/e':
      const prefabEvents = getPrefabEvents(language),
        hasId = terms[1][0] === '#',
        id = hasId && terms[1].slice(1),
        event = id ? prefabEvents[id] : {
          type: 'event',
          content:{
            text: verifiedInput.slice(command.length),
            autoPlay: false
          }
        };
      result = event;
      break;
    default:
      result = {
        type: 'error',
        content: {
          text: `${invalidCommandPrefix} ${command} ${invalidCommandSufix}`
        }
      }
      break;
  }

  return result;
};

const inputParser = {
    parse
};

export default inputParser;
