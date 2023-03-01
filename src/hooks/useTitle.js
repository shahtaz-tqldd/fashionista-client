import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Fashionista - ${title}`
        window.scrollTo({ top: 0 })
    }, [title])
}

export default useTitle