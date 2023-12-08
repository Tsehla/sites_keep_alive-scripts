const axios = require('axios');
const cron = require('node-cron');

// List of links to ping
const linksToPing = [
  'https://infolexicon.onrender.com/',
  'https://wikiachive.onrender.com/',
  // 'https://youtube-poem-maker-uploader.onrender.com/',
  // 'https://infolexicon-automated-contents-get.onrender.com/',
  // Add more links as needed
];

// Function to ping a single link
async function pingLink(link) {
  try {
    const response = await axios.get(link);
    console.log(`Pinged ${link} - Status: ${response.status}`);
  } catch (error) {
    console.error(`Error pinging ${link}: ${error.message}`);
  }
}

// Function to ping all links
function pingAllLinks() {
  linksToPing.forEach((link) => {
    console.log('Pinging links... : ', link);
    pingLink(link);
  });
}

// Schedule the task to run every ten minutes
cron.schedule('*/10 * * * *', () => {
  // console.log('Pinging links...');
  pingAllLinks();
});

console.log('Pinging script started. Press Ctrl+C to exit.');
