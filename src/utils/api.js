const api = 'https://api.shrtco.de/v2/'

export async function apiShortening({url}) {
    const response = await fetch(` ${api}shorten?url=${url}/very/long/link.html`)
    const data = await response.json()
    return data
}