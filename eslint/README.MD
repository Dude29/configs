As of the last time this repo was updated ESLint does not support working with ESM (`import/export`) and only supports CommonJS (`require()`) syntax

As a result if you use a package.json with the `"type":"module"` directive all files at it's level and underneath are automatically considered by `node` to be in ESM which cause any other module that imports them via `require()` to throw an error

To fix this you can remove the `"type":"module"` from the package.json or if that's not an option then you can rename the config file to have the `.cjs` extension, indicating to `node` that that file is to be considered written in CommonJS

In addition this config file depends on a plugin for prettier which can be installed by running:

```sh
npm install --D eslint-config-prettier
```

An example of a package.json with the relevant parts is provided
