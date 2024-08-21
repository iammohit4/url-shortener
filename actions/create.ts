import axios from "axios";

const create = async (url: string) => {
    const data = await axios.post("https://spoo.me/", {
        url: url
    }, {
        headers: {
            Accept: "application/json",
            "content-type": "application/x-www-form-urlencoded"
        }
    });
    return data?.data?.short_url;
}

export default create;