import { render, screen, fireEvent } from "@testing-library/react"
import PokeList from "./PokeList"
import axios from "axios"

describe("Testing the pokelist", () => {
    it("Clicking the button shows 50 pokemon", async () => {
        render(<PokeList />)
        const pokeButton = screen.getByText("Show Pokemon")

        fireEvent.click(pokeButton)

        // const pokeListUl = await screen.findByLabelText("pokemon-list")
        const pokemonLis = await screen.findAllByLabelText("pokemon")
        expect(pokemonLis).toHaveLength(50)
    })
})

describe("Mocking axios fetch", () => {
    // let myMock: jest.Mock<any, any>;
    // const mockedAxios = axios as jest.Mocked<typeof axios>
    beforeAll(() => {
        // myMock = jest.fn()
        jest.mock("axios", () => ({
            get: () =>
                Promise.resolve({
                    data: {
                        success: true,
                    },
                }),
            // get: myMock
        }))
        // myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
        // jest.mock("axios")
        // mockedAxios.get.mockResolvedValue({ data: { results: [] } })
    })
    it("Mocks axios throwing controlled data", async () => {
        const res = await axios.get(
            "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
        )
        console.log(res)
    })
})
