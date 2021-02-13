const config = {
  language: 'en',
  defaultLanguage: 'en',
  about: {
    docsUrl: 'https://docs.google.com/document/d/1-o3B3WHAnCwsz80m3C76dEQzB4DJ3NoNrvJGZrzN6gc/edit?usp=sharing'
  },
  SERVER_HOST: process.env.REACT_APP_SERVER_HOST || "localhost",
  SERVER_PORT: process.env.REACT_APP_SERVER_PORT || "3030",
  registerFormSettings: {
    email: {
      minLength: '6',
      maxLength: '60',
    },
    password: {
      minLength: '1',
      maxLength: '30',
    },
    userName: {
      minLength: '6',
      maxLength: '20',
    },
  },
  pictureViewer: {
    magnifierSize: '50%'
  },
};

export default config;
