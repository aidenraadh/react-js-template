import Table from '../Table'
import {PlainCard} from '../Cards'
import { useEffect } from 'react'

function TablePage({setPageHeading}){
    const rows = [
        ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
        ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
        ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
        ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum']
    ]
    useEffect(() => {
        setPageHeading({title: 'Table', icon: 'clipboard_list'})
    }, [])    

    return (
        <PlainCard
            body={
                <Table
                    headings={['Heading 1', 'Heading 2', 'Heading 3']}
                    body={rows.map(row => ([
                        row[0],
                        row[1],
                        row[2],
                    ]))}
                />
            }
        />
    )
}

export default TablePage