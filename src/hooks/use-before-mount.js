import { useRef } from 'react'

export default (func) => {
    const willMount = useRef(true)

    if (willMount.current) func()

    willMount.current = false
}
