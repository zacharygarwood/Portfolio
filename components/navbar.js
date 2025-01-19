class Navbar extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div>
            <div class="navbar">
                <div>
                    <a href="/" class="active">Zachary Garwood</a>
                    <a href="/til" class="">Today I learned</a>
                    <a href="/projects" class="">Projects</a>
                </div>
                <span class="theme-container">
                    <button type="button" class="theme-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor">
                            <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                            <line x1="8" x2="16" y1="21" y2="21"></line>
                            <line x1="12" x2="12" y1="17" y2="21"></line>
                        </svg>
                    </button>
                    <button type="button" class="theme-button active">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon">
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                        </svg>
                    </button>
                    <button type="button" class="theme-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun">
                            <circle cx="12" cy="12" r="4"></circle>
                            <path d="M12 2v2"></path>
                            <path d="M12 20v2"></path>
                            <path d="m4.93 4.93 1.41 1.41"></path>
                            <path d="m17.66 17.66 1.41 1.41"></path>
                            <path d="M2 12h2"></path>
                            <path d="M20 12h2"></path>
                            <path d="m6.34 17.66-1.41 1.41"></path>
                            <path d="m19.07 4.93-1.41 1.41"></path>
                        </svg>
                    </button>
                </span>
            </div>
        </div>
      `;

        // Adding event listeners for the buttons
        this.querySelector('.monitor-button').addEventListener('click', () => {
            document.body.setAttribute('data-theme', 'system');
        });
        
        this.querySelector('.light-button').addEventListener('click', () => {
            document.body.setAttribute('data-theme', 'light');
        });
        
        this.querySelector('.dark-button').addEventListener('click', () => {
            document.body.setAttribute('data-theme', 'dark');
        });
    }
  }
  
  customElements.define('navbar-component', Navbar);
  