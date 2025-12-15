/** @type { import("drizzle-kit").Config } */

// We need to load the .env file here for Drizzle Kit to access the DATABASE_URL
require('dotenv').config({ path: './.env' });

module.exports = {
  schema: "./src/db/schema.js", 
  out: "./drizzle", 
  dialect: 'postgresql', // <-- Keep this
  // REMOVE THE 'driver: 'pg',' line completely
  dbCredentials: {
   url:process.env.DATABASE_URL , 
  }
};