import { useEffect, useMemo } from 'react'
import {SimpleCard} from '../Cards'
import {TextInput, Checkbox, Radio, Select, Switch, Textarea} from '../Forms'
import { Grid } from '../Layouts'
import { Separator } from '../Misc'

function FormsPage({setPageHeading}){
    const headingStyles = useMemo(() => ({
        fontSize: '1.66rem',
        marginTop: '2.4rem'
    }), [])
    const separatorStyles = {
        margin: '1.6rem 0'
    } 
    useEffect(() => {
        setPageHeading({title: 'Forms', icon: 'write'})
    }, [])

    return (<>
        <SimpleCard
            heading={'Forms'}
            body={<>
                <section>
                    <h6 style={headingStyles}>Outline style</h6>
                    <Separator attr={{style: separatorStyles}}/>                 
                    <Grid numOfColumns={3} items={[
                        <TextInput size={'lg'} formAttr={{placeholder: 'Text input'}}/>,
                        <Textarea color={'green'} leftAddon={'Test'} formAttr={{placeholder: 'Text area'}}/>,
                        <Select label={'That will do sir'} color={'red'}/>,
                    ]}/>
                    <div className='flex-row items-center' style={{marginTop: '1.2rem'}}>
                        <Checkbox label={'Checkbox'} containerAttr={{style: {marginRight: '2rem'}}}/>
                        <Radio label={'Radio'} containerAttr={{style: {marginRight: '2rem'}}}/>
                        <Switch label={'Switch'} containerAttr={{style: {marginRight: '2rem'}}}/>
                    </div>
                </section>
                <section>
                    <h6 style={headingStyles}>Solid style</h6>
                    <Separator attr={{style: separatorStyles}}/>
                    <Grid numOfColumns={3} items={[
                        <TextInput leftAddon={'test'} type={'solid'} formAttr={{placeholder: 'Text input'}}/>,
                        <Select type={'solid'}/>,
                        <Textarea type={'solid'} formAttr={{placeholder: 'Text area'}}/>,
                    ]}/>
                    <div className='flex-row items-center' style={{marginTop: '1.2rem'}}>
                        <Checkbox type={'basic'} label={'Checkbox'} containerAttr={{style: {marginRight: '2rem'}}}/>
                        <Radio type={'basic'} label={'Radio'} containerAttr={{style: {marginRight: '2rem'}}}/>
                    </div>
                </section>                
            </>}
        />
    </>)
}

export default FormsPage