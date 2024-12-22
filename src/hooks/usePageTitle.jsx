import { useEffect } from "react"

const usePageTitle = (title) => {
    useEffect(() => {
        const $title = document.getElementsByTagName("title")[0] // Dom요소 저장
        $title.innerText = title
    },[title])
}

export default usePageTitle