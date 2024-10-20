const biodata = document.querySelector('#profile');

document.querySelector('#profile-button').onclick = (event) => {
    biodata.classList.toggle('active');
    event.preventDefault();
};
