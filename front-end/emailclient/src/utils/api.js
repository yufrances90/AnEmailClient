import * as axios from 'axios';

export async function getEmailsByReceiver(receiver) {

    const response = await axios.get("http://localhost:8000/email")

    if (response.status === 200) {
        return response.data
    } else {
        return undefined
    }
    
}

