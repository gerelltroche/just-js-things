import * as dotenv from 'dotenv';
dotenv.config();

function init() {
  console.log('ran');
  console.log(process.env.APIKEY);
}

init();
