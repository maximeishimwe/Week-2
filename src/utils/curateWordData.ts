import { CuratedWordData, WordDataResponse } from "../types/types"

function getSizeInBytes(obj: object): number {
    const jsonString = JSON.stringify(obj);
    return new Blob([jsonString]).size;
}

function getBiggestEntry(data: Array<WordDataResponse>): WordDataResponse {
    let biggestEntry = data[0]
    let biggestEntrySize = getSizeInBytes(biggestEntry)

    for (let i = 1; i < data.length; i++) {
        const entrySize = getSizeInBytes(data[i])
        if (entrySize > biggestEntrySize) {
            biggestEntry = data[i]
            biggestEntrySize = entrySize
        }
    }
    return biggestEntry
}

function curateWordData(rawData: Array<WordDataResponse>): CuratedWordData {
    const entry = getBiggestEntry(rawData)

    const { word, phonetic, meanings } = entry
    const sourceURL = entry.sourceUrls[0]

    // Go through the phonetics array and find one with an audio URL
    const audioPhonetic = entry.phonetics.find(phonetic => phonetic.audio !== "");
    const audioURL = audioPhonetic ? audioPhonetic.audio : null;

    const curatedWordData = {
        word,
        phonetic,
        audioURL,
        sourceURL,
        meanings,
    }

    return curatedWordData
}

export default curateWordData