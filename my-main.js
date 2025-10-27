// ------------Code for toggle-theme-------
const toggleThemeBtns = document.querySelectorAll('.toggle-theme');
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    toggleThemeBtns.forEach(btn => {
        btn.innerHTML = `<i class='bx bx-sun dark-theme-toggle'></i>`;
    });
} else {
    document.body.classList.remove('dark-theme');
    toggleThemeBtns.forEach(btn => {
        btn.innerHTML = `<i class='bx bxs-moon dark-theme-toggle'></i>`;
    });
}
toggleThemeBtns.forEach((toggleThemeBtn) => {
    toggleThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            toggleThemeBtn.innerHTML = `<i class='bx bx-sun dark-theme-toggle'></i>`;
            localStorage.setItem('theme', 'dark');
        } else {
            toggleThemeBtn.innerHTML = `<i class='bx bxs-moon dark-theme-toggle'></i>`;
            localStorage.setItem('theme', 'light');
        }
    });
});
//------------End Code for toggle-theme-------


// ----------Code for responsive design for opening and closing navgation --------
const openNav = document.querySelector('.bar');
openNav.addEventListener('click', ()=>{
    const openNavBars = document.querySelectorAll('.bars');
    openNavBars.forEach(bars =>{
        bars.classList.toggle('active');
        if(bars.classList.contains('active')){
           openNavBar();
        }else{
            closeNavBar();
        }
    });
});

//-------Code for closing responsive bar when clicking on each link on the bars --------
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link =>{
    link.addEventListener('click',()=>{
        closeNavBar();
        const openNavBars = document.querySelectorAll('.bars');
        openNavBars.forEach(bars =>{
        bars.classList.toggle('active');});
    });
});

//---------function code for opening and closing responsive bar   
function openNavBar(){
    const navBar = document.querySelector('nav');
    navBar.classList.add('active');
}
function closeNavBar(){
    const navBar = document.querySelector('nav');
    navBar.classList.remove('active');
}
// ---------End code for responsive design-----


// CODE FOR HOME AUTO TYPED
let typed = new Typed(('.name'),{
    strings : ['Developer', 'Instructor', 'Freelancer'],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay: 1000,
    loop: true
})

// -----CODE FOR POP-OUT

 function addPopOut(){
    const popOutContainer = document.querySelector('.about-read-more');
    popOutContainer.classList.add('active')
 }
 function removePopOut(){
    const popOutContainer = document.querySelector('.about-read-more');
    popOutContainer.classList.remove('active')
 }

document.querySelector('.read-more-btn').addEventListener('click', ()=>{addPopOut()});
document.querySelector('.close-about').addEventListener('click',()=>{removePopOut()});
// ----------END CODE FOR ABOUT POP_OUT


// -------Code for form validation and sending message---------

let loading = false;
const sendMessageBtn = document.getElementById('send-message')
async function sendMessage(){
    loading = true;
    updateButtonState()
    const fname = document.getElementById('fname')
    const oname = document.getElementById('oname')
    const email = document.getElementById('email')
    const message = document.getElementById('message')

    if(!fname.value || !oname.value || !email.value || !message.value){
        alert("All fields are required");
        loading = false;
        updateButtonState();
        return;
    }

    let inputMessages = {
        f_name: document.getElementById('fname').value,
        o_name: document.getElementById('oname').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    const serviceID = 'service_te9lr6a';
    const templateID = 'template_agf975b'; 

    try{
        await emailjs.send(serviceID, templateID, inputMessages)
        document.getElementById('fname').value = "";
        document.getElementById('oname').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
        alert('Your message sent successfully');
    }catch(error){
        alert(`Something occured: ${error.message}`);
        console.log(error.message);
    }finally{
        loading = false;
        updateButtonState();
    }
}
function updateButtonState(){
    if(loading){
        sendMessageBtn.textContent = "Loading"
        sendMessageBtn.disabled = true;

    }else{
        sendMessageBtn.textContent = "Send Message"
        sendMessageBtn.disabled = false;
    }
}
sendMessageBtn.addEventListener("click", sendMessage)
// -------End code for form validation and sending message---------


// --------Code for Buttons on Project---------
function showDetails(service) {
    switch (service) {
        case 'website':
            alert("I specialize in building modern, responsive, and scalable websites using the latest technologies like HTML, CSS, JavaScript, and CSS frameworks Tailwind CSS.");
            window.location.href = '#project';
            break;
        case 'teaching':
            alert("I offer beginner to advanced web development courses, covering HTML, CSS, JavaScript, and more. Let's build your skills together!");
            break;
        case 'freelancing':
            alert("Available for freelance web development projects. Let's collaborate to create something amazing!");
            window.location.href = '#contact';
            break;
        default:
            alert("Please select a valid service.");
    }
}

// --------Code for copyright year-------
const dateAPI = new Date();
const getYear = dateAPI.getFullYear();
document.querySelector('.year').textContent = getYear;
// --------End code for copyright year-------