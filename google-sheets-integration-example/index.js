import fetch from 'node-fetch'
import * as dotenv from 'dotenv';
dotenv.config();

async function init() {
  const sheet = await getSpreadsheet(process.env.GOOGLE_SHEET_LINK, process.env.GOOGLE_API_KEY)
  console.log(sheet);
}

async function getSpreadsheet(link, apiKey) {
  const endpoint = link + `?key=${apiKey}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
}

init();
