/* eslint-disable @typescript-eslint/no-unused-vars */

import Contador from "./Contador"

const suma = (a: number, b: number) => a + b

function ejecutaCallback(callback: () => any) {
    console.log("Ejecutando callback")
    return callback()
}

test("Nuestro primer test", () => {
    const valor = suma(2, 3)
    console.log(valor)
    expect(valor).toBe(5)
})

describe("Testeando sumas", () => {
    test("Suma 0 + 0", () => {
        expect(suma(0, 0)).toBe(0)
    })
    xit("Suma números negativos", () => {
        expect(suma(-10, -50)).toBe(-60)
    })
})

describe("Testeando objetos", () => {
    it("Un objeto es otro objeto", () => {
        const miObj = { coche: "Ferrari" }
        const miSegundoObj = miObj
        expect(miObj).toBe(miSegundoObj)
        expect(miObj).toEqual(miSegundoObj)
    })
    it("Un objeto no es otro objeto", () => {
        const miObj = { coche: "Ferrari" }
        const miSegundoObj = { ...miObj }
        // const miSegundoObj = Object.structuredClone(miObj)
        expect(miObj).not.toBe(miSegundoObj)
        expect(miObj).toEqual(miSegundoObj)
    })
})

describe("Testeando mocks", () => {
    it("Testeamos nuestro primer mock", () => {
        const miMock = jest.fn()

        ejecutaCallback(miMock)

        // console.log(miMock)

        expect(miMock).toBeCalledTimes(1)
    })
})

class MiClaseEspia {
    funcionPrimaria() {
        console.log("Estoy llamando a la función primaria")
        this.funcionSecundaria("Hola mundo")
    }

    funcionSecundaria(texto: string) {
        console.log(texto)
    }
}

describe("Testeando spies", () => {
    it("Testeamos nuestro primer spy", () => {
        const miObjeto = new MiClaseEspia()

        const funcionEspia = jest.spyOn(miObjeto, "funcionSecundaria")

        miObjeto.funcionPrimaria()

        expect(funcionEspia).toBeCalled()
        expect(funcionEspia).toBeCalledWith("Hola mundo")
    })
})
