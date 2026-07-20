# Git Hands-On Lab 4 - Merge Conflict Resolution

## Overview

This project demonstrates how to resolve merge conflicts in Git when multiple branches modify the same file. The exercise includes creating a new branch, making different changes in both the master and branch, resolving the merge conflict, and updating the `.gitignore` file.

---

## Objectives

- Understand merge conflicts in Git
- Create and switch between branches
- Modify the same file in different branches
- Resolve merge conflicts manually
- Update the `.gitignore` file
- Delete merged branches

---

## Technologies Used

- Git
- Git Bash
- GitHub

---

## Files

- `hello.xml`
- `.gitignore`
- `README.md`

---

## Git Commands Used

### Verify Repository Status

```bash
git status
```

### Create a New Branch

```bash
git branch GitWork
git checkout GitWork
```

### Create and Commit a File

```bash
echo "<message>Hello from GitWork Branch</message>" > hello.xml

git add hello.xml
git commit -m "Added hello.xml in GitWork"
```

### Switch to Master

```bash
git checkout master
```

### Create a Different Version of the File

```bash
echo "<message>Hello from Master Branch</message>" > hello.xml

git add hello.xml
git commit -m "Added hello.xml in master"
```

### Compare Branches

```bash
git diff master GitWork
```

### Merge the Branch

```bash
git merge GitWork
```

### Resolve Merge Conflict

Edit `hello.xml`, remove the conflict markers, save the file, and then execute:

```bash
git add hello.xml
git commit -m "Resolved merge conflict in hello.xml"
```

### Update .gitignore

Add the following entry:

```text
*.bak
```

Commit the changes:

```bash
git add .gitignore
git commit -m "Updated .gitignore to ignore backup files"
```

### Delete the Branch

```bash
git branch -d GitWork
```

### View Commit History

```bash
git log --oneline --graph --decorate
```

### Push Changes

```bash
git push origin master
```

---

## Output

- Successfully created a feature branch.
- Modified the same file in both branches.
- Generated a merge conflict.
- Resolved the conflict manually.
- Updated the `.gitignore` file.
- Deleted the merged branch.
- Successfully pushed the changes to GitHub.

---

## Screenshots

The `screenshots` folder contains:

- Repository status and branch creation
- Merge conflict generation
- Conflict resolution
- Updated `.gitignore`
- Branch deletion
- Final commit history

---

## Learning Outcomes

- Understanding Git merge conflicts
- Manual conflict resolution
- Working with multiple branches
- Managing `.gitignore`
- Maintaining repository history

---

## Author

**Dhanush Matcha**

B.Tech – Computer Science and Engineering

Vignan's Foundation for Science, Technology & Research

---

**Developed as part of the Cognizant Deep Skilling Program.**
