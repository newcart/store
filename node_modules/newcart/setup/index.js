/**
 * Expose `newCart/Util`.
 */
module.exports = newCartSetup
module.exports.newCartSetup = newCartSetup
module.exports.newCartSetup.getCountries = getCountries
module.exports.newCartSetup.getCities = getCities
module.exports.newCartSetup.getTowns = getTowns

function getCountries() {
    return [
        { code: "TR", name: "Türkiye", status: 1 },
        { code: "RU", name: "Rusya", status: 1 },
    ]
}
function getCities() {
    return [
        { country: "TR", code: "TR001", name: "Adana", status: 1 },
        { country: "TR", code: "TR002", name: "Adıyaman", status: 1 },
        { country: "TR", code: "TR003", name: "Afyon", status: 1 },
        { country: "RU", code: "RU001", name: "Moskova", status: 1 },
    ]
}
function getTowns() {
    return [
        { city: "TR001", code: "TR001001", name: "Merkez", status: 1 },
        { city: "TR001", code: "TR001002", name: "Kozan", status: 1 },
        { city: "TR002", code: "TR002001", name: "Merkez", status: 1 },
        { city: "TR002", code: "TR002002", name: "Besni", status: 1 },
        { city: "TR003", code: "TR003001", name: "Merkez", status: 1 },
        { city: "TR003", code: "TR003002", name: "Çay", status: 1 },
    ]
}

function newCartSetup() {
}
