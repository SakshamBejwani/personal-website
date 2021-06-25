import React from 'react'
import styled from 'styled-components'
import Section from './Section'


function Home() {
    return (
        <Container>
             <Section 
                title="SAKSHAM BEJWANI"
                description="21, Self-learning software and electrical engineering through research & development."
                backgroundImg= "model-s.jpg"
                leftBtnText="Repositories"
                leftBtnUrl=""
                rightBtnUrl=""
                />
             <Section 
                title="Tesla Clone"
                description="Responsive, Burger Nav and more."
                backgroundImg= "model-y.jpg"
                leftBtnText="Source Code"
                rightBtnText="Live Website"
                leftBtnUrl=""
                rightBtnUrl=""/>
             <Section 
                title="Disney Plus Clone"
                description="Seamless, Google Auth, Movie Landing Page."
                backgroundImg= "model-3.jpg"
                leftBtnText="Source Code"
                rightBtnText="Live Website"
                leftBtnUrl=""
                rightBtnUrl=""/>
             <Section 
                title="FPV Drone"
                description="Brushless Motors, >70mph"
                backgroundImg="fpv.jpg"
                leftBtnText="Gallery"
                leftBtnUrl=""
                rightBtnUrl=""/>
             <Section 
                title="Smart Automated Surveillance Security"
                description="Detect, Analyze, Act."
                backgroundImg="webshow.webp"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
                leftBtnUrl=""
                rightBtnUrl=""/>
                <Section 
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels "
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
                leftBtnUrl=""
                rightBtnUrl=""/>
                <Section 
                title="More Projects on the way."
                description=""
                backgroundImg="macbook-2.png"
                leftBtnText="Shop Now"
                leftBtnUrl=""
                rightBtnUrl=""/>
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;

`