const positionsAPI = {

    getPositions: function(){
        return new Promise(function(resolve, reject) {
            axios
                .get('/myapp/getPositions/')
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.error));
        });
    },


}

export {positionsAPI}