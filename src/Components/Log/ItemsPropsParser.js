const parseMsgProps = (content) => {
  const { text, picture, icon, character } = content,
    message = `${character}: ${text}`,
    parsedProps = {
      message,
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
