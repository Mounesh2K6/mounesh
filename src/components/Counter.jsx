import { useState } from "react"
function Counter(){
    const [count,setCount] = useState(0)
    return(
        <>
        <div classNmae="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <h3>Mounesh</h3>
        </div>
        </>
    )
}
export default Counter