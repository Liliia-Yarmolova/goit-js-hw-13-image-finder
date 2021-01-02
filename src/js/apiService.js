import { data } from "autoprefixer"

 const API_KEY = '19739555-5815abfc01a0b192a3e5ab9b1'

export default {
    searchQuery: '',
    page: 1,

    fetchCards() {
   
        const BASE_URL = 'https://pixabay.com/api/'
    
        return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`)
            .then(res => res.json())
            .then(({ hits }) => {
                this.incrementPage()
                return hits
            })
            .catch(error => console.log(error))
    },
 
    resetPage() {
        this.page = 1;
    },
    
    incrementPage(){
        this.page += 1
},

    get query() {
        return this.searchQuery
    },

    set query(value) {
        this.searchQuery=value
    }
}
 
