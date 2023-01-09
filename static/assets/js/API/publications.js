const publicationsAPI = {
    getQuestions: function(){
        return new Promise(function(resolve, reject) {
            axios
                .get('/myapp/getQuestions/')
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.error));
        });
    },

    getPubHL: function(){
        return new Promise(function(resolve, reject) {
            axios
                .get('/myapp/getPubHL/')
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.error));
        });
    },

    getAllPub: function(){
        return new Promise(function(resolve, reject) {
            axios
                .get('/myapp/getAllPub/')
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.error));
        });
    },

}

export {publicationsAPI}