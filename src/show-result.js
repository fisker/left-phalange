import {writeSync as copyToClipboard} from 'clipboardy'

function showResult(result, {copy = false} = {}) {
  if (copy) {
    copyToClipboard(result)
  } else {
    console.log(result)
  }
}

export default showResult
