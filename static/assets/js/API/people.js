const peopleAPI = {

    getLabCollabs: function(){
        return new Promise(function(resolve, reject) {
            axios
                .get('/myapp/getLabCollabs/')
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.error));
        });
    },

    getLabMembers: function(){
        return new Promise(function(resolve, reject) {
            axios
                .get('/myapp/getLabMembers/')
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.error));
        });
    },

}

export {peopleAPI}