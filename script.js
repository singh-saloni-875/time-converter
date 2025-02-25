document.addEventListener("DOMContentLoaded", function () {
    const homeTZ = document.getElementById("home-timezone");
    const otherTZ = document.getElementById("other-timezone");
    const convertedTime = document.getElementById("converted-time");

    // 🌍 *Custom country-based timezone mapping*
    const timeZoneMap = {
        // 🏠 South Asia
        "India (IST)": "Asia/Kolkata",
        "Pakistan": "Asia/Karachi",
        "Bangladesh": "Asia/Dhaka",
        "Sri Lanka": "Asia/Colombo",
    
        // 🏯 East Asia
        "China": "Asia/Shanghai",
        "Hong Kong": "Asia/Hong_Kong",
        "Taiwan": "Asia/Taipei",
        "South Korea": "Asia/Seoul",
        "North Korea": "Asia/Pyongyang",
        "Japan": "Asia/Tokyo",
    
        // 🕌 Middle East & Turkey
        "Turkey": "Europe/Istanbul",
        "Saudi Arabia": "Asia/Riyadh",
        "United Arab Emirates (UAE)": "Asia/Dubai",
        "Iran": "Asia/Tehran",
        "Israel": "Asia/Jerusalem",
    
        // 🏛 Europe
        "Greece": "Europe/Athens",
        "United Kingdom (UK)": "Europe/London",
        "Germany": "Europe/Berlin",
        "France": "Europe/Paris",
        "Italy": "Europe/Rome",
        "Spain": "Europe/Madrid",
        "Russia": "Europe/Moscow",
        "Ukraine": "Europe/Kyiv",
    
        // 🌎 North America
        "USA (New York - EST)": "America/New_York",
        "USA (California - PST)": "America/Los_Angeles",
        "Canada (Toronto)": "America/Toronto",
        "Canada (Vancouver)": "America/Vancouver",
        "Mexico": "America/Mexico_City",
    
        // 🌎 South America
        "Brazil": "America/Sao_Paulo",
        "Argentina": "America/Argentina/Buenos_Aires",
    
        // 🌏 Australia & Oceania
        "Australia (Sydney)": "Australia/Sydney",
        "New Zealand": "Pacific/Auckland"
    };

    // Populate dropdowns with country names
    Object.keys(timeZoneMap).forEach(country => {
        let option1 = new Option(country, timeZoneMap[country]);
        let option2 = new Option(country, timeZoneMap[country]);
        homeTZ.add(option1);
        otherTZ.add(option2);
    });

    // *Set default timezones*
    homeTZ.value = "Asia/Kolkata"; // *India (IST)*
    otherTZ.value = "Europe/Istanbul"; // *Turkey (default)*

    // Function to convert time
    function convertTime() {
        let homeZone = homeTZ.value;
        let targetZone = otherTZ.value;
        let now = new Date();

        let homeTime = new Intl.DateTimeFormat("en-US", { 
            timeZone: homeZone, 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
        }).format(now);

        let targetTime = new Intl.DateTimeFormat("en-US", { 
            timeZone: targetZone, 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
        }).format(now);

        convertedTime.textContent = `🕒 ${homeTime} (${homeTZ.options[homeTZ.selectedIndex].text}) → ${targetTime} (${otherTZ.options[otherTZ.selectedIndex].text})`;
    }

    // Run conversion on change
    homeTZ.addEventListener("change", convertTime);
    otherTZ.addEventListener("change", convertTime);

    // *Initial conversion*
    convertTime();
});

// otherTZ.value = "Europe/Istanbul"; // Default foreign timezone
// convertTime(); // Update the time display