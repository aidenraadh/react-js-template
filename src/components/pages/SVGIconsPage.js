import SVGIcons from "../SVGIcons"
import {SimpleCard} from '../Cards'
import {Grid} from '../Layouts'
import { useEffect, useRef, useState } from "react"

function SVGIconsPage({setPageHeading}){
    const ref = useRef()
    const [iconNames, setIconNames] = useState([])

    useEffect(() => {
        setPageHeading({title: 'SVG Icons', icon: 'image'})
        setIconNames(
            ref.current.firstChild.innerHTML.split(',')
        )
    }, [])
    return (
    <SimpleCard
        heading={'SVG Icons'}
        body={<>
            <div ref={ref} style={{display: "none"}}>
                <SVGIcons getNames={true}/>
            </div>
            <Grid numOfColumns={4} items={iconNames.map(iconName => (
                <p className="flex-col items-center content-center" style={{fontSize: '1.4rem', marginBottom: '2rem'}}>
                    <SVGIcons name={iconName} attr={{style: {width: '2.2em'}}}/>
                    <span classes={'text-center'}>
                        {iconName}
                    </span>
                </p>
            ))}/>
        </>}
    />
    )
}

export default SVGIconsPage