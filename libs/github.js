import { Octokit } from "octokit";

var octokit;
var logined = false;

export async function login(token) {
    if (token == null) return;

    octokit = new Octokit({ auth: token });
    var user = await octokit.rest.users.getAuthenticated()
    var repos = await octokit.rest.repos.listForAuthenticatedUser({ sort: "updated" })

    return {
        repos: repos.data,
        user: user
    };
}

export function isLogined() {
    return logined;
}
