import { useEffect, useMemo, useState } from 'react'
import { Button } from '../Buttons'
import {SimpleCard, PlainCard, TabbedCard, StatsCard, ToolCard} from '../Cards'
import {Grid} from '../Layouts'

function CardsPage({setPageHeading}){
    const [expand, setExpand] = useState(false)
    const loremIpsum = useMemo(() => (
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '+
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    ))
    useEffect(() => {
        setPageHeading({title: 'Cards', icon: 'blocks'})
    }, [])
    
    return (<>
        <Grid numOfColumns={2} collapsedOn={'mobile'} items={[
            <SimpleCard 
            heading={'Simple Card'} 
                body={loremIpsum} 
                footer={'This is footer'}
            />,
            <PlainCard body={<>
                <b>This is plain card.</b>
                {loremIpsum}
            </>}/>,
            <StatsCard title={'Stats card'}/>,
            <TabbedCard/>,
            <ToolCard
                heading={'Tool Card'}
                body={loremIpsum}
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