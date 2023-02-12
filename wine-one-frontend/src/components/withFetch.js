/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function withFetch(fetchArgs) {
  return (Component) => class WithFetch extends React.Component {
    constructor(props) {
      super(props);

      this.state = { data: [] };
    }

    componentDidMount() {
      const { fetchUrl, fetchOptions } = typeof fetchArgs === 'function'
        ? fetchArgs(this.props)
        : fetchArgs;

      fetch(fetchUrl, { ...fetchOptions })
        .then((response) => response.json())
        .then((data) => this.setState({ data }));
    }

    render() {
      return <Component {...this.props} {...this.state} />;
    }
  };
}
export default withFetch;
