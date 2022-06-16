import {SimpleCard, PlainCard, TabbedCard, StatsCard, ToolCard} from '../Cards'
import {Grid} from '../Layouts'

function CardsPage(props){
    return (
        <Grid numOfColumns={2} collapsedOn={'mobile'} items={[
            <SimpleCard/>,
            <PlainCard/>,
            <TabbedCard/>,
            <StatsCard/>,
            <ToolCard/>,
        ]}/>
    )
}

export default CardsPage