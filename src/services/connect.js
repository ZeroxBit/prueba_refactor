import {url_api} from "../config/config.json";

export const cnn = (path, options = null) => {
    return fetch(`${url_api}${path}`, {
        ...options
    })
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
            throw new Error('Ocurrito un error en la peticion')
        });
}
