import axios from 'axios'

export const getAllShips = () => {
    return axios.get('https://api.spacexdata.com/v3/ships')
}

export const getSpaceXInfo = () => {
    return axios.get('https://api.spacexdata.com/v3/info')
}