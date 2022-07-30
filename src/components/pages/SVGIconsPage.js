import SVGIcons from "../SVGIcons"
import {PlainCard} from '../Cards'
import {Grid} from '../Layouts'
import { Separator } from "../Misc"
import { useEffect } from "react"

const icons = {
    "home": [
        'book', 'cupboard', 'door_open', 'commode_1',
        'library', 'clock', 'home', 'couch', 'bed', 'calendar',
        'briefcase', 'hanger'
    ],
    "commerce & finance": [
        'cart', 'dollar', 'sale_1','sale_2', 'box_2','price_2',
        'ecm004', 'ecm009', 'bank'
    ],
    "communication": [
        'group', 'user', 'add_user', 'remove_user', 'call',
        'sign_in', 'sign_out', 'mail', 'clipboard_list',
        'clipboard_check','share', 'bell'   
    ],
    "design": [
        'blocks', 'layers',       
    ],
    "general": [
        'other', 'other_square', 'other_circle', 'visible', 'hidden', 'search', 'trash', 'update',
        'settings', 'gen017', 'half_star', 'star', 'plus_square', 'plus_circle', 'close', 'close_square', 'close_circle',
        'stop','check', 'check_circle', 'warning_1', 'warning_2', 'information', 'question', 
        'write','image', 'day', 'night', 'love'
    ],
    "files": [
        'import',        
    ],
    "arrow": [
        'arrow_to_bottom', 'angle_up', 'angle_down',
        'angle_left','angle_double_up','angle_double_right'        
    ],
    "text": [
        'bullet_list', 'article','sort_1','sort_2','sort_3', 
    ],
}

function SVGIconsPage({setPageHeading}){
    const iconCategories = Object.keys(icons)
    const headingStyles = {
        fontSize: '1.56rem',
        marginTop: '2.4rem'
    }
    const separatorStyles = {
        margin: '1.6rem 0'
    }     
    const iconStyle = {style: {
        width: '3.6rem', marginBottom: '1rem'
    }}
    useEffect(() => {
        setPageHeading({title: 'SVG Icons', icon: 'image'})
    }, [])
    return (
    <PlainCard
        body={iconCategories.map((category, index) => {
            const iconJSX = <Grid numOfColumns={4} items={icons[category].map(iconName => (
                <p className="flex-col items-center">
                    <SVGIcons name={iconName} color={'blue'} attr={iconStyle}/>
                    <span>{iconName}</span>
                </p>
            ))}/>
            return (
                <section key={index}>
                    <h6 className='text-semi-bold text-capitalize' style={
                        index === 0 ? {...headingStyles, marginTop: 0} : headingStyles
                    }>
                        {category}
                    </h6>
                    <Separator attr={{style: separatorStyles}}/>
                    {iconJSX}
                </section>                 
            )
        })}
    />
    )
}

export default SVGIconsPage