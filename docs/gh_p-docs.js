console.log('From the docs folder')

//SPA with vanilla JS
class App {
  constructor() {}
   init = () => {
    console.log('run the class App!')
   }
}

const app = new App()

document.addEventListener('DOMContentLoaded', app.init);