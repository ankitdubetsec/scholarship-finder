const axios = require('axios');

// Replace these values with your actual ones
const owner = 'ankitdubetsec';
const repo = 'cnslab';
const accessToken = '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';

axios.get(`https://api.github.com/repos/${owner}/${repo}/commits`, {
  headers: {
    Authorization: `token ${accessToken}`
  }
})
.then(response => {
  console.log(response.data); // Handle the response data here
})
.catch(error => {
  console.error('Error fetching commits:', error);
});
