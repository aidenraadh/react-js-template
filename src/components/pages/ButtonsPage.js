import { useMemo} from 'react'
import {SimpleCard} from '../Cards'
import {Button} from '../Buttons'
import {Separator} from '../Misc'

function ButtonsPage(props){
    const btnStyles = useMemo(() => ({
        marginRight: '1rem',
        marginBottom: '1.4rem'
    }), [])
    const headingStyles = useMemo(() => ({
        fontSize: '1.66rem',
        marginTop: '2.4rem'
    }), [])
    const separatorStyles = {
        margin: '1.6rem 0'
    } 
    return (<>
        <SimpleCard
            heading={'Buttons'}
            body={<>
                <section>
                    <h6 className='text-medium text-dark-75' style={headingStyles}>Primary Buttons</h6>
                    <Separator tag={'span'} attr={{style: separatorStyles}}/>
                    <div className='flex-row wrap items-center'>
                        <Button color={'blue'} attr={{style: btnStyles}}/>
                        <Button color={'green'} attr={{style: btnStyles}}/>
                        <Button color={'red'} attr={{style: btnStyles}}/>
                        <Button color={'orange'} attr={{style: btnStyles}}/>
                        <Button color={'purple'} attr={{style: btnStyles}}/>
                    </div>
                    <div className='flex-row wrap items-center'>
                        <Button color={'blue'} iconName={'blocks'} text={'With icon'} attr={{style: btnStyles}}/>
                        <Button color={'green'} iconName={'blocks'} text={'With icon'} attr={{style: btnStyles}}/>
                        <Button color={'red'} iconName={'blocks'} text={'With icon'} attr={{style: btnStyles}}/>
                        <Button color={'orange'} iconName={'blocks'} text={'With icon'} attr={{style: btnStyles}}/>
                        <Button color={'purple'} iconName={'blocks'} text={'With icon'} attr={{style: btnStyles}}/>
                    </div>         
                    <div className='flex-row wrap items-center'>
                        <Button color={'blue'} iconName={'blocks'} iconOnly={true} text={'Icon only'} attr={{style: btnStyles}}/>
                        <Button color={'green'} iconName={'blocks'} iconOnly={true} text={'Icon only'} attr={{style: btnStyles}}/>
                        <Button color={'red'} iconName={'blocks'} iconOnly={true} text={'Icon only'} attr={{style: btnStyles}}/>
                        <Button color={'orange'} iconName={'blocks'} iconOnly={true} text={'Icon only'} attr={{style: btnStyles}}/>
                        <Button color={'purple'} iconName={'blocks'} iconOnly={true} text={'Icon only'} attr={{style: btnStyles}}/>
                    </div>                                 
                </section>
                <section>
                    <h6 className='text-medium text-dark-75' style={headingStyles}>Light Buttons</h6>
                    <Separator tag={'span'} attr={{style: separatorStyles}}/>
                    <div className='flex-row wrap items-center'>
                        <Button type={'light'} color={'blue'} attr={{style: btnStyles}}/>
                        <Button type={'light'} color={'green'} attr={{style: btnStyles}}/>
                        <Button type={'light'} color={'red'} attr={{style: btnStyles}}/>
                        <Button type={'light'} color={'orange'} attr={{style: btnStyles}}/>
                        <Button type={'light'} color={'purple'} attr={{style: btnStyles}}/>
                    </div>
                    <div className='flex-row wrap items-center'>
                        <Button type={'light'} color={'blue'} iconName={'blocks'} text={'With icon'} attr={{style: btnStyles}}/>
                        <Button type={'light'} color={'green'} iconName={'blocks'} text={'With icon'} attr={{style: btnStyles}}/>
                        <Button type={'light'} color={'red'} iconName={'blocks'} text={'With icon'} attr={{style: btnStyles}}/>
                        <Button type={'light'} color={'orange'} iconName={'blocks'} text={'With icon'} attr={{style: btnStyles}}/>
                        <Button type={'light'} color={'purple'} iconName={'blocks'} text={'With icon'} attr={{style: btnStyles}}/>
                    </div>         
                    <div className='flex-row wrap items-center'>
                        <Button type={'light'} color={'blue'} iconName={'blocks'} iconOnly={true} text={'Icon only'} attr={{style: btnStyles}}/>
                        <Button type={'light'} color={'green'} iconName={'blocks'} iconOnly={true} text={'Icon only'} attr={{style: btnStyles}}/>
                        <Button type={'light'} color={'red'} iconName={'blocks'} iconOnly={true} text={'Icon only'} attr={{style: btnStyles}}/>
                        <Button type={'light'} color={'orange'} iconName={'blocks'} iconOnly={true} text={'Icon only'} attr={{style: btnStyles}}/>
                        <Button type={'light'} color={'purple'} iconName={'blocks'} iconOnly={true} text={'Icon only'} attr={{style: btnStyles}}/>
                    </div>                      
                </section>                
                <section>
                    <h6 className='text-medium text-dark-75' style={headingStyles}>Large Buttons</h6>
                    <Separator tag={'span'} attr={{style: separatorStyles}}/>
                    <div className='flex-row wrap items-center'>
                        <Button size={'lg'} color={'blue'} attr={{style: btnStyles}}/>
                        <Button size={'lg'} color={'blue'} iconName={'blocks'} text={'With icon'} attr={{style: btnStyles}}/>
                        <Button size={'lg'} color={'blue'} iconName={'blocks'} iconOnly={true} text={'Icon only'} attr={{style: btnStyles}}/>
                    </div>                                
                </section>       
                <section>
                    <h6 className='text-medium text-dark-75' style={headingStyles}>Medium Buttons</h6>
                    <Separator tag={'span'} attr={{style: separatorStyles}}/>
                    <div className='flex-row wrap items-center'>
                        <Button size={'md'} color={'blue'} attr={{style: btnStyles}}/>
                        <Button size={'md'} color={'blue'} iconName={'blocks'} text={'With icon'} attr={{style: btnStyles}}/>
                        <Button size={'md'} color={'blue'} iconName={'blocks'} iconOnly={true} text={'Icon only'} attr={{style: btnStyles}}/>
                    </div>                                
                </section>  
                <section>
                    <h6 className='text-medium text-dark-75' style={headingStyles}>Small Buttons</h6>
                    <Separator tag={'span'} attr={{style: separatorStyles}}/>
                    <div className='flex-row wrap items-center'>
                        <Button size={'sm'} color={'blue'} attr={{style: btnStyles}}/>
                        <Button size={'sm'} color={'blue'} iconName={'blocks'} text={'With icon'} attr={{style: btnStyles}}/>
                        <Button size={'sm'} color={'blue'} iconName={'blocks'} iconOnly={true} text={'Icon only'} attr={{style: btnStyles}}/>
                    </div>                                
                </section>                                           
            </>}
        />   
    </>)
}

export default ButtonsPage