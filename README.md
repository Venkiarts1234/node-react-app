# node-react-app

#Docker setup

**Install docker and docker-compose in your local machine**

https://docs.docker.com/get-docker/

https://docs.docker.com/compose/install/

**After install the docker client**

**Go to the project root dir**

Run 

>`docker-compose build`

>`docker-compose up`



## Setup the Server and Client projects

### Go to the server directory from root directory 
> `cd server/`

Run 
>`npm install`

**Make sure create the .env file on the `cd server/Config/` set up environment variables**

**Here is the sample .env file**

`SERVER_PORT=<PORT>`
  
`SERVER_URL=<Your server Url>`
  
`AIRTABLE_APIKEY=<KEY>`
  
`AIRTABLE_BASE=<BASE>`


  Run
  
  >`npm run dev`
  
  **You can see server run on the specified port**



### Next step to Setup Client app

  From the root directory
  > `cd client`

  Run 
  > `npm install`
  
  **Make sure create the .env.local file and set up envirounment variables**
  
  **Here is the sample .env.local file**
  
  `REACT_APP_ENV=LOCAL`
  
  `REACT_APP_SERVER_URL=<SERVERURL:PORT>`
  
  Run
  
  >`npm run start`
  
*That's It Client and Server app run on the specified ports*
