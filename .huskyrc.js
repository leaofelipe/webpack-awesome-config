const tasks = arr => arr.join(' && ')

module.exports = {
  "hooks": {
    "pre-commit": tasks([
      "npm run format",
      "git add .",
      "npm run lint"
    ])
  }
}