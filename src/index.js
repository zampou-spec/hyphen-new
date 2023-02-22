window.onload = () => {
  const navbar = document.querySelector('.navbar-2');
  const nav = document.querySelector('.navbar-2 > .navbar-content');
  const menu = document.querySelector('.navbar-2 .navbar__menu-icon');
  const lis = document.querySelectorAll('.navbar-content__menu li');

  const getPagename = (pathname) => {
    let name = pathname.split('/')
    return '/' + name[name.length - 1]
  }

  lis.forEach((li) => {
    li.classList.remove('active')
  })

  lis.forEach((li) => {
    console.log(getPagename(li.children[0]?.pathname), getPagename(window.location.pathname));
    if (getPagename(li.children[0]?.pathname) == getPagename(window.location.pathname)) {
      li.classList.add('active')
    }
  })

  menu?.addEventListener('click', () => {
    nav?.classList.toggle('mobile')
  })

  let sticky = navbar?.offsetTop;
  window.onscroll = () => { scroll() };

  const scroll = () => {
    if (window.pageYOffset >= sticky) {
      navbar?.classList.add('sticky')
    } else {
      navbar?.classList.remove('sticky');
    }
  }
}
