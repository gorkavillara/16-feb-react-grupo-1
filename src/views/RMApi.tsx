import React, { useState } from "react"
import axios from "axios"
import AstronautaLoader from "components/loaders/AstronautaLoader"
import { rmService } from "services/http"
import { RMCharacter } from "models"

const apiUrl = "https://rickandmortyapi.com/api/character"

const RMApi = () => {
    const [charNumber, setCharNumber] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false)
    const [character, setCharacter] = useState<RMCharacter | null>(null)

    const fetchCharacter = () => {
        console.log(`Fetching character ${charNumber}...`)
        // Fetch your character
        const url = `${apiUrl}/${charNumber}`
        console.log(url)
        fetch(url, {
            method: "GET",
            headers: { Authorization: "Bearer ......" },
        })
            .then((rawData) => rawData.json())
            .then((res) => console.log(res))
            .catch((error) => console.error(error))
    }

    const axiosCharacter = async () => {
        setLoading(true)
        console.log(`Fetching character ${charNumber} with axios...`)
        // Fetch your character
        const url = `${apiUrl}/${charNumber}`
        console.log(url)

        // axios.get(url)
        //     .then(r => console.log(r))
        //     .catch(e => console.error(e))

        // rmService.get(`${charNumber}`)
        //     .then((res) => {
        //         console.log(res)
        //     })
        //     .catch(console.error)
        //     .finally(() => {
        //         setLoading(false)
        //     })
        const res = await rmService
            .get<RMCharacter>(charNumber.toString())
            .catch(console.error)

        setLoading(false)
        if (!res) return

        setCharacter(res.data)
        // const character = res.data
        // console.log({ character })

        // const charUrl = res.data.url
        // console.log({ charUrl })

        // console.log(res)
    }

    return (
        <div
            style={{
                backgroundColor: loading ? "rgba(100, 100, 100, 0.8" : "white",
            }}
        >
            <h2>Choose your Character</h2>
            <input
                type="number"
                value={charNumber}
                onChange={(e) => setCharNumber(Number(e.target.value))}
            />
            <button onClick={fetchCharacter} disabled={loading}>
                Fetch
            </button>
            <button onClick={axiosCharacter} disabled={loading}>
                Axios
            </button>
            {loading && (
                <div>
                    <AstronautaLoader />
                </div>
            )}
            {character && !loading && (
                <div className="card">
                    <div className="img">
                        <img src={character.image} alt={character.name} />
                    </div>
                    <div className="details">
                        <ul>
                            <li>Name: {character.name}</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default RMApi
