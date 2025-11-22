class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: #111827;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
        }
        .logo span {
          color: #0ea5e9;
        }
        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        a:hover {
          color: #0ea5e9;
        }
        .cta {
          background: #0ea5e9;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          transition: background 0.3s;
        }
        .cta:hover {
          background: #0284c7;
          color: white;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          ul {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">
          <i data-feather="activity"></i>
          <span class="ml-2">IRON FLEX</span>
        </a>
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        <ul class="hidden md:flex">
          <li><a href="#schedule"><i data-feather="calendar"></i> Schedule</a></li>
          <li><a href="#trainers"><i data-feather="users"></i> Trainers</a></li>
          <li><a href="#membership"><i data-feather="dollar-sign"></i> Membership</a></li>
          <li><a href="#facilities"><i data-feather="home"></i> Facilities</a></li>
          <li><a href="#trial" class="cta"><i data-feather="user-plus"></i> Free Trial</a></li>
        </ul>
      </nav>
    `;

    // Mobile menu toggle functionality
    const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const menu = this.shadowRoot.querySelector('ul');

    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = menu.style.display === 'flex';
      menu.style.display = isOpen ? 'none' : 'flex';
      menu.style.flexDirection = 'column';
      menu.style.position = 'absolute';
      menu.style.top = '100%';
      menu.style.left = '0';
      menu.style.right = '0';
      menu.style.background = '#111827';
      menu.style.padding = '1rem';
      menu.style.gap = '1rem';
      
      if (!isOpen) {
        mobileMenuBtn.innerHTML = `<i data-feather="x"></i>`;
      } else {
        mobileMenuBtn.innerHTML = `<i data-feather="menu"></i>`;
      }
      feather.replace();
    });
  }
}
customElements.define('custom-navbar', CustomNavbar);
