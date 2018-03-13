import { createStore } from "redux"
import { connect } from "react-redux"

const UserContainer = ({
  children,
  render = children,
  ...props
}) => render(props)

const mapStateToProps = props => props

const mapDispatchToProps = dispatch => ({
  updateUser: key => value =>
    dispatch({
      type: `UPDATE_USER`,
      value: { [key]: value }
    })
})

export const ConnectedUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer)

const reducer = (state, { value, type }) =>
  type === `UPDATE_USER`
    ? { ...state, ...value }
    : state

const initialState = { user: "Al" }

export default () =>
  createStore(reducer, initialState)
