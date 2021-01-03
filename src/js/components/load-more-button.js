const loadMoreBtn = {
    refs: {
        button: document.querySelector('[data-action="load-more"]'),
        label: document.querySelector('[data-action="load-more"] > .label'),
        spinner: document.querySelector('[data-action="load-more"] > .spinner'),
},

    enable() { 
        this.refs.button.disabled = false;
        this.refs.label.textContent = 'Load More';
        this.refs.spinner.classList.add('is-hidden');
    },

    disable() {
        this.refs.button.disabled = true;
        this.refs.label.textContent = 'Loading...';
        this.refs.spinner.classList.remove('is-hidden');
    },

    show() {
        this.refs.button.classList.remove('is-hidden')
    }
}

export default loadMoreBtn;