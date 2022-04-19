export const enum Types {
    USER = 'user',
    TAB = 'tab',
    COLLAPSE = 'collapse',
}

export interface ITab {
    title: string,
    path: string
}
export interface ICollapse {
    count: number,
    collapse: boolean
}