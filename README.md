![CodeQL](https://github.com/emrecosar/portfolio/workflows/CodeQL/badge.svg) ![Build and Deploy](https://github.com/emrecosar/portfolio/actions/workflows/deploy-gh-pages.yml/badge.svg)

# Emre Cosar Portfolio

This repository holds and serves the source code of [emrecosar.com](https://emrecosar.com).
Content is publicly available and hosted in GitHub.
Domain is owned by the owner.
DNS and networking configurations are controlled by CloudFlare.

## How to code, run and deploy?

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Prerequisite

* `node v20`
  * Better to use it with `nvm`
* `git`

### How to run?

* `git clone git@github.com:emrecosar/portfolio.git`
* `npm install` to install dependencies
* `npm start` -> to run locally

### How to build and deploy?

* `npm run build` to build the production ready bundle
* `npm run deploy` to deploy to your github pages directly (configure package.json's homepage attribute and SEO/DNS related URLs)
OR
* deploy the application to the website via manually triggered [github action](https://github.com/emrecosar/portfolio/actions)

### First Impression From
<a href="https://github.com/tbakerx/react-resume-template">Tim Baker's react template project</a>
