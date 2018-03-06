module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
		"meteor":true,
		"mongo":true,
		"mocha":true,
		"node":true,
        "es6": true
    },
	"globals": {
        "wrapper": true,
        "spy": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent" : 2,
        "react/forbid-prop-types" : "off",
        "no-trailing-spaces" : "off",
        "allowTemplateLiterals": true,
        "react/require-default-props" : "off",
    }
};