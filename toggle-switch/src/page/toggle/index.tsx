
import React from 'react';
import { ChangeEvent } from 'react'
import styled, { css } from 'styled-components';
import { ToggleSwitch } from '../../components/ToogleSwitch';

interface StyleProps{
    isDarkMode: boolean
}

const Toggle =()=>{
    const[isCheked, setChecked] = React.useState(false)
    console.log('is cheked', isCheked)
    
    const handleCheck = () =>{
        setChecked((prevState) => !prevState)
        
    }

    return <PageWrapper isDarkMode={isCheked}>
        <h1>{isCheked ? 'Checado' : 'Não Checado'}</h1>
       
        <ToggleSwitch onClick={handleCheck} isChecked={isCheked}/>
    </PageWrapper>
     
}


const PageWrapper= styled.div<StyleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background: lightgray;
    ${({isDarkMode})=>isDarkMode && darkMode}
    height: 100vh;
    width:100vh;
    flex-direction: colum;
    gap: 1rem;
`
const darkMode =css `
    background: #333
`

export default Toggle;