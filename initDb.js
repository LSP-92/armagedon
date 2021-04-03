require('dotenv').config();
const readline = require('readline');
const User = require('./models/Users');
const Neas = require('./models/Neas');
const converter = require('./lib/csvConverter');
const users = require('./initData/userDefault.json');
const connnect = require('./lib/connectMongoDb');

const askUser = (ask) => {
  return new Promise((resolve, reject) => {
    const readLine = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readLine.question(ask, (userResponse) => {
      readLine.close();
      resolve(userResponse);
    });
  });
};

const main = async () => {
  let response;
  try {
    response = await askUser('Are you sure want to initialize DataBase? (y/n)\n');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  if (response.toLowerCase() === 'n') {
    connnect.close()
    process.exit(0);
  }

  console.log('Delete Db data...');

  try {
    await User.deleteMany();
    await Neas.deleteMany();
  } catch (err) {
    console.log(err)
    process.exit(1);
    
  }

  console.log('Create Users...');

  try {
    const encyPass = await User.encrypt({ email: users.username, password: users.password })    
  } catch (error) {
    console.log('', error);
  }

  console.log('Create Asteroids...');

  try {
    const data = await converter();
    const statusResult = await Neas.insertMany(data);
    console.log(`${statusResult.length} Asteroids`);
  } catch (error) {
    console.log('Insert Asteroids', error);
  }

  connnect.close();
};

main();
