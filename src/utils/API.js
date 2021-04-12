import axios from 'axios';

const BASEURL = 'https://randomuser.me/api/?results=30';

const search = {
    getAllUsers: function() {
        return axios.get(BASEURL).then(({data}) =>{
            return data.results
        })
    }
};

export default search;