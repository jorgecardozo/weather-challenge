import { Theme } from "../context/ThemeContext";

export const changeCssRootVariables = (theme: Theme) => {

    const root = document.querySelector(':root') as HTMLElement;

    const components = [
        'body-background',
        'components-background',
        'card-background',
        'card-shadown',
        'text-color'
    ]

    components.map((component) => {
        root.style.setProperty(`--${component}-default`,
        `var(--${component}-${theme})`)
    })
    
}