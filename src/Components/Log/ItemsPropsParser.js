const parseMsgProps = (content) => {
  const { text, actionModifier, picture, icon, character } = content,
    name = `${character}:`,
    actMod = actionModifier ? `*${actionModifier}*` : '',
    parsedProps = {
      name,
      actionModifier: actMod,
      message: text,
      picture,
      icon
    };
  return parsedProps;
};

const parseRollProps = (content) => {
  return content;
};

const parseEventProps = (content) => {
  const {
    text,
    image,
    sound,
    autoPlay
  } = content,
  parsedProps = {
    text,
    imgUrl: image.url,
    imgName: image.name,
    imgLabel: image.label,
    imgTitle: image.title,
    sound,
    autoPlay
  };
  return parsedProps;
};

const ItemsPropsParser = {
  parseMsgProps,
  parseRollProps,
  parseEventProps
};

export default ItemsPropsParser;
