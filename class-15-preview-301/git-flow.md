# Project Week Git Flow

## Set up
1. Create a GitHub organization.
    1. Add all team members to it.
    1. Give everyone an `owner` role so they have access to all repos.
1. Create a repo in your organization for your project.
1. One person should clone it down and set up the base files for your project:
    - `README.md`
    - `.eslintrc.json`
    - `.gitignore`
    - `index.html`
1. A-C-P the starting files to master and push to your remote repo.
1. Everyone else will clone down the repo.

## Work flow
1. Before you write/delete/change any code, make sure you are not on master. Checkout a new branch if you need to.
1. Do your work on that branch until the feature you're working on is complete. 
1. Add and commit as needed.
1. BEFORE PUSHING - update your branch with any updates on your remote master:
    - switch to `master`
    - `git pull origin master`
    - switch to your branch
    - `git merge master`
    - `git push origin <branch-name>`
1. Make a PR to master.
    1. At least one other person should look at your PR before you merge it.
    1. Merge the PR.
    1. Tell everyone to update their master.
1. Repeat!

## Important Things
1. **Do not** fork your repo. Everyone should have collaborator access.
1. **Do** work in a branch!
1. Whenever a PR is accepted into master, **everyone** should update their local master branch and the feature branch they're working on (when they're at a good point).
1. Keep PR's relatively small so that when you do get merge conflicts they are quick to sort through instead of across 10 files.
