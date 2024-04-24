
import React, { useState } from 'react'
import './CalculatorApp.css'

function CalculatorApp() {
    const [value, setValue] = useState([])

    const HandleClick = () => {
        setValue('')
    }

    const HandleClick1 = () => {
        setValue(pre => pre + 1)
    }

    const HandleClick2 = () => {
        setValue(pre => pre + 2)
    }
    const HandleClickAdd = () => {
        setValue(pre => pre + '+')
    }

    const HandleClickResult = () => {
        setValue(eval(value))
    }
    const HandelDelete = () => {
        setValue(value.slice(0, -1))
    }

    const HandleDivision = () => {
        setValue(pre => pre + '/')
    }

    const HandleModulus = () => {
        setValue(pre => pre + ' %')
    }

    const HandleSeven = () => {
        setValue(pre => pre + 7)
    }

    const HandleEight = () => {
        setValue(pre => pre + 8)
    }

    const HandleNine = () => {
        setValue(pre => pre + 9)
    }

    const HandleMul = () => {
        setValue(pre => pre + '*')
    }

    const HandleFour = () => {
        setValue(pre => pre + 4)
    }

    const HandleFive = () => {
        setValue(pre => pre + 5)
    }

    const HandleSix = () => {
        setValue(pre => pre + 6)
    }

    const HandleMinus = () => {
        setValue(pre => pre + '-')
    }

    const HandleThree = () => {
        setValue(pre => pre + 3)
    }

    const HandleZero = () => {
        setValue(pre => pre + 0)
    }

    const HandleDoubleZero = () => {
        setValue(pre => pre === '' ? pre + '0' : pre + '00')
    }

    const HandleDot = () => {
        setValue(pre => pre + '.')
    }

    return (
        <>
            <h1>CalculatorApp</h1>
            <div className='container1'>
                <p>{value}</p>
                <div className='inline-grid'>
                    <div className='grid-child' onClick={HandleClick}>AC</div>
                    <div className='grid-child' onClick={HandelDelete}>DEL</div>
                    <div className='grid-child' onClick={HandleModulus}>%</div>
                    <div className='grid-child' onClick={HandleDivision}>/</div>
                    <div className='grid-child' onClick={HandleSeven}>7</div>
                    <div className='grid-child' onClick={HandleEight}>8</div>
                    <div className='grid-child' onClick={HandleNine}>9</div>
                    <div className='grid-child' onClick={HandleMul}>*</div>
                    <div className='grid-child' onClick={HandleFour}>4</div>
                    <div className='grid-child' onClick={HandleFive}>5</div>
                    <div className='grid-child' onClick={HandleSix}>6</div>
                    <div className='grid-child' onClick={HandleMinus}>-</div>
                    <div className='grid-child' onClick={HandleClick1}>1</div>
                    <div className='grid-child' onClick={HandleClick2}>2</div>
                    <div className='grid-child' onClick={HandleThree}>3</div>
                    <div className='grid-child' onClick={HandleClickAdd}>+</div>
                    <div className='grid-child' onClick={HandleZero}>0</div>
                    <div className='grid-child' onClick={HandleDoubleZero}>00</div>
                    <div className='grid-child' onClick={HandleDot}>.</div>
                    <div className='grid-child' onClick={HandleClickResult}>=</div>
                </div>
            </div>
            <div>
            </div>
        </>
    )
}

export default CalculatorApp