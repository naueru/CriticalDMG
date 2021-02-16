import snd from '../../assets/sounds/mocks/door.ogg';

const getPrefabEvents = (translatedEvents) => {

  return {
    softRain: {
      type: 'event',
      content:{
        text: translatedEvents.softRain,
        autoPlay: false
      }
    },
    heavyRain: {
      type: 'event',
      content:{
        text: 'Suddenly a bunch of thunders and a lot of water start falling from the sky.',
        autoPlay: false
      }
    },
    beefy: {
      type: 'event',
      content:{
        text: 'Suddenly the doors of the tavern open and a beefy man appears',
        image: {
          label: 'Do it!',
          title: 'Just do it!',
          url: 'http://cdn01.cdn.justjared.com/wp-content/uploads/headlines/2015/01/shia-labeouf-goes-shirtless-dances-in-a-cage-for-sias-elastic-hart.jpg',
          name: 'beefy'
        },
        sound: snd,
        autoPlay: true
      }
    }
  };
};

export default getPrefabEvents;
