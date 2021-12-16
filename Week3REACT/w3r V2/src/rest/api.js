//const ENDPOINT = 'https://crudcrud.com/api/e84448fea62e4f3299fed97155c4193a'
const ENDPOINTnew = 'https://api.thecatapi.com/v1';
const ENDPOINT = 'https://api.thecatapi.com/v1';
const Akey = '4bec27d4-cf08-4cda-9b83-264d346b6bf0';

class Api {
    get = async (end) => {
        try {
            const resp = await fetch(`${ENDPOINT}/${end}`, {
                method: 'GET',
                headers: {
                    'x-api-key': Akey
                    }
                });
            const data = await resp.json();
            return data;
        } catch (e) {
            console.log('Error:', e);
        }
    }
// /images/search?size=small&limit=5
    put = async (item) => {
        try {
            const resp = await fetch(`${ENDPOINT}/${item._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': Akey
                },
                body: JSON.stringify(item)
            });
        } catch (e) {
            console.log('Error:', e);
            
        }
    }

    post = async (itemid,end) => {
        try {
            const resp = await fetch(`${ENDPOINT}/${end}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': Akey
                },
                body: JSON.stringify({'image_id': itemid})
            })
        } catch (e) {
            console.log('Error:', e);
        }
    }

    delete = async (itemid,end) => {
        try {
            const resp = await fetch(`${ENDPOINT}/${end}/${itemid}`, {
                method: 'DELETE',
                headers: {
                    'x-api-key': Akey
                }
            })
        } catch (e) {
            console.log('Error:', e);
        }
    }
}

export const ItemAPI = new Api();