import Immutable from 'seamless-immutable'
import {shuffle} from 'lodash'

// Action types
const START_BUCKET = 'START_BUCKET'
const SUCCESS = 'SUCCESS'
const FAIL = 'FAIL'

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
const INITIAL_STATE = Immutable({
  cards: require('../Fixtures/cardData.json').cards,
  currentCard: {},
  currentBucket: [],
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

    return {
      ...state,
      currentBucket,
      currentCard,
    }
  }
  case FAIL: {
    const [currentCard, ...currentBucket] = state.currentBucket

    return {
      ...state,
      currentBucket: [...currentBucket, state.currentCard],
      currentCard,
    }
  }
  default:
    return state
  }
}
