import React from 'react'

/**
 * There's no hook equivalent for functional components for an error
 * boundary yet.  It must be a class component
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: undefined
    }
  }

  componentDidCatch(error) {
    this.setState({ error: error.message })
  }

  render() {
    const { error } = this.state

    return (
      error
      ? <div className='error-boundary-message'>{error}</div>
      : <>{this.props.children}</>
    )
  }
}
