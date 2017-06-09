import Immutable from 'seamless-immutable'
import {shuffle} from 'lodash'

// Action types
const START_BUCKET = 'START_BUCKET'
// const UPDATE_CURRENT_CARD = 'UPDATE_CURRENT_CARD'
// const UPDATE_CURRENT_BUCKET = 'UPDATE_CURRENT_BUCKET'
const SUCCESS = 'SUCCESS'
const FAIL = 'FAIL'
const RESET_STATE = 'RESET_STATE'

// Action creators
export function startBucket() {
  return {type: START_BUCKET}
}

export function success() {
  return {type: SUCCESS}
}

export function fail() {
  return {type: FAIL}
}

// Reducer
const cardImport = require('../Fixtures/cardData.json').cards
const [initialCard, ...initialBucket] = cardImport
const INITIAL_STATE = Immutable({
  cards: cardImport,
  currentCard: initialCard,
  currentBucket: initialBucket,
})

// TODO: move logic to actions/sagas
export function cards(state = INITIAL_STATE, action) {
  switch (action.type) {
  case START_BUCKET: {
    const newBucket = shuffle(state.cards)
    const [currentCard, ...currentBucket] = newBucket

    return {
      ...state,
      currentBucket,
      currentCard,
    }
  }
  case SUCCESS: {
    const [currentCard, ...currentBucket] = state.currentBucket

    // TODO: handle empty
    return {
      ...state,
      currentBucket,
      currentCard,
    }
  }
  case FAIL: {
    const [currentCard, ...currentBucket] = state.currentBucket

    // TODO: handle empty
    return {
      ...state,
      currentBucket: [...currentBucket, state.currentCard],
      currentCard,
    }
  }
  case RESET_STATE:
    return INITIAL_STATE
  default:
    return state
  }
}
