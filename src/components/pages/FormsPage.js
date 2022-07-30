import { useEffect, useMemo } from 'react'
import {SimpleCard} from '../Cards'
import {TextInput, Checkbox, Radio, Select, Switch, Textarea} from '../Forms'
import SVGIcons from '../SVGIcons'
import { Grid } from '../Layouts'
import { Separator } from '../Misc'

function FormsPage({setPageHeading}){
    const headingStyles = useMemo(() => ({
        fontSize: '1.56rem',
        marginTop: '2.4rem'
    }), [])
    const separatorStyles = {
        margin: '1.6rem 0'
    } 
    useEffect(() => {
        setPageHeading({title: 'Forms', icon: 'write'})
    }, [])

    return (<>
        <Grid numOfColumns={1} items={[
            <SimpleCard
                heading={'Outline Style'}
                body={<>
                    <section>
                        <h6 className='text-semi-bold' style={{...headingStyles, marginTop: 0}}>Basic Input</h6>
                        <Separator attr={{style: separatorStyles}}/>
                        <Grid numOfColumns={3} items={[
                            <TextInput label={'Text Input'}/>,
                            <Select label={'Select'}/>,
                            <Textarea label={'Text Area'}/>,
                            <TextInput label={'Left Addon'} leftAddon={{content: '@'}}/>,
                            <TextInput label={'Right Addon'} rightAddon={{content: '.com'}}/>,
                            <TextInput label={'Both Addon'} leftAddon={{content: '@'}} rightAddon={{content: '.com'}}/>,
                            <TextInput label={'Left Plain Addon'} leftAddon={{content: '@', isPlain: true}}/>,
                            <TextInput label={'Right Plain Addon'} rightAddon={{content: '.com', isPlain: true}}/>,
                            <TextInput 
                                label={'Both Plain Addon'} 
                                leftAddon={{content: '@', isPlain: true}} rightAddon={{content: '.com', isPlain: true}}
                            />,                                       
                        ]}/>
                    </section>    
                    <section>
                        <h6 className='text-semi-bold' style={headingStyles}>Choice Input</h6>
                        <Separator attr={{style: separatorStyles}}/>
                        <div className='flex-row items-center'>
                            <Checkbox label={'Checkbox'} containerAttr={{style: {marginRight: '3rem'}}}/>
                            <Radio label={'Radio'} containerAttr={{style: {marginRight: '3rem'}}}/>
                            <Switch label={'Switch'}/> 
                        </div>
                    </section>                                                         
                </>}
            />,
            <SimpleCard
                heading={'Solid Style'}
                body={<>
                    <section>
                        <h6 className='text-semi-bold' style={{...headingStyles, marginTop: 0}}>Basic Input</h6>
                        <Separator attr={{style: separatorStyles}}/>
                        <Grid numOfColumns={3} items={[
                            <TextInput type={'solid'} label={'Text Input'}/>,
                            <Select type={'solid'} label={'Select'}/>,
                            <Textarea type={'solid'} label={'Text Area'}/>,
                            <TextInput type={'solid'} label={'Left Addon'} leftAddon={{content: '@'}}/>,
                            <TextInput type={'solid'} label={'Right Addon'} rightAddon={{content: '.com'}}/>,
                            <TextInput type={'solid'} label={'Both Addon'} leftAddon={{content: '@'}} rightAddon={{content: '.com'}}/>,
                            <TextInput type={'solid'} label={'Left Plain Addon'} leftAddon={{content: '@', isPlain: true}}/>,
                            <TextInput type={'solid'} label={'Right Plain Addon'} rightAddon={{content: '.com', isPlain: true}}/>,
                            <TextInput type={'solid'} 
                                label={'Both Plain Addon'} 
                                leftAddon={{content: '@', isPlain: true}} rightAddon={{content: '.com', isPlain: true}}
                            />,                                       
                        ]}/>
                    </section>    
                    <section>
                        <h6 className='text-semi-bold' style={headingStyles}>Choice Input</h6>
                        <Separator attr={{style: separatorStyles}}/>
                        <div className='flex-row items-center'>
                            <Checkbox type={'solid'} label={'Checkbox'} containerAttr={{style: {marginRight: '3rem'}}}/>
                            <Radio type={'solid'} label={'Radio'} containerAttr={{style: {marginRight: '3rem'}}}/>
                        </div>
                    </section>                                                         
                </>}
            />,
            <SimpleCard
                heading={'Sizes & Colors'}
                body={<>
                    <section>
                        <h6 className='text-semi-bold' style={{...headingStyles, marginTop: 0}}>Sizes</h6>
                        <Separator attr={{style: separatorStyles}}/>
                        <Grid numOfColumns={3} items={[
                            <TextInput label={'Small'} size={'sm'}/>,
                            <TextInput label={'Medium'} size={'md'}/>,
                            <TextInput label={'Large'} size={'lg'}/>,                                   
                        ]}/>
                    </section>    
                    <section>
                        <h6 className='text-semi-bold' style={headingStyles}>Colors</h6>
                        <Separator attr={{style: separatorStyles}}/>
                        <Grid numOfColumns={3} items={[
                            <TextInput label={'Blue'} color={'blue'}/>,
                            <TextInput label={'Green'} color={'green'}/>,
                            <TextInput label={'Orange'} color={'orange'}/>, 
                            <TextInput label={'Red'} color={'red'}/>, 
                            <TextInput label={'Purple'} color={'purple'}/>,                                   
                        ]}/>
                    </section>                                                         
                </>}
            />,             
        ]}/>       
    </>)
}

export default FormsPage