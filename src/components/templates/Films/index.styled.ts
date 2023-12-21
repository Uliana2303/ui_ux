import styled from 'styled-components';

export const Films = styled.div`
    display: flex; 
    height: 100%;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: ${props => props.theme.bachgroundColor};
    transition: 0.1s;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    // padding: 0px 20px;
    // margin-right: 50px;
    align-items: center;
    align-content: center;
    aligh-self: center;
    box-sizing: border-box;
    justify-content: center;

   
    @media (min-width: 1200px){
        width: 1200px;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        width: 100%;
    }
    @media (max-width: 992px) and (min-width: 768px)  {

        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  { 

        width: 100%;
    }
    @media (max-width: 576px)  {
        width: 100%;
    }
`;


export const Title = styled.span`
    letter-spacing: 1px;
    font-weight: 600;
    display: flex;
    flex: 0 0 auto;
    // width: 100%;
    margin: 50px 0px;
    align-items: center;
    box-sizing: border-box;
    font-size: ${props => props.theme.textSizeTitle};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle500};
    }
`;

export const List = styled.div`
    display: row;
    width: 100%;
    align-items: center;
    align-self: center;
    border-top: 1px solid ${props => props.theme.accentColor1};
    border-bottom: 1px solid ${props => props.theme.accentColor1};
    padding: 20px 0px;
    box-sizing: border-box; 
`;