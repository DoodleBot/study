# GIT

## Basic Terminal Bash Commands

| Command                                                           | Description                                    |
| ----------------------------------------------------------------- | ---------------------------------------------- |
| `cd [path]`                                          | change directory                                            |
| `ls [path]`                                          | list contents of directory                                  |
| `ls -a [path]`                                       | list all contents of directory, including hidden files      |
| `pwd [path]`                                         | print working directory                                     |
| `open [path]`                                        | opens the mac finder for location provided                  |
| `touch [path][filename.ext]`                         | create file                                                 |
| `mkdir [folder name]`                                 | create directory                                            |
| `rm [path][filename.ext]`                            | remove/delete file (doesn't go to trash)                    |
| `rm -rf [path][folder name]`                          | remove/delete folder (uses two flags. "r" = recursive; "f" = force) |
| `cat [file name]`                                                | without flags, prints the contents of the file  |

## Basic Terminal Shell Tools

| Command                         | Description                                    |
| ------------------------------- | ---------------------------------------------- |
| `command + l`                   | clear previous mark                            |
| `command + control + l`         | clear screen                                   |

## Git Terminology

| Term                            | Description                                    |
| ------------------------------- | ---------------------------------------------- |
| `HEAD`                          | Where you are currently in the git structure. Think of it as a tape deck head |
| ``         |                                   |

### HEAD

the .git directory contains a HEAD file, which refs a file in the refs/heads/ directory. This represents the current location of the HEAD. Each  file in refs/heads/ stores the commit hash for each HEAD location of each branch (example: refs/heads/[branch name]).

When the HEAD is pointing to the tip of a branch, the HEAD value will be a ref pointing to that branch. If the HEAD is pointing to a specific commit, it will use the commit hash instead. This is called a "Detached HEAD"

Reflogs, or ref logs, log the changes in the HEAD value. Reflogs are only local and expire (90 day default).

## Git Basics

| Command                                             | Description                                    |
| --------------------------------------------------- | ---------------------------------------------- |
| `git init`                                          | initializes git repository (creates .git folder) or reinitilizes and existing one |
| `git status`                                        | prints current state of the git repo           |
| `git add`                                           | add changed files to a staging area            |
| `git add [path]`                                    | commits group of files                         |
| `git commit`                                        | commit changes in the staging area to .git (will open editor for message)     |
| `git commit -m`                                     | commits plus providing a message               |
| `git commit --amend`                                | commits staged files to last commit, and/or edit the commit message |
| `git log`                                           | prints each commit w/ hash, author, date, and message               |
| `git log --oneline`                                 | shorthand for `--pretty=oneline --abbrev-commit               |

## Sources

[Git-Commands](https://github.com/joshnh/Git-Commands)

## Branch process

### Create a branch and push to remote repo

!!! make sure you're in the branch that you want the new branch to begin from

`git checkout -b [branch name]` or `git branch [branch name]`

`git push origin [branch name]`

### First push to remote repo

`git push --set-upstream origin [branch name]`

### Pull Request

!!! make sure base is current release and not master

request approval from peers ideally before merging

### Update branch list from remote repo

`git remote update`

`git remote prune origin`

`git branch -a`

### Delete local and remote repo branch

`git push origin --delete [branch name]`

`git branch -d [branch name]`

### Getting & Creating Projects

| Command                                                           | Description                                |
| ----------------------------------------------------------------- | ------------------------------------------ |
| `git init`                                                        | Initialize a local Git repository          |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Create a local copy of a remote repository |

### Basic Snapshotting

| Command                            | Description                                       |
| ---------------------------------- | ------------------------------------------------- |
| `git status`                       | Check status                                      |
| `git add [file-name.txt]`          | Add a file to the staging area                    |
| `git add -A`                       | Add all new and changed files to the staging area |
| `git commit -m "[commit message]"` | Commit changes                                    |
| `git rm -r [file-name.txt]`        | Remove a file (or folder)                         |

### Branching & Merging

| Command                                              | Description                                   |
| ---------------------------------------------------- | --------------------------------------------- |
| `git branch`                                         | List branches                                 |
| `git branch -a`                                      | List all branches (local and remote)          |
| `git branch [branch name]`                           | Create a new branch at HEAD                   |
| `git branch -d [branch name]`                        | Delete a branch (must be merged)              |
| `git branch -D [branch name]`                        | Force delete a branch                         |
| `git branch -m [new branch name]`                    | Move branch at HEAD. Rename a local branch    |
| `git branch -m [old branch name] [new branch name]`  | Move branch. Rename a local branch            |
| `git switch [branch name]`                           | Switch HEAD to named branch (will auto sync with remote branch of same name) |
| `git checkout [branch name | tag name]`              | Switch HEAD to named branch                                                  |
| `git switch -c [branch name]`                        | Create a new branch at HEAD and switch to it  |
| `git switch -`                                       | Switch to last branch used                    |
| `git checkout -b [branch name]`                      | Create a new branch at HEAD and switch to it  |
| `git checkout -b [branch name] origin/[branch name]` | Clone a remote branch and switch to it        |
| `git checkout -`                                     | Switch to the branch last checked out         |
| `git checkout -- [file-name.txt]`                    | Discard changes to a file                     |
| `git remote update`                                  | Get new remote branches                       |
| `git remote prune origin`                            | Delist remote branches that have been removed |
| `git push origin --delete [branch name]`             | Delete a remote branch                        |
| `git merge [branch name]`                            | Merge a branch into the active branch         |
| `git merge [source branch] [target branch]`          | Merge a branch into a target branch           |
| `git stash`                                          | Stash changes in a dirty working directory    |
| `git stash clear`                                    | Remove all stashed entries                    |

### Fast Forward Merge

Where one branch "catches up" to another branch. Doesn't create a new commit. Switch to the branch that needs to catch up and merge to the destination branch. This does not destroy the merged branch.

What distinquishes this from other types of merges is that the branch catching up hasn't made additional commits since the branching occurred.

### Merge Commit

This occures when both branch have made changes since diverging. This creates a merge commit sourced from both branches.

### Merge Conflicts

If a merge causes merge conflicts, the merge will not occur and files will be marked up with comments highlighting the conflicting versions. You must manually correct the markers describing the conflicts, stage the changes, and commit to complete the merge.

```
<<<<<< < HEAD
changes from HEAD
=======
changes from merged branch
>>>>>>> [name of branch]
```

### Sharing & Updating Projects

| Command                                                                           | Description                                                            |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `git push origin [branch name]`                                                   | Push a branch to your remote repository                                |
| `git push -u origin [branch name]`                                                | Push changes to remote repository (and remember the upstream branch)   |
| `git push`                                                                        | Push changes to remote repository (remembered branch)                  |
| `git push origin --delete [branch name]`                                          | Delete a remote branch                                                 |
| `git pull`                                                                        | Update local repository and working directory to the newest commit     |
| `git pull origin [branch name]`                                                   | Same, but with specific branch                                         |
| `git fetch`                                                                       | Update local repository with the newest commit (just origin/)          |
| `git fetch origin [branch name]`                                                  | Same, but with specific branch                                         |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git`     | Add a remote repository                                                |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Set a repository's origin branch to SSH                                |

### Inspection & Comparison

| Command                                     | Description                    |
| ------------------------------------------- | ------------------------------ |
| `git log`                                   | View changes                   |
| `git log --summary`                         | View changes (detailed)        |
| `git diff`                                  | Working directory vs staging   |
| `git diff HEAD`                             | Working directory vs HEAD      |
| `git diff --staged`                         | staging vs last commit         |
| `git diff [filename.ext]`                   | compare just a single file     |
| `git diff [source branch] [target branch]`  | Preview changes before merging |
| `git diff [source branch]..[target branch]` | Preview changes before merging |
| `git diff [commit hash a]..[commit hash b]` | compare between commit hashes  |

### Removing Files and Directories

| Command       | Description                        |
| ------------- | ---------------------------------- |
| git clean -f  | force delete untracked files       |
| git clean -fd | force delete untracked directories |

### Stashing

| Command                            | Description                                                                  |
| ---------------------------------- | ---------------------------------------------------------------------------- |
| `git stash`                        | stashes working directory and staging area                                   |
| `git stash pop`                    | add changes in the stash back to the working directory and staging area      |
| `git stash apply`                  | Same as pop, but it keeps the changes in the stash                           |
| `git stash apply stash@{2}`        | Applies a particular instance in the stash                                   |
| `git stash list`                   | List of all stashes made that are still in the queue                         |
| `git stash drop stash@{2}`         | Removes a particular instance in the stash                                   |
| `git stash clear`                  | Removes all instances in the stash                                           |

## Rebasing

| Command                            | Description                                                                  |
| ---------------------------------- | ---------------------------------------------------------------------------- |
| `git rebase [base branch]`         | generates new commits for the rebased branch onto the tip of the base branch |
| `git rebase --abort`               | cancel a rebase that has merge conflicts                                     |
| `git rebase --continue`            | restart a rebase after resolving merge conflicts                             |
| `git rebase --skip`                | skip a commit during rebase                                                  |

Rebasing can be done after mergers have already happened. Rebasing will remove the merge commits and generate new commits for the rebased branch (new commit hashes). Basically can be a feature branch back in the state that a fast forward merge could be accomplished.

WARNING – Do not rebase commits that others are using. Since commits are regenerated, there is no reference to the older commits and there is no way to sync them up again. So never rebase main.

To resolve conflicts, fix them manually, as you would with merge conflicts. Then, mark them as resolved with `git add/rm [conflicted files]`, then run `git rebase --continue`

## Tagging

| Command                            | Description                                                                    |
| ---------------------------------- | ------------------------------------------------------------------------------ |
| `git tag`                          | List of all tagged commits                                                     |
| `git tag -l "*beta*"`              | List of all tagged commits using filter criteria (using glob pattern)          |
| `git tag [tag name]`               | Create lightweight tag on HEAD                                                 |
| `git tag -a [tag b=name]`          | Create annotated tag on HEAD                                                   |
| `git tag [tag name] [commit hash]` | Create tag on specified commit                                                 |
| `git tag -f [tag name]`            | Force tag name. Useful if another commit has the tag already. It will reassign |
| `git tag -d [tag name]`            | Delete tag                                                                     |
| `git push --tags`                  | Pushes new tags created in local to remote repo                                |
| `git push origin [tag name]`       | Pushes a new tag created in local to remote repo                               |

Tags can be used in place of commits or branches in a lot of commands to target a commit.

There are two kinds of tags: Lightweight and annotated tags

### Undoing

| Command                                | Description                                                                                       |
| -------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `git checkout HEAD~1`                  | Detach head to one commit prior from the current HEAD position                                    |
| `git checkout HEAD dog.txt`            | Revert the changes at head for a particular file                                                  |
| `git checkout -- dog.txt`              | Revert the changes at head for a particular file                                                  |
| `git restore dog.txt`                  | Revert the changes at head for a particular file                                                  |
| `git restore --source HEAD~2 app.js`   | Revert the changes to a commit relative to HEAD for a particular file                             |
| `git restore --staged app.js`          | unstage a file                                                                                    |
| `git reset [commitHash]`               | Reverts back to specified commit, removing commits in between. Changes are in working directory   |
| `git reset --hard HEAD~1`              | Reverts back to specified commit, removing commits AND changes in between.                        |
| `git revert [commitHash]`              | Reverts back to specified commit, making a new commit.                                            |

## SSH Key

### [Generate new SSH Key](https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

### [Add SSH Key to GitHub Account](https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account)
