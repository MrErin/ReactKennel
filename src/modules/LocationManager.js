const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function(id){
            return fetch(`${remoteURL}/locations/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function(){
            return fetch(`${remoteURL}/locations`).then(e => e.json())
        }
    },
    removeAndList: {
        value: function(id){
            return fetch(`${remoteURL}/locations/${id}`,{method: "DELETE"}).then(e => e.json()).then(() => fetch(`${remoteURL}/locations`)).then(e => e.json())
        }
    }
})