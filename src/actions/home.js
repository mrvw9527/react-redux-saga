export function inputForHome (input) {
  return{
    type: 'INPUT_FOR_HOME',
    input
  }
}

export function alterTitleFromSaga () {
  return {
    type: 'ALTER_TITLE_FROM_SAGA',
  }
}

export function alterTitleFromSagaCompletion (error, title) {
  return {
    type: 'ALTER_TITLE_FROM_SAGA_COMPLETION',
    error,
    title
  }
}