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