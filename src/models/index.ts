export interface IFormData {
    nombre: string
    apellido: string
    ciudad: string
    edad: number
    isDeveloper: boolean
}

export type FormDataValidation<T> = {
    [Property in keyof T]?: string
}

export interface RMCharacter {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    image: string
    created: Date
    url: string
}