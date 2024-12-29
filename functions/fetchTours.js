// functions/fetchTours.js

const fetch = require("node-fetch"); // Ensure you have node-fetch installed

exports.handler = async function (event, context) {
  try {
    const response = await fetch("https://course-api.com/react-tours-project");
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data), // Send data back to the client
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data" }),
    };
  }
};
