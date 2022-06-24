import { useState } from 'react'
import { Button } from '../Buttons'
import {SimpleCard, PlainCard, TabbedCard, StatsCard, ToolCard} from '../Cards'
import {Grid} from '../Layouts'

function CardsPage(props){
    const [expand, setExpand] = useState(false)
    return (<>
        <Grid numOfColumns={2} collapsedOn={'mobile'} items={[
            <SimpleCard heading={'Simple Card'} footer={'This is footer'}/>,
            <PlainCard body={'Plain card'}/>,
            <TabbedCard/>,
            <StatsCard title={'Stats card'}/>,
            <ToolCard
                heading={'Tool Card'}
                expand={expand}
                toggleButton={
                    <Button
                        size={'sm'} type={'light'} color={'blue'}
                        iconName={'angle_up'} iconOnly={true}
                        classes={'toggle-btn'}
                        attr={{
                            onClick: () => {setExpand(state => !state)}
                        }}
                    />
                }              
            />,
        ]}/>    
    </>)
}

export default CardsPage