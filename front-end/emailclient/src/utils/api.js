import * as axios from 'axios';

export async function getEmailsByReceiver(receiver) {

    const response = await axios.get("http://localhost:8000/email")

    console.log(response);
}

