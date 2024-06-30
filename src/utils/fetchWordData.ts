import curateWordData from "./curateWordData"

const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/' // Word goes after this

function fetchWordData(word: string) {
    return fetch(`${API_URL}${word}`)
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data)) { // If the data is an array, it means that the word was found
                return curateWordData(data)
            } else {
                // If no data is found, return the data as is to displkay the error message
                return data
            }
        })
        .catch(err => {
            console.error(err)
            throw err
        })
}

export default fetchWordData