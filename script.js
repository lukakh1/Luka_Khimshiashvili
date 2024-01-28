window.addEventListener('scroll', function () {
  var scrollOverlay = document.getElementById('scrollOverlay');
  var scrolled = window.scrollY;

  scrollOverlay.style.backgroundColor = 'rgba(26,30,31, ' + 0.7 + ')';
  if (scrolled === 0) {
    scrollOverlay.style.backgroundColor = 'rgba(26,30,31,1)';
  }
});

function renderCourse(name, description, imgSrc) {
  const courseCard = document.createElement('div');
  courseCard.classList.add('course-card');

  const nameElement = document.createElement('h2');
  nameElement.textContent = name;

  const descriptionElement = document.createElement('h3');
  descriptionElement.textContent = description;

  const detailsDiv = document.createElement('div');

  const detailsElement = document.createElement('a');
  detailsElement.textContent = 'კურსის დეტალები';
  detailsElement.href = '/';

  const arrow = document.createElement('p');
  arrow.textContent = '->';

  detailsDiv.append(arrow);
  detailsDiv.append(detailsElement);

  const imgElement = document.createElement('img');
  imgElement.src = imgSrc;
  imgElement.alt = name;

  courseCard.appendChild(imgElement);
  courseCard.appendChild(nameElement);
  courseCard.appendChild(descriptionElement);
  courseCard.appendChild(detailsDiv);

  return courseCard;
}

// Example data
const coursesData = [
  {
    name: 'iOS Development',
    description: 'რეგისტრაცია დასრულებულია',
    imgSrc: './assets/iosDevelopment.png',
  },
  {
    name: 'React',
    description: 'რეგისტრაცია დასრულებულია',
    imgSrc: './assets/react.png',
  },
  {
    name: 'Intro to Python',
    description: 'რეგისტრაცია დასრულებულია',
    imgSrc: './assets/python.png',
  },
  {
    name: 'Advanced Python',
    description: 'რეგისტრაცია დასრულებულია',
    imgSrc: './assets/pythonAdvanced.png',
  },
  {
    name: 'Advanced Cybersecurity Course',
    description: 'რეგისტრაცია დასრულებულია',
    imgSrc: './assets/cybersecurity.png',
  },
  {
    name: 'ToT - Training of Trainers',
    description: 'რეგისტრაცია დასრულებულია',
    imgSrc: './assets/tot.png',
  },
  {
    name: 'Blockchain',
    description: 'რეგისტრაცია დასრულებულია',
    imgSrc: './assets/blockchain.png',
  },
  {
    name: 'DevOps',
    description: 'რეგისტრაცია დასრულებულია',
    imgSrc: './assets/devops.png',
  },
  {
    name: 'Information Security Governance',
    description: 'რეგისტრაცია დასრულებულია',
    imgSrc: './assets/ISG.png',
  },
];

const appContainer = document.getElementById('app');

coursesData.forEach((course) => {
  const courseComponent = renderCourse(
    course.name,
    course.description,
    course.imgSrc
  );
  appContainer.appendChild(courseComponent);
});

const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
let currentIndex = 0;
let intervalId;

function showSlide(index) {
  const translateValue = -index * 33.33 + '%';
  slides.style.transform = `translateX(${translateValue})`;
}

function nextSlide() {
  clearInterval(intervalId);
  currentIndex = (currentIndex + 1) % 3;
  showSlide(currentIndex);
  startInterval();
}

function prevSlide() {
  clearInterval(intervalId);
  currentIndex = (currentIndex - 1 + 3) % 3;
  showSlide(currentIndex);
  startInterval();
}

function startInterval() {
  intervalId = setInterval(nextSlide, 5000);
}
startInterval();

function toggleAnswer(answerId, questionId) {
  const answer = document.getElementById(answerId);
  const question = document.getElementById(questionId);

  const isAnswerVisible = answer.style.display === 'block';

  const allAnswers = document.querySelectorAll('.answer');
  allAnswers.forEach((a) => (a.style.display = 'none'));

  const allQuestions = document.querySelectorAll('.rotation');
  allQuestions.forEach((q) => (q.style.transform = 'rotate(180deg)'));

  if (!isAnswerVisible) {
    answer.style.display = 'block';
    question.style.transform = 'none';
  }
}

function toggleMenu() {
  console.log('loliloliloli');
}

let prevScrollPos = window.pageYOffset;
const header = document.getElementById('scrollOverlay');

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  if (window.innerWidth < 980) {
    if (prevScrollPos > currentScrollPos) {
      header.classList.remove('hide-header');
    } else {
      header.classList.add('hide-header');
    }
    prevScrollPos = currentScrollPos;
  } else {
    header.classList.remove('hide-header');
  }
};
