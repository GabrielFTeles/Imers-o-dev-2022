const fileTabs        = document.querySelectorAll('.tabs-menu .file-option');
const sideBarOptions  = document.querySelectorAll('.side-bar-option');
const explorerOptions = document.querySelectorAll('.explorer-content .file-option');

const homeSection     = document.querySelector('.home-section');
const projectsSection = document.querySelector('.projects-section');

const sectionsArray = [homeSection, projectsSection];

let activeTab     = fileTabs[2];
let activeSideBar = sideBarOptions[2];
let activeSection = sectionsArray[1];


fileTabs.forEach((element, index) => {
  element.addEventListener('click', () => {
    fileTabPressed(element, index);
    showActiveSection(index);
  })
})

function fileTabPressed(tabPressed, index) {
  if(tabPressed === activeTab) {
    return;
  }

  activeTab.classList.remove('active');
  activeSideBar.classList.remove('active');

  tabPressed.classList.add('active');
  sideBarOptions[index].classList.add('active');
  
  activeTab     = tabPressed;
  activeSideBar = sideBarOptions[index];
}

sideBarOptions.forEach((element, index) => {
  element.addEventListener('click', () => {
    sideBarOptionPressed(element, index);
    showActiveSection(index);
  })
})

function sideBarOptionPressed(optionPressed, index) {
  const isAlreadyActive     = optionPressed === activeSideBar;
  const configOptionPressed = optionPressed === sideBarOptions[6];

  if(isAlreadyActive || configOptionPressed) {
    return;
  }

  activeSideBar.classList.remove('active');
  activeTab.classList.remove('active');

  optionPressed.classList.add('active');
  fileTabs[index].classList.add('active');
  
  activeSideBar = optionPressed;
  activeTab     = fileTabs[index];
}

explorerOptions.forEach((element, index) => {
  element.addEventListener('click', () => {
    fileTabPressed(fileTabs[index], index);
    showActiveSection(index);
  })
})

function showActiveSection(index) {
  sectionsArray.forEach((section) => {
    section.classList.add('hide');
  })

  switch(index) {
    case 2:
      projectsSection.classList.remove('hide');
      break;
  }
}

const workspaceTitle    = document.querySelector('.explorer-workspace');
const explorerFilesList = document.querySelector('#explorer-file-list');

const arrowIcon = document.querySelector('#arrow');

workspaceTitle.addEventListener('click', () => {
  explorerFilesList.classList.toggle('hide');
  arrowIcon.classList.toggle('show');
})