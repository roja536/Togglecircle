import React, { useState } from "react";


const Higher = (OriginalComp, incrementnum) => {
    const NewComponent = () => {
        const [count, setCount] = useState(0);
        const Increment = () => {
            setCount(count + incrementnum);
        }
        return (<OriginalComp count={count} Increment={Increment} />)
    }
    return NewComponent;
}
export default Higher;