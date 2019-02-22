import * as axios from 'axios';

const url = "http://localhost:8000/email";

export async function getEmailsByReceiver(receiver) {

    const response = await axios.get(`${url}/?receiver=${receiver}`)

    return getEmailsHelper(response);
}

export async function getEmailsBySender(sender) {

    const response = await axios.get(`${url}/?sender=${sender}`)

    return getEmailsHelper(response);
}

export async function saveNewEmail(object) {
    sendPostRequest(object);
}

export async function deleteEmailById(object) {
    sendPostRequest(object);
}

export async function archiveEmailById(object) {
    sendPostRequest(object);
}

function getEmailsHelper(response) {

    if (response.status === 200) {
        return response.data;
    } else {
        return undefined;
    }
}

async function sendPostRequest(object) {

    const response = await axios.post(url, object);

    console.log(response);
}