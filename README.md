# Web Components Presentation

## Contents

- [Web Components Presentation](#web-components-presentation)
  - [Contents](#contents)
  - [Reference](#reference)
  - [Getting Started](#getting-started)
  - [Build & Deployment](#build--deployment)

## Reference

The Spectacle core API is available at [https://github.com/FormidableLabs/spectacle/blob/master/README.md](https://github.com/FormidableLabs/spectacle/blob/master/README.md).

## Getting Started

After downloading the boilerplate, your first order of business is to open a terminal and run

```bash
yarn
```

if you're about that life.

Next, run
```bash
rm -R .git
```
to remove the existing version control.

Then, to start up the local server, run
```bash
yarn start
```

Open a browser and hit [http://localhost:3000](http://localhost:3000), and we are ready to roll.

## Build & Deployment

Building the dist version of the project is as easy as running
```bash
yarn build
```

If you want to deploy the slideshow to surge, run
```bash
yarn deploy
```
