const fetch = require("node-fetch");

const url = "https://api.github.com/users";

// Utility fn to fetch repo counts
const fetchPublicReposCount = async username => {
  const response = await fetch(`${url}/${username}`);
  const json = await response.json();
  console.log(json);

  console.log(json["public_repos"]);
};

fetchPublicReposCount("sbansal");
