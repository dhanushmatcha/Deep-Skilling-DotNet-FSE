# Git Hands-On Lab 3 - Branching and Merging

## Overview

This project demonstrates the implementation of Git branching and merging. It covers creating a new branch, making changes in the branch, committing those changes, merging the branch into the master branch, and deleting the branch after a successful merge.

---

## Objectives

- Understand Git branching
- Create and switch between branches
- Commit changes in a branch
- Merge a branch into the master branch
- View commit history using Git log
- Delete merged branches

---

## Technologies Used

- Git
- Git Bash
- GitHub

---

## Files

- `branch.txt`
- `README.md`

---

## Git Commands Used

### Create a New Branch

```bash
git branch GitNewBranch
```

### List Available Branches

```bash
git branch -a
```

### Switch to the New Branch

```bash
git checkout GitNewBranch
```

### Create a New File

```bash
echo "This file is created in GitNewBranch" > branch.txt
```

### Add and Commit Changes

```bash
git add branch.txt
git commit -m "Added branch.txt in GitNewBranch"
```

### Check Repository Status

```bash
git status
```

### Switch Back to Master

```bash
git checkout master
```

### Compare Branches

```bash
git diff master GitNewBranch
```

### Merge Branch

```bash
git merge GitNewBranch
```

### View Commit History

```bash
git log --oneline --graph --decorate
```

### Delete the Branch

```bash
git branch -d GitNewBranch
```

---

## Output

- Successfully created a new branch.
- Added a new file in the branch.
- Committed changes to the branch.
- Merged the branch into the master branch.
- Verified commit history using Git log.
- Deleted the merged branch successfully.

---

## Screenshots

The `screenshots` folder contains the outputs of:

- Branch creation
- Branch switching
- Commit and Git status
- Merge operation
- Git log
- Branch deletion

---

## Learning Outcomes

- Understanding Git branching workflow
- Working with multiple branches
- Merging branches
- Viewing commit history
- Managing branches effectively

---

## Author

**Dhanush Matcha**

B.Tech – Computer Science and Engineering

Vignan's Foundation for Science, Technology & Research

---

**Developed as part of the Cognizant Deep Skilling Program.**
