const parseMsgProps = (content) => {
  const { text, actionModifier, picture, icon, character } = content,
    name = `${character}:`,
    actMod = actionModifier ? `*${actionModifier}*` : '',
    parsedProps = {
      name,
      actionModifier: actMod,
      message: text,
      picture,
      icon,
    };
  return parsedProps;
};

const parseRollProps = (content) => {
  return content;
};

const parseErrorProps = (content) => {
  return content;
};

const parseEventProps = (content) => {
  const {
    text,
    image,
    sound,
    autoPlay,
  } = content,
  img = image || {},
  parsedProps = {
    text,
    imgUrl: img.url,
    imgName: img.name,
    imgLabel: img.label,
    imgTitle: img.title,
    sound,
    autoPlay,
  };
  return parsedProps;
};

const ItemsPropsParser = {
  parseMsgProps,
  parseRollProps,
  parseEventProps,
  parseErrorProps,
};

export default ItemsPropsParser;
