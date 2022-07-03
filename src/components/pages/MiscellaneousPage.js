import { useMemo, useState } from 'react'
import { Button } from '../Buttons'
import {SimpleCard} from './../Cards'
import {Accordion, Collapsible, Dropdown, UserThumbnail, Separator} from './../Misc'

function MiscellaneousPage(props){
    const [expandAccordion, setExpandAccordion] = useState(false)
    const [expandCollapsible, setExpandCollapsible] = useState(false)
    const loremIpsum = useMemo(() => (
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '+
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    ))    
    return (<>
        <SimpleCard
            heading={'Miscellaneous'}
            body={<>
                <div className='flex-row items-center'>
                    <Dropdown/>
                    <Button text={'Toggle collapsible'} attr={{
                        style: {marginLeft: '1.6rem'},
                        onClick: () => {setExpandCollapsible(state => !state)}
                    }}/>
                </div>
                <Collapsible
                    expanded={expandCollapsible}
                    toggleExpand={() => {setExpandCollapsible(state => !state)}}
                    body={
                        <div>
                            <b>This is collapsible body.</b><br/>
                            {loremIpsum}
                        </div>
                    }
                    attr={{ style: {margin: '1.6rem'} }}
                />                
                <Separator attr={{ style: {margin: '2rem 0'} }}/>
                <UserThumbnail userName={'User thumbnail'}/>
                <Separator attr={{ style: {margin: '2rem 0'} }}/>
                <Accordion
                    heading={'Accordion Heading'}
                    expanded={expandAccordion}
                    toggleExpand={() => {setExpandAccordion(state => !state)}}
                    body={loremIpsum}
                />
            </>}
        />
    </>)
}

export default MiscellaneousPage