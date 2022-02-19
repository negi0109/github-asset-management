import { Octokit } from "octokit";

var octokit;
var logined = false;

export function login(token) {
  if (token == null) return;

  octokit = new Octokit({ auth: token });
}

export function getOctokit() {
  return octokit;
}


export async function saveSetting(
  owner, repo, branch, setting, currentCommitId, commitMessage,
  onSucceed, onFailed
){
  const args = {
    owner, repo, branch,
    setting, currentCommitId,
    onSucceed, onFailed,
    octokit: getOctokit(),
  }
  try {
    console.log(args)

    const parent = await octokit.rest.git.getCommit({
      owner,
      repo,
      commit_sha: currentCommitId,
    })
    const content = Buffer.from(JSON.stringify(setting, null, setting.stringifyFormat)).toString('base64')
    const blob = await octokit.rest.git.createBlob({
      owner,
      repo,
      content,
      encoding: "base64",
    })
    const tree = await octokit.rest.git.createTree({
      owner,
      repo,
      tree: [{
        path:".asset-management.json",
        mode: "100644",
        type: "blob",
        sha: blob.data.sha,
      }],
      base_tree: parent.data.tree.sha
    });
    const commit = await octokit.rest.git.createCommit({
      owner,
      repo,
      message: commitMessage,
      tree: tree.data.sha,
      parents: [parent.data.sha],
      author: {
        name: "github-bot",
        email: "github-bot@users.noreply.github.com",
      }
    })
    const ref = await octokit.rest.git.updateRef({
      owner,
      repo,
      ref: `heads/${branch}`,
      sha: commit.data.sha,
    })

    onSucceed(commit.data.sha)
  } catch(e) {

    onFailed(e.message)
  }
}

export async function getUser() {
  var user = await octokit.rest.users.getAuthenticated()
  var repos = await octokit.rest.repos.listForAuthenticatedUser({ sort: "updated" })

  return {
    repos: repos,
    user: user,
  };
}

export async function getRepository(user, repo) {
  var result = await octokit.rest.repos.get({
    owner: user,
    repo: repo,
  })

  return result.data
}

export async function getRef(user, repo, ref) {
  var result = await octokit.rest.git.getRef({
    owner: user,
    repo: repo,
    ref: ref,
  })

  return result.data
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
