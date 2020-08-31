import React from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight'

const CodeExample = ({ children }) => (
    <Highlight className="js">
        {children}
    </Highlight>
)

CodeExample.propTypes = {
  children: PropTypes.string.isRequired
}

export default CodeExample;
