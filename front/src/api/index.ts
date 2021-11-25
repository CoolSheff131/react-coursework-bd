import Document from "../Entities/Document"
export function getDocuments(): Promise<Document[]>{
    return fetch('http://localhost:5000/document').then(
        data => data.json(),
        error => {throw Error(error)})
}