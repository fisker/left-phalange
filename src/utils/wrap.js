import identify from './identify'

function wrap(func, wrapper = identify) {
  return function wrapped(...arguments_) {
    return wrapper(func(...arguments_))
  }
}

export default wrap
