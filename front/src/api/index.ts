import Document from "../Entities/Document"
import Journal from "../Entities/Journal"
import { LoginResponse } from "../Entities/LoginResponse"
import Organization from "../Entities/Organization"
import Otdel from "../Entities/Otdel"
import Report1 from "../Entities/Report1"
import Report2 from "../Entities/Report2"
import Report3 from "../Entities/Report3"
import Worker from "../Entities/Worker"

export function signIn(login: string, password: string): Promise<LoginResponse>{
    return fetch('http://localhost:5000/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            login,
            password
        })
    }).then(
        data => {
            console.log(data);
            
            return data.json()
        },
        error => {throw Error(error)}
    )
}

export function getReport1(): Promise<Report1[]>{
    return fetch('http://localhost:5000/report/archive').then(
        data => data.json(),
        error => {throw Error(error)})
}
export function getReport2(): Promise<Report2[]>{
    return fetch('http://localhost:5000/report/onhands').then(
        data => data.json(),
        error => {throw Error(error)})
}
export function getReport3(): Promise<Report3[]>{
    return fetch('http://localhost:5000/report/journal').then(
        data => data.json(),
        error => {throw Error(error)})
}

export function patchDocument(documentId:number,inArchive: boolean,workerId: number): Promise<Document[]>{
    return fetch('http://localhost:5000/document',{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            documentId,
            inArchive,
            workerId
        })
    }).then(
        data => data.json(),
        error => {throw Error(error)})
}

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

export function updateDocument(document: Document): Promise<String | Response>{
    return fetch('http://localhost:5000/document',{
        method: 'PUT',
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

export function updateJournal(journal: Journal): Promise<String | Response>{
    return fetch('http://localhost:5000/journal',{
        method: 'PUT',
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

export function updateOrganization(organization: Organization): Promise<String | Response>{
    return fetch('http://localhost:5000/organization',{
        method: 'PUT',
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

export function updateOtdel(otdel: Otdel): Promise<String | Response>{
    return fetch('http://localhost:5000/otdel',{
        method: 'PUT',
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

export function updateWorker(worker: Worker): Promise<String | Response>{
    return fetch('http://localhost:5000/worker',{
        method: 'PUT',
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

