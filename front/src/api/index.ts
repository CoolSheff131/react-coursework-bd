import Document from "../Entities/Document"
import Journal from "../Entities/Journal"
import Organization from "../Entities/Organization"
import Otdel from "../Entities/Otdel"
import Worker from "../Entities/Worker"

export function getDocuments(): Promise<Document[]>{
    return fetch('http://localhost:5000/document').then(
        data => data.json(),
        error => {throw Error(error)})
}

export function createDocument(document: Document): Promise<String | Response>{
    return fetch('http://localhost:5000/document',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(document)
    }).then(data => data)
}

export function deleteDocument(id: number): Promise<String | Response>{
    console.log(id);
    return fetch(`http://localhost:5000/document/${id} `,{
        method: 'DELETE'
    }).then(data => data)
}

export function getJournals(): Promise<Journal[]>{
    return fetch('http://localhost:5000/journal').then(
        data => data.json(),
        error => {throw Error(error)})
}

export function createJournal(journal: Journal): Promise<String | Response>{
    return fetch('http://localhost:5000/journal',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(journal)
    }).then(data => data)
}
export function deleteJournal(id: number): Promise<String | Response>{
    console.log(id);
    return fetch(`http://localhost:5000/journal/${id} `,{
        method: 'DELETE'
    }).then(data => data)
}

export function getOrganizations(): Promise<Organization[]>{
    return fetch('http://localhost:5000/organization').then(
        data => data.json(),
        error => {throw Error(error)})
}

export function createOrganization(organization: Organization): Promise<String | Response>{
    return fetch('http://localhost:5000/organization',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(organization)
    }).then(data => data)
}

export function deleteOrganization(id: number): Promise<String | Response>{
    console.log(id);
    return fetch(`http://localhost:5000/organization/${id} `,{
        method: 'DELETE'
    }).then(data => data)
}

export function getOtdels(): Promise<Otdel[]>{
    return fetch('http://localhost:5000/otdel').then(
        data => data.json(),
        error => {throw Error(error)})
}

export function createtOtdel(otdel: Otdel): Promise<String | Response>{
    return fetch('http://localhost:5000/otdel',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(otdel)
    }).then(data => data)
}

export function deleteOtdel(id: number): Promise<String | Response>{
    console.log(id);
    return fetch(`http://localhost:5000/otdel/${id} `,{
        method: 'DELETE'
    }).then(data => data)
}

export function getWorkers(): Promise<Worker[]>{
    return fetch('http://localhost:5000/worker').then(
        data => data.json(),
        error => {throw Error(error)})
}

export function createtWorker(worker: Worker): Promise<String | Response>{
    return fetch('http://localhost:5000/worker',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(worker)
    }).then(data => data)
}

export function deleteWorker(id: number): Promise<String | Response>{
    console.log(id);
    return fetch(`http://localhost:5000/worker/${id} `,{
        method: 'DELETE'
    }).then(data => data)
}

