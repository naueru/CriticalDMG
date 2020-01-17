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

const ItemsPropsParser = {
  parseMsgProps,
  parseRollProps
};

export default ItemsPropsParser;
