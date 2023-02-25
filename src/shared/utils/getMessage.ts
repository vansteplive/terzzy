export const getMessage = (question: number) => {
    const messages: Record<number,string> = {
        1: 'Create a stunning images with help of 3D renderings – drive clicks and increase conversion.',
        2: 'text 2',
        3: 'text 3',
        4: 'text 4',
        5: 'text 5',
        6: 'text 6',
        7: 'text 7',
        8: 'text 8',
    }
    return messages[question]
}
