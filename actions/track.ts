import axios from "axios";

const track  = async (code: string) => {
    const data = await axios.post(`https://spoo.me/stats/${code}`, {
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    });
    return data?.data;
}

export default track;