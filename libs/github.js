import { Octokit } from "octokit";

var octokit;
var logined = false;

export async function login(token) {
  if (token == null) return;

  octokit = new Octokit({ auth: token });
  var user = await octokit.rest.users.getAuthenticated()
  var repos = await octokit.rest.repos.listForAuthenticatedUser({ sort: "updated" })

  return {
    repos: repos,
    user: user,
  };
}

export function isLogined() {
  return logined;
}

export async function getFile(user, repo, path) {
  const file = await octokit.rest.repos.getContent({
    owner: user,
    repo: repo,
    path: path
  })

  return file.data;
}

export function getBlobCache(user, repo, sha, blobs, afterGetBlob) {
  if (sha == null) return null
  else if (blobs[sha] === undefined) {
    (async () => {
      blobs[sha] = null;
      const blob = await getBlob(user, repo, sha)
      blobs[sha] = blob
      afterGetBlob()
    })()
  } else {
    return blobs[sha]
  }
}

export async function getBlob(user, repo, sha) {
  const blob = await octokit.rest.git.getBlob({
    owner: user,
    repo: repo,
    file_sha: sha
  })

  return blob;
}

export async function getFiles(user, repo, path) {
  const files = await octokit.rest.repos.getContent({
    owner: user,
    repo: repo,
    path: path
  })

  return files;
}
