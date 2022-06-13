// write a function maskify, which changes all but the last four characters into '#'

function maskify(cc) {
    return cc.split('').fill('#',0, -4).join('')
   }