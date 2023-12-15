// Import the dotenv package to load environment variables from a .env file
require('dotenv').config();

// Import the axios package for making HTTP requests
const axios = require('axios');

// Define an asynchronous function to create a video using the Synthesia API
async function makeVideo(text) {
    try {
        // Send a POST request to the Synthesia API to create a video
        const response = await axios.post(`https://api.synthesia.io/v2/videos`, {
            "test": true,
            "input": [
                {
                    "scriptText": text,
                    "avatar": "anna_costume1_cameraA",
                    "background": "green_screen"
                }
            ]
        }, {
            headers: {
                'Authorization': process.env.API_KEY, // Include the API key from environment variables
                'Content-Type': 'application/json'
            }
        });
        return response.data; // Return the response data containing video information
    } catch (error) {
        console.error('error', error); // Handle any errors and log them
    }
}

// Define an asynchronous function to retrieve video information using the Synthesia API
async function getVideo(videoId) {
    try {
        // Send a GET request to the Synthesia API to get video details by videoId
        const response = await axios.get(`https://api.synthesia.io/v2/videos/${videoId}`, {
            headers: {
                'Authorization': process.env.API_KEY, // Include the API key from environment variables
                'Content-Type': 'application/json'
            }
        });
        return response.data; // Return the response data containing video information
    } catch (error) {
        console.error('error', error); // Handle any errors and log them
    }
}

// Immediately-invoked function expression (IIFE) to execute the code when the script is run
(async () => {
    // Create a video with a specified script
    const video = await makeVideo('Check out CodingWithAdo Channel on Youtube!');
    console.log(video); // Log the created video information

    // Retrieve video information for the created video
    const videoInfo = await getVideo(video.id);
    console.log(videoInfo); // Log the retrieved video information
})();
