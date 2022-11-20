console.log('From the docs folder')

//SPA with vanilla JS
class App {
  constructor() {
    this.nav = this.nav.bind(this)
    this.poppin = this.poppin.bind(this)
    this.pageDisplayed = this.pageDisplayed.bind(this)
  }
   pages = [];
   display = new Event('display');
   init = () => {
    console.log('run the class App!')
    this.pages = document.querySelectorAll('.page');
    this.pages.forEach((pg) => {
      pg.addEventListener('display', this.pageDisplayed)
      // console.log(this.pages)
    })

    document.querySelectorAll('.nav-link').forEach(( link ) => {
      link.addEventListener('click', this.nav);
    })
    history.replaceState({}, 'Home', '#home');
    window.addEventListener('popstate', this.poppin)
  };
  nav = (e) => {
    e.preventDefault();
    let currentPage = e.target.getAttribute('data-target');
    console.log(currentPage)
    document.querySelector('.active').classList.remove('active')
    let cp = document.getElementById(currentPage)
    cp.classList.add('active')
    history.pushState({}, currentPage, `#${currentPage}`)
    cp.dispatchEvent(this.display)
   }
   pageDisplayed = (e) => {
    console.log(e.target)
    let cp = e.target;
    console.log(cp)
    // cp.classList.add('displayed')
    // let p =  document.createElement('p')
    // let text = document.createTextNode(cp.id)
    let h1 = cp.querySelector('.content h1')
    setTimeout((h) => {
      h1.classList.add('slide');
    }, 200, h1)
    setTimeout((h) => {
      h1.classList.remove('slide');
    }, 2700, h1)
   }
   poppin = (e) => {
    console.log(location.hash, 'popstate event')
   }

}

const app = new App()
document.addEventListener('DOMContentLoaded', app.init);