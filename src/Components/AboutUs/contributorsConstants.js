// Profile pictures
const nahuelPicture = require('../../assets/img/Nahuel.png');
const angelaPicture = require('../../assets/img/Angela.jpg');
const gabrielPicture = require('../../assets/img/Gabriel.png');
const nicolasPicture = require('../../assets/img/Nico.png');
const lucasPicture = require('../../assets/img/Lucas.jpg');

const nahuel = {
  name: 'Nahuel Andrada',
  img: nahuelPicture,
  role: 'Lead programmer',
  team: 'Dev',
  gender: 'Male',
  health: 3,
  willpower: 5,
  attributes: {
    physical: {
      str: 3,
      dex: 3,
      sta: 2
    },
    social: {
      cha: 4,
      man: 5,
      com: 2
    },
    mental: {
      int: 4,
      wit: 5,
      res: 4
    }
  },
  skills: {
    programming: {
      fronEndDev: 4,
      backEndDev: 2,
      unitTest: 3
    },
    testing: {
      dataBase: 2,
      manualTesting: 2,
      autoTesting: 0
    },
    others: {
      leadership: 4,
      agile: 5,
      design: 1
    }
  },
  inventory: [
    'Rubber chicken with a pulley in the middle',
    'Frozen hamster',
    'Critical baguette +1',
    'Bathroom key with lime keychain'
  ]
};

const angela = {
  name: 'Ángela Guevara',
  img: angelaPicture,
  role: 'Tester',
  team: 'QA',
  gender: 'Female',
  health: 3,
  willpower: 5,
  attributes: {
    physical: {
      str: 3,
      dex: 4,
      sta: 3
    },
    social: {
      cha: 4,
      man: 3,
      com: 4
    },
    mental: {
      int: 3,
      wit: 3,
      res: 4
    }
  },
  skills: {
    programming: {
      fronEndDev: 0,
      backEndDev: 0,
      unitTest: 1
    },
    testing: {
      dataBase: 1,
      manualTesting: 2,
      autoTesting: 1
    },
    others: {
      leadership: 2,
      agile: 1,
      design: 1
    }
  },
  inventory: [
    'Necklace',
    'Ring',
    'Books',
    'Amigurumis'
  ]
};

const gabriel = {
  name: 'Gabriel Bruno Piermarini',
  img: gabrielPicture,
  role: 'Front End developer',
  team: 'Dev',
  gender: 'Male',
  health: 4,
  willpower: 4,
  attributes: {
    physical: {
      str: 3,
      dex: 4,
      sta: 4
    },
    social: {
      cha: 4,
      man: 3,
      com: 3
    },
    mental: {
      int: 4,
      wit: 4,
      res: 2
    }
  },
  skills: {
    programming: {
      fronEndDev: 2,
      backEndDev: 0,
      unitTest: 0
    },
    testing: {
      dataBase: 0,
      manualTesting: 0,
      autoTesting: 0
    },
    others: {
      leadership: 3,
      agile: 1,
      design: 0
    }
  },
  inventory: [
    'Armor',
    'Helmet',
    'Sword',
    'Shield'
  ]
};

const nicolas = {
  name: 'Nicolás González Aaman',
  img: nicolasPicture,
  role: 'Tester',
  team: 'QA',
  gender: 'Male',
  health: 3,
  willpower: 5,
  attributes: {
    physical: {
      str: 3,
      dex: 3,
      sta: 2
    },
    social: {
      cha: 4,
      man: 5,
      com: 2
    },
    mental: {
      int: 4,
      wit: 5,
      res: 4
    }
  },
  skills: {
    programming: {
      fronEndDev: 4,
      backEndDev: 2,
      unitTest: 3
    },
    testing: {
      dataBase: 2,
      manualTesting: 2,
      autoTesting: 0
    },
    others: {
      leadership: 4,
      agile: 5,
      design: 1
    }
  },
  inventory: [
    'Magic tent',
    'Sting',
    'Laud',
    'Comfy clothes'
  ]
};

const lucas = {
  name: 'Lucas Botteri',
  img: lucasPicture,
  role: 'Backend lead',
  team: 'Dev',
  gender: 'Male',
  health: 5,
  willpower: 5,
  attributes: {
    physical: {
      str: 4,
      dex: 3,
      sta: 4
    },
    social: {
      cha: 1,
      man: 1,
      com: 3
    },
    mental: {
      int: 4,
      wit: 3,
      res: 2
    }
  },
  skills: {
    programming: {
      fronEndDev: 3,
      backEndDev: 4,
      unitTest: 4
    },
    testing: {
      dataBase: 4,
      manualTesting: 1,
      autoTesting: 2
    },
    others: {
      leadership: 2,
      agile: 3,
      design: 0
    }
  },
  inventory: [
    'Blue lightsaber',
    "Darth Revan's mask",
    'Jedi holocron',
    'Sith holocron'
  ]
};

const contributors = [
  nahuel,
  angela,
  gabriel,
  nicolas,
  lucas
];

export default contributors;
