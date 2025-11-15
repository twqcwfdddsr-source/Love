// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Her name
    valentineName: "Khushbu",

    // Browser tab title
    pageTitle: "Will You Be My Girlfriend? 💝",

    // Floating emojis in the background
    floatingEmojis: {
        emojis: ["❤️", "💖", "💘", "💕", "💗", "💞"],
        density: 0.6,
    },

    // Main question
    mainQuestion: "Khushbu, do you like me… and will you be my girlfriend? 💖",

    // Messages when she clicks YES
    yesMessages: [
        "You just made my whole world brighter ❤️",
        "I promise to treat you with love and respect 💕",
        "Thank you for choosing me, Khushbu 💘"
    ],

    // Messages when she clicks NO
    noMessages: [
        "Are you sure, Khushbu? 🥺",
        "Think again… 😭",
        "My heart is breaking 💔",
    ],

    // Music (optional)
    music: {
        enabled: false,          
        autoplay: false,         
        musicUrl: "",            
        startText: "🎵 Play Music", 
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

// Don't modify anything below this line
window.VALENTINE_CONFIG = CONFIG;
