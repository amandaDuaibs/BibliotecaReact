import React from "react";
import styled from "styled-components";

export const ToggleSwitch =({onClick, isChecked})=>{
    return (
        <ToggleSwitchWrapper>
            <input type='checkbox' defaultChecked={isChecked} onClick={onClick} />
                <span/>
            
        </ToggleSwitchWrapper>
    )
}

const ToggleSwitchWrapper = styled.label`
    background: '#eee';
    width: 4rem;
    height: 2rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: 0.25s;

    input{
        height: 100%;
        width: 100%;
        opacity: 0;
    }

    span{
        position: absolute;
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        background: lightgray;
        left: 0;
        cursor: pointer;
        box-shadow: 2px 2px 4px gray;
    }

    input:checked+ span {
        left:50% ;
        background: blue;
    }
`