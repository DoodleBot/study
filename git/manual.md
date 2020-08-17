# GIT

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
| `git remote update`                                  | Get new remote branches                       |
| `git remote prune origin`                            | Delist remote branches that have been removed |
| `git branch -a`                                      | List all branches (local and remote)          |
| `git branch [branch name]`                           | Create a new branch                           |
| `git branch -d [branch name]`                        | Delete a branch                               |
| `git push origin --delete [branch name]`             | Delete a remote branch                        |
| `git checkout -b [branch name]`                      | Create a new branch and switch to it          |
| `git checkout -b [branch name] origin/[branch name]` | Clone a remote branch and switch to it        |
| `git branch -m [old branch name] [new branch name]`  | Rename a local branch                         |
| `git checkout [branch name]`                         | Switch to a branch                            |
| `git checkout -`                                     | Switch to the branch last checked out         |
| `git checkout -- [file-name.txt]`                    | Discard changes to a file                     |
| `git merge [branch name]`                            | Merge a branch into the active branch         |
| `git merge [source branch] [target branch]`          | Merge a branch into a target branch           |
| `git stash`                                          | Stash changes in a dirty working directory    |
| `git stash clear`                                    | Remove all stashed entries                    |

### Sharing & Updating Projects

| Command                                                                           | Description                                                 |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `git push origin [branch name]`                                                   | Push a branch to your remote repository                     |
| `git push -u origin [branch name]`                                                | Push changes to remote repository (and remember the branch) |
| `git push`                                                                        | Push changes to remote repository (remembered branch)       |
| `git push origin --delete [branch name]`                                          | Delete a remote branch                                      |
| `git pull`                                                                        | Update local repository to the newest commit                |
| `git pull origin [branch name]`                                                   | Pull changes from remote repository                         |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git`     | Add a remote repository                                     |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Set a repository's origin branch to SSH                     |

### Inspection & Comparison

| Command                                    | Description                    |
| ------------------------------------------ | ------------------------------ |
| `git log`                                  | View changes                   |
| `git log --summary`                        | View changes (detailed)        |
| `git diff [source branch] [target branch]` | Preview changes before merging |

### Removing Files and Directories

| Command       | Description                        |
| ------------- | ---------------------------------- |
| git clean -f  | force delete untracked files       |
| git clean -fd | force delete untracked directories |

## SSH Key

### [Generate new SSH Key](https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

### [Add SSH Key to GitHub Account](https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account)
