'use strict'

const store = {
  successTimeout: 1500,
  failureTimeout: 3000,
  successMessageColor: () => {
    $('.modal-title').addClass('modal-title-green')
  },
  errorMessageColor: () => {
    $('.modal-title').addClass('modal-title-red')
  },
  defaultMessageColor: () => {
    $('.modal-title').removeClass('modal-title-green').removeClass('modal-title-red')
  }
}

module.exports = store
