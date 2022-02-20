import React from 'react'
import PropTypes from 'prop-types'

import './Row.css'

const Row = ({left, right}) => {
    return (
        <div className='row my-1'>
            <div className='col-md-6 my-1'>
                {left}
            </div>
            <div className='col-md-6 my-1'>
                {right}
            </div>

        </div>
    )
}

Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
}

export default Row