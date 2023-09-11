// Section de Habilidades y Hobbies

const skillsData = [
    { imgSrc: 'assets\\htlm.png', skillName: 'HTML 5' },
    { imgSrc: 'assets\\js_icon.png', skillName: 'Javascript' },
    { imgSrc: 'assets\\java.png', skillName: 'Java' },
    { imgSrc: 'assets\\nodejs_icon.png', skillName: 'Node JS' },
    { imgSrc: 'assets\\bootstrap_icon.png', skillName: 'Boostrap' },
    { imgSrc: 'assets\\css_icon.png', skillName: 'CSS' },
    { imgSrc: 'assets\\spring_icon.png', skillName: 'Springboot' },
    { imgSrc: 'assets\\mysql_icon.png', skillName: 'MySQL' },
  ];
  
  const hobbiesData = [
    
    { imgSrc: 'assets\\football.png', hobbyName: 'Jugar Futbol' },
    { imgSrc: 'assets\\snowboard.png', hobbyName: 'Hacer Snowboard' },
    { imgSrc: 'assets\\traveling.png', hobbyName: 'Viajar' },
    { imgSrc: 'assets\\asado.png', hobbyName: 'Hacer Asados' },
    { imgSrc: 'assets\\musica.png', hobbyName: 'Escuchar Musicar' }
  ];
  
  function createBoxes(containerId, data) {
    const container = document.getElementById(containerId);
    data.forEach(item => {
      const box = document.createElement('div');
      box.classList.add(`${containerId.slice(0, -4)}__box`);
  
      const list = document.createElement('ul');
      const imgItem = document.createElement('li');
      const img = document.createElement('img');
      img.src = item.imgSrc;
      imgItem.appendChild(img);
  
      const nameItem = document.createElement('li');
      nameItem.classList.add(`${containerId.slice(0, -4)}__name`);
      nameItem.textContent = item.skillName || item.hobbyName;
  
      list.appendChild(imgItem);
      list.appendChild(nameItem);
      box.appendChild(list);
  
      container.appendChild(box);
    });
  }
  
  createBoxes('skillsLine', skillsData);
  createBoxes('hobbiesLine', hobbiesData);

// Seccion de Formacion Academica

const academicData = [
    { logoSrc: 'assets\\logo-ies.png', courseTitle: 'Analista de Sistemas', subtitle: '2023 - Actualidad' },
    { logoSrc: 'assets\\egg-logo.png', courseTitle: 'Formación en UX Design', subtitle: '2019 - Alura' },
    { logoSrc: 'assets\\ufrj_logo.png', courseTitle: 'Posgrado en diseño', subtitle: 'En curso - UFRJ' },
];

function createAcademicCourses(data) {
    const academicCoursesContainer = document.getElementById('academicCourses');
    data.forEach(item => {
        const courseBox = document.createElement('div');
        courseBox.classList.add('academic__courses__box');

        const courseList = document.createElement('ul');
        courseList.classList.add('academic__courses__list');

        const logoItem = document.createElement('li');
        const logoImg = document.createElement('img');
        logoImg.src = item.logoSrc;
        logoItem.appendChild(logoImg);

        const titleItem = document.createElement('li');
        titleItem.classList.add('academic__courses__item__title');
        titleItem.innerHTML = `<h4>${item.courseTitle}</h4>`;

        const subtitleItem = document.createElement('li');
        subtitleItem.classList.add('academic__courses__item__subtitle');
        subtitleItem.innerHTML = `<p>${item.subtitle}</p>`;

        courseList.appendChild(logoItem);
        courseList.appendChild(titleItem);
        courseList.appendChild(subtitleItem);

        // Elemento invisible para crear espacio
        const spaceItem = document.createElement('div');
        spaceItem.classList.add('academic__courses__space');
        courseList.appendChild(spaceItem);
        
        courseBox.appendChild(courseList);
        academicCoursesContainer.appendChild(courseBox);
    });
}

createAcademicCourses(academicData);




