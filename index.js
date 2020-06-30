const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
    try {
      const token = core.getInput("repo-token");
      const octokit = new github.GitHub(token);
  
      const newIssue = await octokit.issues.create({
          repo: github.context.repo.repo,
          owner: github.context.repo.owner,
          title: "test-action-issues",
          body: "12345678",
      });
    } catch (err) {
      core.setFailed(err.message);
    }
  }
  
  run()