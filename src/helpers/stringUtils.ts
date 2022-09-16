export const fixSpecialCharacters = (x: string): string => x
    .replace('&aacute;','á')
    .replace('&eacute;','é')
    .replace('&iacute;','í')
    .replace('&oacute;','ó')
    .replace('&uacute;','ú')
    .replace('&ntilde;', 'ñ')
    .replace('Ã¡', 'á')
    .replace('Ã¡', 'á')
    .replace('Ã©', 'é')
    .replace('Ã³', 'ó')
    .replace('Ã±', 'ñ')
    .replace('í±', 'ñ')
    .replace('Ãº', 'ú')
    .replace('Ã', 'í')


export const replaceSpecialCharactersForEachField = (entity: any) => {
    Object.keys(entity).forEach(key => {
        if (typeof entity[key] === "string") {
            entity[key] = fixSpecialCharacters(entity[key]);
        }
    })
}
