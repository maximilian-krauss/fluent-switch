workflow "New workflow" {
  on = "push"
  resolves = ["test"]
}

action "install" {
  uses = "actions/npm@c555744"
  runs = "npm"
  args = "install"
}

action "test" {
  uses = "actions/npm@c555744"
  needs = ["install"]
  runs = "npm"
  args = "test"
}
