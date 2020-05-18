const checkbox = document.getElementById('checkbox')
const root = document.documentElement;

        



//         --toggle-background:linear-gradient(to right, var(--toggle1) 0%,var(--toggle2) 100%);

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    checkbox.setAttribute('checked', true)
}

checkbox.addEventListener('change', (event) => {
    if(this.event.target.checked){
        root.style.setProperty('--bodyBackground', '#1d2029')
        root.style.setProperty('--bodyColor', '#fff')
        root.style.setProperty('--gray', 'hsl(228, 34%, 66%)')
        root.style.setProperty('--cardGray', 'hsl(228, 28%, 20%)')
        root.style.setProperty('--headerGray', 'hsl(232, 19%, 15%)')
        root.style.setProperty('--toggle-background', 'linear-gradient(to right, var(--toggle1) 0%,var(--toggle2) 100%)')
    }
    else{
        root.style.setProperty('--bodyBackground', '#fff')
        root.style.setProperty('--bodyColor', '#00000')
        root.style.setProperty('--gray', '#6f7279')
        root.style.setProperty('--cardGray', 'hsl(227, 47%, 96%)')
        root.style.setProperty('--headerGray', 'hsl(225, 100%, 98%)')
        root.style.setProperty('--toggle-background', '#aeb2cb')
    }
    
})