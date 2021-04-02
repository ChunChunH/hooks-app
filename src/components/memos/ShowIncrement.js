import React from 'react'

const ShowIncrement = React.memo(({increment}) => {
    return (
        <button
            className="btn btn-primary"
            onClick= {() => {
                increment(5);
            }}
        >
            Incrementar
        </button>
    )
})

export default ShowIncrement
