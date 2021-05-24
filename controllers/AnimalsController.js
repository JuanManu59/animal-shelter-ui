import axios from 'axios';

export const AnimalController = {
    register(animal) {
        return axios({
            method: 'POST',
            baseURL: process.env.API,
            url: `animals`,
            data: animal,
            headers:{
                'Content-Type': 'application/json'
            }
        })
    },
    list() {
        return axios({
            method: 'GET',
            baseURL: process.env.API,
            url: 'animals'
        });
    },
    delete(animal) {
        return axios({
            method: 'DELETE',
            baseURL: process.env.API,
            url: `animals/${animal}`,
        });
    },
}

