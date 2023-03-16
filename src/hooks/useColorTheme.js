import {useEffect, useState} from "react";


const useColorTheme = () => {

    const [stateTheme, setStateTheme] = useState('')

    useEffect(() => {
        getDefaultTheme()
    }, [])


    const getDefaultTheme =() => {
        let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        loadTheme(theme)
    }

    const changeTheme = () => {
        let theme = stateTheme

        if (theme === 'dark'){
            theme = 'light'
        }else {
            theme = 'dark'
        }
        loadTheme(theme)
    }

    const loadTheme = (theme) => {
        const root = document.querySelector(':root')
        root.setAttribute('color-scheme', `${theme}`)
        setStateTheme(theme)
    }

    return [stateTheme, changeTheme]

}

export default useColorTheme