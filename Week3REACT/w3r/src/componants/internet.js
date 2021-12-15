
const templist = [{name : 'Bananna', amount : 1, type : 'Produce', key:0},
{name : 'Milk Carton', amount : 1, type : 'Dairy', key:1},
{name : 'Cheese', amount : 5, type : 'Dairy', key:2},
{name : 'Delete Test', amount : 0, type : 'Test', key:3}];

const urlid = 'a9864f3377a54dd1ad13c75eb9ff6f9b'

const url = 'https://crudcrud.com/api/' + urlid

class internet {


    get = async () => {
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log('Error:', e)
        }
    }


    defaultset = async () => {
        try {
            const resp = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(templist)
            });
            return await resp.json();
        } catch (e) {
            console.log('Error:', e);
        }
    }

    set(index, key, val){
        //
        templist[index] = {[key] : val};
        return templist;
    }

    remove(id){
        //
        templist = templist.filter((e) => (id !== e.key))
        return templist;
    }

    add(item){
        //
        templist.push(item);
        return templist;
    }


}

export const call = new internet