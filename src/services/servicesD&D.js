import axios from 'axios';

export const getSpells = async () => {
    const response = await axios({
        method: 'GET',
        url: 'https://opentdb.com/api.php?amount=10&category=23'
    })

    return response.data.results;
}




export const getSport = async () => {
    const response = await axios({
        method: 'GET',
        url: 'https://opentdb.com/api.php?amount=10&category=21'
    })

    return response.data.results;
}

export const getGeo = async () => {
    const response = await axios({
        method: 'GET',
        url: 'https://opentdb.com/api.php?amount=10&category=22'
    })

    return response.data.results;
}

export const getMusic= async () => {
    const response = await axios({
        method: 'GET',
        url: 'https://opentdb.com/api.php?amount=10&category=12'
    })

    return response.data.results;
}

