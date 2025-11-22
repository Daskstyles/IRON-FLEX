/* Shared styles across all pages */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
    font-family: 'Inter', sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* Custom scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #1a202c;
}

::-webkit-scrollbar-thumb {
    background: #0ea5e9;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #0284c7;
}

/* Animation classes */
.animate-float {
    animation: float 6s ease-in-out infinite;
}

@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
}
