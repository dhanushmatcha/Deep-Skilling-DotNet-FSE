# Git Hands-On Lab

This project demonstrates the basic Git workflow, including configuring Git, creating a local repository, tracking files, committing changes, and pushing the repository to GitHub.

---

## Objectives

- Configure Git username and email
- Create and initialize a local Git repository
- Create and track files using Git
- Commit changes to the local repository
- Connect a local repository to GitHub
- Push the project to a remote repository

---

## Technologies Used

- Git
- Git Bash
- GitHub

---

## Project Structure

```
Git-HOL
│── README.md
│── welcome.txt
└── screenshots
    ├── Git-Commands-1.png
    └── Git-Commands-2.png
```

---

## Git Commands Used

### Check Git Version

```bash
git --version
```

### Configure Git

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
git config --global --list
```

### Create and Initialize Repository

```bash
mkdir GitDemo
cd GitDemo
git init
```

### Create a File

```bash
echo "Welcome to Git" > welcome.txt
```

### Verify the File

```bash
ls
cat welcome.txt
```

### Check Repository Status

```bash
git status
```

### Add File to Staging Area

```bash
git add welcome.txt
```

### Commit Changes

```bash
git commit -m "Initial commit"
```

### View Commit History

```bash
git log
```

### Connect Remote Repository

```bash
git remote add origin https://github.com/<your-username>/GitDemo.git
git remote -v
```

### Push to GitHub

```bash
git push -u origin master
```

---

## Output

- Successfully initialized a Git repository.
- Created and tracked `welcome.txt`.
- Committed changes to the local repository.
- Connected the local repository to GitHub.
- Successfully pushed the repository to GitHub.

---

## Screenshots

The `screenshots` folder contains the outputs of all major Git commands performed during this lab.

---

## Learning Outcomes

- Understanding Git fundamentals
- Working with local repositories
- Using the staging area
- Creating commits
- Managing remote repositories
- Pushing code to GitHub

---

## Author

**Dhanush Matcha**

B.Tech – Computer Science and Engineering

Vignan's Foundation for Science, Technology & Research

---

**Developed as part of the Cognizant Deep Skilling Program.**

