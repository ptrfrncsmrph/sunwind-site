import { createStore as reduxCreateStore } from "redux"

const reducer = (state, { value, type }) =>
  type === `UPDATE_USER`
    ? { ...state, ...value }
    : state

const initialState = { user: "Al" }

const createStore = () =>
  reduxCreateStore(reducer, initialState)
export default createStore
