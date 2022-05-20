import styled from 'styled-components';

export default function HeaderApp (){
    return(
        <HeaderSite>
            <h1>CINEFLEX</h1>
        </HeaderSite>
    )
}

// & CSS STYLED-COMPONENTS

const HeaderSite = styled.div`
    background-color: #C3CFD9;
    height: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    h1 {
        font-size: 34px;
        color: #E8833A;
        font-weight: normal;
    }
`