import React, { useState, useEffect } from 'react'
import axios from 'axios'

function useCustomHook(api) {
    const [data, setData] = useState([])
    useEffect(() => {
        axios(api)

            .then(data => setData(data))
            .catch()
    })
    return data;
}

export default useCustomHook;