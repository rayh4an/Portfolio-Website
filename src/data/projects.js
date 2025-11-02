export const projects = [
    {
    title: "Weather App",
    bullets: [
        "Designed and developed a Weather App in Dart with global city search, current location detection, and real-time weather updates.",
        "Integrated OpenWeatherMap API to display 24-hour and 7-day forecasts, interactive radar maps, and temperature heat overlays.",
        "Built a community tab enabling user interaction through live weather discussions and custom postcard creation.",
        "Added personalization features including theme customization, temperature unit switching (°C/°F), and user-defined alerts for weather conditions."
    ],
    tech: ["Flutter", "Dart", "OpenWeatherMap", "Firebase"],
    links: { code: "https://github.com/rayh4an/Weather_App"},
    images: ["public/Projects/Weather App/WeatherAppPic.png", 
        "public/Projects/Weather App/WeatherAppPic2.png", 
        "public/Projects/Weather App/WeatherAppPic3.png",],
    imageAlt: "Weather app screenshot"
    },

    {
    title: "Recipe & Meal Planner",
    bullets: [
        "Developed a mobile application in Dart that offers a diverse selection of recipes from numerous cuisines, enabling users to explore, favorite, and manage their meals.",
        "Implemented a favorites system using SQLite to persistently store user-selected recipes across sessions.",
        "Built a grocery list tool for adding and removing ingredients to support meal planning and shopping organization.",
        "Integrated functionality to create, edit, and delete custom recipes, with all data stored locally using SQLite."
    ],
    tech: ["Flutter",  "Dart", "SQLite"],
    links: { code: "https://github.com/rayh4an/Recipe_Meal_Planner_App"},
    images: ["public/Projects/Recipe & Meal Planner/RecipeMealPlannerAppPic.png", 
        "public/Projects/Recipe & Meal Planner/RecipeMealPlannerAppPic2.png", 
        "public/Projects/Recipe & Meal Planner/RecipeMealPlannerAppPic3.png",],
    imageAlt: "Recipe and Meal Planner app screen"
    },

    {
    title: "Multi-Threaded Web Crawler",
    bullets: [
        "Engineered a scalable Java-based web crawler to extract and parse URLs and webpage content concurrently, using multithreading to maximize performance.",
        "Utilized the Jsoup library to connect to web pages, parse HTML content, and extract metadata/hyperlinks efficiently.",
        "Implemented a thread pool system to manage crawl depth and prevent duplicate URL visits, improving crawl speed and resource utilization.",
        "Developed configurable thread count and crawl limits to enhance flexibility and control over crawling performance."
    ],
    tech: ["Java", "jsoup"],
    links: { code: "https://github.com/rayh4an/Multi-Threaded-Web-Crawler"}
    }
];
