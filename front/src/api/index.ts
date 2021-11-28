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
export function getJournals(): Promise<Journal[]>{
    return fetch('http://localhost:5000/journal').then(
        data => data.json(),
        error => {throw Error(error)})
}
export function getOrganizations(): Promise<Organization[]>{
    return fetch('http://localhost:5000/organization').then(
        data => data.json(),
        error => {throw Error(error)})
}
export function getOtdels(): Promise<Otdel[]>{
    return fetch('http://localhost:5000/otdel').then(
        data => data.json(),
        error => {throw Error(error)})
}
export function getWorkers(): Promise<Worker[]>{
    return fetch('http://localhost:5000/worker').then(
        data => data.json(),
        error => {throw Error(error)})
}