const users = {
  1: {
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2MTA5ODMxNjgsImV4cCI6MTYxMTA2OTU2OCwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiMSIsImp0aSI6ImQ4OTEwNzQ3LWRlNjQtNDUwYS05ODc0LWZjYWJiZGE1Mjc0NiJ9.IGw1vGahR_IXeUuaC53jH0xxAlVSuddpM4A1w383RRw',
    authentication: {
      strategy: 'local'
    },
    user: {
      id: 1,
      email: 'a@b.com',
      userName: 'valdamir',
      alterEgo: 'Valdamir!',
      picture: null,
      icon: 'warrior',
      createdAt: '2020-11-29T21:17:04.685Z',
      updatedAt: '2020-11-29T21:17:04.685Z'
    }
  },
  2: {
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2MTA5ODM0OTcsImV4cCI6MTYxMTA2OTg5NywiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiMiIsImp0aSI6ImZmOWU2YzIzLTJiY2YtNDZiYi1hYjdmLWM1YmIyYzFkZjI3NCJ9.lpmt-M_WjCa3lBm2x1_dZvYzavWuBhJIQ_KGAFAq-Hc',
    authentication: {
      strategy: 'local'
    },
    user: {
      id: 2,
      email: 'c@d.com',
      userName: 'meriadoc',
      alterEgo: 'Meriadoc',
      picture: null,
      icon: 'mage',
      createdAt: '2020-11-29T21:17:33.373Z',
      updatedAt: '2020-11-29T21:17:33.373Z'
    }
  },
  3: {
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2MTA5ODM3NTQsImV4cCI6MTYxMTA3MDE1NCwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiMyIsImp0aSI6IjhiMzJhMWE4LWMzM2UtNDY0NS1iZDFkLWU2MTk5NGE4ZGQ3NiJ9.vpPzzaI4lFtG85gLEH3_lKwAlwKncrRCy7u6y2CS87g',
    authentication: {
      strategy: 'local'
    },
    user: {
      id: 3,
      email: 'e@f.com',
      userName: 'someLongName',
      alterEgo: 'Drako',
      picture: null,
      icon: 'bard',
      createdAt: '2020-11-29T21:18:48.942Z',
      updatedAt: '2020-11-29T21:18:48.942Z'
    }
  },
  4: {
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2MTA1NjgzMzgsImV4cCI6MTYxMDY1NDczOCwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNCIsImp0aSI6IjM4OGEyNjBiLWMxYmItNGNjMS1hZWJkLTc2ZTcyZTg0NDEzNiJ9.8Z2tjhJpuT73jTaJHO0TXbqW5gm0rxnTnTPuiSJdyOM',
    authentication: {
      strategy: 'local'
    },
    user: {
      id: 4,
      email: 'g@h.com',
      userName: 'yvaine',
      alterEgo: 'Yvaine',
      picture: null,
      icon: 'archer',
      createdAt: '2020-11-29T21:19:59.545Z',
      updatedAt: '2020-11-29T21:19:59.545Z'
    }
  }
};

const getMockUser = ({ email, userName, id }) => {
  let user;
  if(id){
    user = users[id]?.user;
  } else {
    const userData = email || userName;
    switch (userData) {
      case 'a@b.com':
        user = users[1];
        break;

      case 'c@d.com':
        user = users[2];
        break;

      case 'e@f.com':
        user = users[3];
        break;

      case 'g@h.com':
        user = users[4];
        break;

      default:
        break;
    }
  }

  return {data: user, status: 201};
};

export default getMockUser;
