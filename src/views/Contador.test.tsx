import { render, screen, fireEvent } from "@testing-library/react"
import Contador from "./Contador"

it("Renders correctly", () => {
    const view = render(<Contador />)
    expect(view).toBeDefined()
})

describe("Testing Contador component's elements", () => {
    beforeAll(() => {
        console.log("Just before launching all the tests")
    })

    it("There is an element containinng the text 'Valor: 0'", () => {
        render(<Contador />)
        const titulo = screen.getByText("Valor: 0")
        expect(titulo).toBeDefined()
        // console.log(titulo)
        // expect(titulo).toHaveStyle("color: red")
    })

    it("There is an element with label 'title' which has bold style", () => {
        render(<Contador />)
        const titleElement = screen.getByLabelText("title")

        expect(titleElement).toHaveStyle("font-weight: bold")
    })
})

describe("Testing Contador features", () => {
    it("Starts with 'Valor: 0'", () => {
        render(<Contador />)
        const title = screen.getByLabelText("title")
        expect(title).toHaveTextContent("Valor: 0")
    })

    it("Increments the value when pressing 'Más'", () => {
        render(<Contador />)
        const plusButton = screen.getByText("Más")
        fireEvent.click(plusButton)
        // El texto tiene que haber cambiado
        
        const title = screen.getByLabelText("title")
        expect(title).toHaveTextContent("Valor: 1")
    })
    
    it("Decrements the value when pressing 'Menos'", () => {
        render(<Contador />)
        const plusButton = screen.getByText("Menos")
        fireEvent.click(plusButton)
        // El texto tiene que haber cambiado
        
        const title = screen.getByLabelText("title")
        expect(title).toHaveTextContent("Valor: -1")
    })
})