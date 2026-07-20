# Git Hands-On Lab 2 - Git Ignore

## Overview

This exercise demonstrates how to use the `.gitignore` file to exclude unwanted files and folders from being tracked by Git.

## Objectives

- Understand the purpose of `.gitignore`
- Ignore files with the `.log` extension
- Ignore the `log` directory
- Verify ignored files using `git status`

## Technologies Used

- Git
- Git Bash
- GitHub

## Files

- `.gitignore`
- `error.log`
- `log/`
- `welcome.txt`

## Steps Performed

1. Created a `.log` file.
2. Created a `log` folder.
3. Created a `.gitignore` file.
4. Added the following rules:

```text
*.log
log/
```

5. Verified that ignored files were not displayed in `git status`.
6. Committed the `.gitignore` file.
7. Pushed the changes to GitHub.

## Learning Outcomes

- Working with `.gitignore`
- Ignoring unwanted files
- Managing repository cleanliness
- Understanding Git tracking behavior

## Author

**Dhanush Matcha**

B.Tech – Computer Science and Engineering

Vignan's Foundation for Science, Technology & Research

---

Developed as part of the Cognizant Deep Skilling Program.
