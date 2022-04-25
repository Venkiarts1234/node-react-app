# node-react-app
// How to use docker to run the file
//how to run the project
cd server/
run npm install
make sure create the .env file on the cd server/Config/ set up envirounment variables

Here is sample .env file
SERVER_PORT=<PORT>
SERVER_URL=<Your server Url>
AIRTABLE_APIKEY=<KEY>
AIRTABLE_BASE=<BASE>

  run npm run dev
  
// Next Setup Client
  from the root directory
  cd client
  run npm install
  make sure create the .env.local file and set up envirounment variables
  
  Here is sample .env.local file
  REACT_APP_ENV=LOCAL
  REACT_APP_SERVER_URL=<SERVERURL:PORT>
  
