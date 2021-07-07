import styled from 'styled-components'

export const FactContainer = styled.div`
    height: 800px;
    display: flex;
    background:#2f9688;
    font-size:1rem;
 

`;

export const FactWrapper = styled.div`
    max-width: 1000px;
    margin: 100px auto;
    height:400px;
    display: grid;
    justify-content:center;
    align-items: flex-end;
    padding: 0 50px;
 `;

export const FactCard = styled.div`
    background: #fff;
    display: flex;
    align-items: center;
    justify-content:center;
    border-radius: 10px;
    max-height: 340px;
    width:400px;
    height:150px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    font-size:1rem;

    @media screen and (max-width: 768px){
        width:280px;
        height:340px;
    
    }
    
`;
export const FactH1 = styled.h1`
    font-size: 2.5rem;
    color:#fff;
    margin-bottom:64px;
    text-align:center;

    @media screen and (max-width: 768px){
        font-size: 1.5rem;
    }
    
`;
export const FactParagraph = styled.p`
    height:40px;
    text-align:center;   
    max-width:350px;
    max-height:300px;
    word-wrap:break-word;
`;
