workflow "New workflow" {
  on = "pull_request"
  resolves = ["Bundle Size"]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install"
}

action "Test" {
  needs = ["Install"]
  uses = "actions/npm@master"
  args = "run test"
}

action "Build" {
  needs = ["Test"]
  uses = "actions/npm@master"
  args = "run build"
}
