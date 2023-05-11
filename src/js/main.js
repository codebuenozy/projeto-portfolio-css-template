const switchThemeElement = document.querySelector('.switch__theme');
switchThemeElement.addEventListener('change', () => {
    const bodyElem = document.querySelector('body');
    const lightImage = document.querySelector('.theme__light');
    const darkImage = document.querySelector('.theme__dark');
	const profilePhoto = document.querySelector('.photo');
   
    if(!switchThemeElement.checked) {
        bodyElem.classList.remove('dark');
        lightImage.src = './src/img/sun-active.svg';
        darkImage.src = './src/img/moon.svg';
		profilePhoto.src = './src/img/avatar1.png';
        return
    } 
    
    bodyElem.classList.add('dark');
    lightImage.src = './src/img/sun.svg';
    darkImage.src = './src/img/moon-active.svg';
	profilePhoto.src = './src/img/avatar2.png';
})