import * as axios from 'axios';

const url = "http://localhost:8000/email";

export async function getEmailsByReceiver(receiver) {

    const response = await axios.get(`${url}/?receiver=${receiver}`)

    if (response.status === 200) {
        return response.data
    } else {
        return undefined
    }
}

export async function getEmailsBySender(sender) {

    const response = await axios.get(`${url}/?sender=${sender}`)

    if (response.status === 200) {
        return response.data
    } else {
        return undefined
    }
}

export async function saveNewEmail(object) {

    const response = await axios.post(url, object);

    console.log(response);
}

