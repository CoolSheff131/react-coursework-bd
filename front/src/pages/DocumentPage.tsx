import { useEffect, useState } from 'react'
import { getDocuments } from '../api'
import Document from '../Entities/Document'
function DocumentPage() {
    const [Documents, setDocuments] = useState<Document[]>()
    useEffect(() => {
        getDocuments().then(data => {
            setDocuments(data);
        }).catch(err => console.log(err)
        )
        return () => {

        }
    }, [Document])
    return (
        <div>
            <div>Document</div>
            {Documents?.map(document => document.name)}
        </div>
    )
}

export default DocumentPage