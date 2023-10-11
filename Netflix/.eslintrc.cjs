module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["airbnb", "prettier"],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "import/prefer-default-export": 0,
        "no-console": 0,
        "import/extensions": 0
    }
}
