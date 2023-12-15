# Synthesia Video Creation Script

This script demonstrates how to interact with the Synthesia API to create and retrieve video information using Node.js.

## Features

- **Video Creation**: Send a script text to Synthesia API to create a customized video.
- **Video Retrieval**: Fetch details of a created video using its ID.

## Requirements

- Node.js
- `dotenv` package for managing environment variables
- `axios` package for HTTP requests

## Installation

Before running the script, install the required packages:

```bash
npm install dotenv axios
```

## Environment Setup

Create a `.env` file in the root directory of your project and add your Synthesia API key:

```env
API_KEY=your_api_key_here
```

## Usage

The script consists of two main functions:

1. `makeVideo(text)`: Creates a video using the Synthesia API with the provided script text.
2. `getVideo(videoId)`: Retrieves information about a video using its ID.

To run the script, use:

```bash
node index.js
```

Replace `index.js` with the name of your script file.

## Example

Here is a brief example of how to use the script:

```javascript
(async () => {
    const video = await makeVideo('Hello, world!');
    console.log(video);

    const videoInfo = await getVideo(video.id);
    console.log(videoInfo);
})();
```

## Error Handling

The script includes basic error handling for API requests.

## Disclaimer

This script is for educational purposes. Ensure you have the right permissions to use the Synthesia API.
