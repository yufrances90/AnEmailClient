export function formatDate(ts) {

    if(ts === undefined) {
        return null;
    }

    const date = new Date(ts)

    const day = date.getDate();
    const month = date.getMonth(); //Be careful! January is 0 not 1
    const year = date.getFullYear();

    return (month + 1) + "/" + day + "/" + year;
}