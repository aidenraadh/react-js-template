import { useState } from 'react'
import { Button } from '../Buttons'
import {SimpleCard, PlainCard, TabbedCard, StatsCard, ToolCard} from '../Cards'
import {Grid} from '../Layouts'
import {Accordion, Collapsible} from '../Misc'

function CardsPage(props){
    const [expand, setExpand] = useState(false)
    return (<>
        <Grid numOfColumns={2} collapsedOn={'mobile'} items={[
            <SimpleCard/>,
            <PlainCard/>,
            <TabbedCard/>,
            <StatsCard/>,
            <ToolCard/>,
        ]}/>
        <PlainCard
            body={<>
                <Button size={'lg'} type={'light'} attr={{onClick: () => {setExpand(state => !state)}}}/>
                <span>
                    adasdasdad ad asda das d 
                </span>
            </>}
        />      
    </>)
}

export default CardsPage