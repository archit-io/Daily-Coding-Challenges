// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"


function printerError(s) {
    const str = 'abcdefghijklm'.split('')
    const s2 = s.split('').filter(value => !str.includes(value)).length
    return (`${s2}/${s.length}`)
}