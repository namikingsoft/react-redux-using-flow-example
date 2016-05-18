module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react",
    "flow-vars",
  ],
  "rules": {
    "semi": [2, "never"],
    "quotes": [2, "double"],
    "no-console": 0,
    "no-underscore-dangle": 0,
    "space-before-function-paren": 0,
    "react/prefer-stateless-function": 0,
    "flow-vars/define-flow-type": 1,
    "flow-vars/use-flow-type": 1,
  },
  "env": {
    "browser": true,
    "es6": true,
    "mocha": true,
    "node": true,
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": [
          "node_modules",
          "src",
        ],
      },
    },
  },
};
