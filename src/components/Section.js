import React from 'react'
import styled from 'styled-components'




function Section({title,description,leftBtnText,rightBtnText,backgroundImg}) {
    
    return (
        <Wrap bgImage={ backgroundImg }>
            
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
            </ItemText>
            
            <Buttons>
                
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    {rightBtnText &&
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    
                    }
                </ButtonGroup>
                
            <DownArrow src="/images/down-arrow.svg" />
            </Buttons>

            
        </Wrap>
        
    )
}

export default Section


const Wrap = styled.div`
    z-index:10;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    background-image: ${(props) => `url("/images/${props.bgImage}")`};
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`
const ItemText = styled.div`
    z-index:10;
    padding-top: 15vh;
    text-align: center;

`
const ButtonGroup = styled.div`
    display:flex;
    margin-bottom: 3px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    cursor: pointer;
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    margin: 10px;
`
const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;

`

const DownArrow = styled.img`
    margin-top: 20px;
    margin-bottom: 10px;
    height: 50px;
    animation: animateDown infinite 1.5s;
    align-items: center;
`

const Buttons = styled.div`

`