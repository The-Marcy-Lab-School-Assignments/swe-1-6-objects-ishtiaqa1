const coolGreeting = (person) => {
  if (person.isCool) {
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?` 
  } else {
    return `Greetings ${person.name}, how have you been lately?`
  }
};

const haveBirthday = (person) => {
  person.age += 1;
};

const becomeSecretAgent = (person, spyHandle) => {
  person['spyHandle'] = spyHandle;
  delete person['name'];
};

const carMaker = (nam, make, yea) => {
  return {
    'name': nam,
    'year': yea,
    'maker': make,
    'needsOilChange': false,
  }
};

const weAreNotFriends = (person) => {
  return person.friends.pop();
};

const listHobbies = (person) => {
  for (let i = 0; i < person.hobbies.length; i++) {
    console.log(`${person.name} likes ${person.hobbies[i]}.`)
  }
};

const getNextOpponent = (fighters) => {
  if (fighters.matches.length > 0) {
    return fighters.matches[0].teamName;
  }
  return null;
};

const listAllKeys = (obj) => {
  return Object.keys(obj);
};

const listAllValues = (obj) => {
  return Object.values(obj);
};

const convertToMatrix = (objs) => {
  let arr = [];
  if (objs.length > 0) {
    arr.push(listAllKeys(objs[0]));
    for (let i = 0; i < objs.length; i++) {
      arr.push(listAllValues(objs[i]));
    }
    return arr;
  }
  return arr;
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
