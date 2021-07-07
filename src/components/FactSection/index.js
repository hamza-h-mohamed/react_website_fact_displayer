import React, {useState} from 'react'
import { Button } from '../ButtonElemets';
import { FactCard, FactContainer, FactH1, FactWrapper,FactParagraph} from './FactElements'

const FactSection = (props) => {

    const [count, setCount] = useState(1);
    
    if(count>5){
        setCount(count-(count-1))
    }
   

    const factList = props.facts.slice(count-1,count).map((fact) => 
    {if(count == 0 ){
        return <p>empty</p>;
    }
        
        else{
        return <div key={fact.id}>
            {fact.name}
        </div>;}
       
    }
    
    );

    return (
        <FactContainer>
            <FactWrapper>
                <FactH1>Fun Facts</FactH1>
                <FactCard>
                <FactParagraph>
                    {factList}
                </FactParagraph>
                </FactCard>
                <Button onClick={() => setCount(count + 1)}>click me</Button>    
            </FactWrapper>
        </FactContainer>
    )
}

export default FactSection
