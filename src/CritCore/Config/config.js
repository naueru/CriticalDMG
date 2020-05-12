const config = {
  about: {
    docsUrl: 'https://docs.google.com/document/d/1-o3B3WHAnCwsz80m3C76dEQzB4DJ3NoNrvJGZrzN6gc/edit?usp=sharing'
  },
  defaultLanguage: 'en',
  language: 'en',
  passwordSettings: {
    email: {
      minLengthEmail: '7',
      maxLengthEmail: '60',
    },
    pwd: {
      minLengthPwd: '4',
      maxLengthPwd: '30',
    },
    userName: {
      minLengthUserName: '6',
      maxLengthUserName: '20',
    },
  },
  pictureViewer: {
    magnifierSize: '50%'
  },
  SERVER_HOST: process.env.REACT_APP_SERVER_HOST || "localhost",
  SERVER_PORT: process.env.REACT_APP_SERVER_PORT || "3030",
};

export default config;
