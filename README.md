# Core Commerce Vue Components

## Node Version

This application needs [Node 16](https://nodejs.org/ko/blog/release/v16.13.0/) in order to run properly.

---

## Installation

### GitHub Personal Access Token

In order to install all necessary packages related to the Admin Backoffice you need to create a [GitHub Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) enabling the option **admin:org** before installing any package.

Then you need to export this token as an enviroment variable:

```sh
$ echo -e 'export COMPONENTS_TOKEN="YOUR_GITHUB_TOKEN"' >> ~/.bashrc | source ~/.bashrc
```

This will push this line above into your **.bashrc** file exporting the token to your enviroment variable list and refresh your bash.

> For Windows users, just add the COMPONENTS_TOKEN in your variables and it will work fine with the chosen terminal. You can read more abould Windows Enviroment variables [here](https://docs.microsoft.com/en-us/windows/win32/shell/user-environment-variables?redirectedfrom=MSDN).

### Simply install Vue-components in your app

```sh
$ npm install --save @facily-tech/vue-components
```

---

## Development mode

First of all, you need to clone the repository and install all packages dependencies:

```sh
$ git clone git@github.com:facily-tech/vue-components.git
$ npm install
```

### Yalc for local publishin

This will install yalc globally to link and auto update the Vue Components into your application.

```sh
npm install -g yalc
```

### Link the local repository with Yalc

Locally puclish the package to Yalc symbolic link

```sh
$ yalc publish
```

In the root of your application using Vue Components change the link of the package:

```sh
$ yalc add @facily-tech/vue-components
```

### Running and hot reloading for development

This will watch all changes made in the components while publishing them to all linked repositories. Run in the root folder of Vue Components.

```sh
$ npm run watch
```

### Remove the local link from your application after commiting your changes

```sh
$ yalc remove @facily-tech/vue-components
```

---

## Auto generate release and Changelog

When run, this command line interface automatically generates a new GitHub Release and populates it with the changes (commits) made since the last release.

```sh
npm run release
```

---

## Commit with pattern

If it is the first use, it's recommended that you install Commitzen globally

```sh
npm i -g commitizen
```

Then just run the Commitzen Git cli, husky is in the project and will be responsible for the acceptable lint format on your commit.

```sh
npm run commit
## or
git cz
```

---

## Publish to Git Hub packages

After the commit you can build the package with all changes [here](https://github.com/facily-tech/vue-components/actions)
