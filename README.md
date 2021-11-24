# Installation

## Clone the source

```console
git clone https://github.com/RMIT-FinTech-Club/ClubWeb.git
```

## Install dependencies

```console
npm install
```

## Start the server

```console
npm start
```

**Note:** The dev server is already enabled hot reload.

# How to contribute

## What to know

There are 3 main branches: master, develop and release

### Master

Master is the branch contains the most cleanest source.

### Develop

Develop is the branch for merging other feature-branches.

### Release

Release is the branch to run the production version and it is merged from the **develop** branch. **Develop** branch must be well tested before merge to the **release** branch

## Workflow

When ever you want to work on the new feature, fetch works from the **develop** branch then create a new branch from there

```console
git fetch

git checkout -t origin/develop

git checkout -b feature/<feature-name>
```

**Note:** Please follow the branch name convention

- feature/\<feature-name>: For developing a new particular feature
- hot-fix/\<bug-name>: For quick fix a bug in the system

After you finish on the new feature, push the code on the Github and create a Pull Request to **develop** branch

## Commit convention

We won't strictly checking commit message, however, try to provide a clean and meaningful message.

# Folder structure

| Folder name | Description                                          |
| ----------- | ---------------------------------------------------- |
| components  | Contains the resusable component. Example: header.js |
| js          | Contains javascript file for functions               |
| styles      | Contains css styling. Can be written in css or scss  |
| pages       | Contains html pages. Example: about-us.html          |
| assets      | Contains images,icons, sounds and fonts.             |

hello world