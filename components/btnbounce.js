const Btnbounce = () => {
    return (
        <div className="absolute bottom-2 container mx-auto z-40 bg-none flex flex-row justify-center items-center">
            <svg class="animate-bounce w-10 h-10 text-gray-900" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
    );
}

export default Btnbounce;