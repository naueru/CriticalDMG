const parse = (input = '', user) => {
  const { icon, alterEgo } = user,
    character = alterEgo;
  let isSay = input[0] !== '/',
    verifiedInput = isSay ? '/say ' + input : input,
    terms = verifiedInput.split(' '),
    command = terms[0].toLowerCase(),
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
      let dicesTerm = terms[1].toLowerCase(),
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
      for (let i = 0; i < roll.dices; i++) {
        let rnd = Math.round(Math.random()*roll.faces);
        roll.results.push(rnd);
        roll.total += rnd;
      }
      result = {
        type: 'roll',
        content: roll
      };
      break;
    case '/event':
    case '/e':
      console.log('new event');
      break;
    default:
      console.log(`Sorry, ${command} is not a valid command`);
      break;
  }

  return result;
};

const inputParser = {
    parse
};

export default inputParser;
