class FluentSwitch {
  constructor (object) {
    this.object = object
    this.actions = []
    this.fallback = null
  }

  static createFrom (object) {
    return new FluentSwitch(object)
  }

  case (conditionFn, actionFn) {
    this.actions.push([conditionFn, actionFn])
    return this
  }

  else (actionFn) {
    this.fallback = actionFn
    return this
  }

  execute () {
    for (const item of this.actions) {
      const [conditionFn, actionFn] = item
      if (conditionFn(this.object)) return actionFn(this.object)
    }

    return this.fallback
      ? this.fallback(this.object)
      : undefined
  }
}

module.exports = FluentSwitch
