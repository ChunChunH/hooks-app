import React, { useMemo, useState } from 'react'
import procesoPesado from '../../helpers/procesoPesado';
import useCounter from '../../hooks/useCounter'
import "../useEffect/effects.css"

function MemoHook() {

    const {counter, increment} = useCounter(500)
    const [show, setShow] = useState(true);

    
     const memoProcesoPesado = useMemo(() => {
        procesoPesado(counter)
    }, [counter])

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter <small>{counter}</small>  </h3>
            <hr/>

            <p>{memoProcesoPesado}</p>

            <button
                onClick={increment}
                className="btn btn-primary"
            >
                +1
            </button>
            
            <button
                className="btn btn-outline-primary ml-3"
                onClick={() => {
                    setShow(!show)
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>

        </div>
    )
}

export default MemoHook
