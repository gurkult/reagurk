# Contributing

## Getting Started

This document will outline how to contribute both for collaborators (those with write access to this repo) and non-collaborators (anyone who does not have write access to this repo).

## Non-Collaborator

If you do not have write access, the first thing you will do is `fork` this repo so you have your own copy to work from.

## Everyone

You will first clone the repo to your computer. (If you are not a collaborator, you will clone your fork). The `develop` branch is the most up to date and it is where we make changes.

## Deciding How To Contribute

When you wish to contribute you should either claim the issue you wish to work on or create a new issue for what you wish to add. You can wait for the issue to be approved, or you can begin working on it right away. If you choose not to wait, then you take the risk that your issue may be rejected.

### Design

When adding features to the website, always follow the theme we have in place. If you are unsure how something should look, refer to the pinned messages for this repo's dev channel in Discord, or look at the wiki (coming soon™️) for examples.

## Contributing

### Creating A Feature Branch

Once you are in your local repo, use `git checkout develop`, then `git checkout -b your_branch_name` to create a new branch based off of the `develop` branch **This is very important, pull requests to main will be rejected**.

The convention we use for naming is the type of change being made, followed by a short and descriptive name for the change. I.e if I am adding a new feature to create a footer for the website, I would do `git checkout -b feature/footer`. If you were fixing a bug with a home page's title, you could do `fix/home-title` or maybe `bugfix/home-title`.

### Developing

To work on this project, you'll need to have [Node.js](https://nodejs.org/) installed.

To install all the required dependencies, run `npm install`. Then, you can run `npm run start` to start the React development server on http://localhost:3000.

### Committing

You should commit as often as is reasonable to make changes readable and logical. Pushing is not necessary on every commit. For small changes in a larger pool of changes, it is acceptable to write brief commit messages such as `change h1 to h3 in footer`, however it is important to have a good commit message for your pull request. Major changes should have full commit messages.

An example of a good commit message is as follows:

```
>git commit -m "feature/add blog page
>
>I have added a new webpage for the blog. It was also necessary to add react-router-dom to handle the routing for adding additional webpages. This change is to prepare for the upcoming blog feature on the backend."
```

_Note: you should run `git status` often to ensure you do not add or commit any files you did not intent to._

### Creating A Pull Request

Once you are finished with your changes, you should open a PR to this repo. Always create your PR to this repo's devlop branch. PRs to main will be **rejected**.

Once your PR is open, it will be reviewed and changes may be requested. If changes are requested from one of the owners or collaborators, you will be expected to make these changes. You are free to discuss why or why not you would like to make these changes in the comments for the PR.

Make sure that all checks pass, if there are any failing checks your PR will not be approved.
