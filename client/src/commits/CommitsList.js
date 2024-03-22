import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure you have axios installed: npm install axios

const CommitsList = () => {
  const [commits, setCommits] = useState([]);
  const username = 'YourGitHubUsername'; // Replace 'YourGitHubUsername' with your actual GitHub username

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/YashDave7/Devignite/commits?author=${username}`);
        setCommits(response.data);
      } catch (error) {
        console.error('Error fetching commits:', error);
      }
    };

    fetchCommits();
  }, [username]);

  return (
    <div>
      <h2>Your Commits</h2>
      <ul>
        {commits.map(commit => (
          <li key={commit.sha}>
            <strong>{commit.commit.author.name}</strong>: {commit.commit.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommitsList;
