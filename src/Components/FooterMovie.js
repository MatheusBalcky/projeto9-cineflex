import React from 'react';
import styled from 'styled-components';

export default function FooterMovie ({ title, imgSrc, weekDay, hour }) { 

    return (
        <FooterContainer>

            <ImgContainer>

                <img width={'100%'} src={imgSrc} />
            </ImgContainer>

            <DescriptionContainer>
                <div>
                    {title} <br/>
                    { (weekDay && hour) ?  `${weekDay} - ${hour}`: ''}
                </div>
            </DescriptionContainer>

        </FooterContainer>
    )
}


// & CSS STYLED-COMPONENTS

const FooterContainer = styled.div`
    background-color: #C3CFD9;
    height: 117px;
    display: flex;
    padding: 10px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    gap: 0px 15px;
`

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    padding: 10px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.333);
`

const DescriptionContainer = styled.div`
    display: flex; justify-content: center; align-items: center;
    height: 100%;
    color:  #293845;
    font-size: 20px;
    line-height: 1.3em;
`