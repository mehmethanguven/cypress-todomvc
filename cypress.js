import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
{
  baseUrl= "http://localhost:8080",
  projectId= process.env.CYPRESS_PROJECTID
}
