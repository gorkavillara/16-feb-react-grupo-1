import React from "react"

const Footer = React.memo(({ texto, objeto }: { texto: string, objeto: any }) => {
    React.useEffect(() => {
        let suma = 0
        for (let i = 0; i < 10; i++) {
            suma ++
        }
        console.log(suma)
    }, [])
    return (
        <div style={{ width: "100%", backgroundColor: "rgb(33, 40, 45)" }}>
            {texto}
        </div>
    )
})

export default Footer
