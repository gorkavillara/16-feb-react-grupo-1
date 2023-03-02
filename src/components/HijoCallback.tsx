import React from "react"

const HijoCallback = React.memo(({ promesa }: { promesa: () => Promise<any> }) => {
    return <div>HijoCallback</div>
})

export default HijoCallback
