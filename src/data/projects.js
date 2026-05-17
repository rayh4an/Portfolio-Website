export const projects = [
        {
    title: "AI-Powered Research Agent",
    bullets: [
        "Built a multi-agent autonomous research system in Python by orchestrating five specialized LangGraph agents (Planner, Researcher, Critic, Synthesizer, Writer) to autonomously plan, search the web, synthesize structured reports.",
        "Improved predictEngineered a self-correcting critic loop using LangChain and the Tavily API by scoring research quality from 0.0 to 1.0 and triggering follow-up searches when below a 0.9 threshold, ensuring high-quality report generation.",
        "Implemented dynamic conditional graph routing in LangGraph by designing state schemas and edge logic to control agent transitions and loop iterations, enabling flexible and self-correcting research pipeline execution at runtime.",
    ],
    tech: ["Python", "LangGraph", "LangChain", "Groq", "API", "SQLite", "Streamlit"],
    links: { code: "https://github.com/rayh4an/AI-Powered_Research_Agent"},
    images: ["projects/ai-powered-research-agent/AI-Research-Pic1.png", 
        "projects/ai-powered-research-agent/AI-Research-Pic2.png", 
        "projects/ai-powered-research-agent/AI-Research-Pic3.png",
        "projects/ai-powered-research-agent/AI-Research-Pic4.png"],
    imgLayout: "grid-2x2",
    imageAlt: "AI-Powered Research Agent screenshots"
    },

    {
    title: "Home Loan Data Analysis & Prediction",
    bullets: [
        "Built an end-to-end machine learning pipeline in Python by performing data ingestion, preprocessing, feature encoding, and class weight balancing on historical home loan data, enabling model training across 228 features.",
        "Designed and trained a deep neural network using TensorFlow/Keras with a 128-64-32 neuron layer architecture by implementing dropout regularization and early stopping callbacks to prevent overfitting and optimize training.",
        "Validated model performance on unseen test data by evaluating precision, recall, F1-score, and AUC metrics through confusion matrices and classification reports, confirming 92%+ scores across all key classification metrics.",
    ],
    tech: ["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn", "TensorFlow", "Keras"],
    links: { code: "https://github.com/rayh4an/Home_Loan_Data_Analysis_and_Prediction"},
    images: ["projects/home-loan-analysis-predict/Home-Loan-Pic1.png", 
        "projects/home-loan-analysis-predict/Home-Loan-Pic2.png", 
        "projects/home-loan-analysis-predict/Home-Loan-Pic3.png",
        "projects/home-loan-analysis-predict/Home-Loan-Pic4.png"],
    imgLayout: "grid-2x2",
    imageAlt: "Home Loan Data Analysis and Prediction screenshots"
    },

    {
    title: "Weather App",
    bullets: [
        "Developed a cross-platform Flutter weather application in Dart by integrating the OpenWeatherMap API to deliver real-time weather data, 24-hour and 7-day forecasts, and an interactive radar map with temperature heat map overlays.",
        "Architected a real-time authentication and data sync system by integrating Firebase Authentication and Cloud Firestore, enabling secure user login, persistent city management, and cross-device synchronization of preferences and settings.",
        "Implemented a personalized alerting and settings system by building user-defined weather condition triggers, temperature unit switching, and custom theme selection, syncing all preferences to individual Firebase Firestore user profiles."],
    tech: ["Flutter", "Dart", "OpenWeatherMap", "Firebase", "Firestore", "API"],
    links: { code: "https://github.com/rayh4an/Weather_App"},
    images: ["projects/weather-app/WeatherAppPic.png", 
        "projects/weather-app/WeatherAppPic2.png", 
        "projects/weather-app/WeatherAppPic3.png",],
    imageAlt: "Weather app screenshot",
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
    images: ["projects/recipe-mealplan/RecipeMealPlannerAppPic.png", 
        "projects/recipe-mealplan/RecipeMealPlannerAppPic2.png", 
        "projects/recipe-mealplan/RecipeMealPlannerAppPic3.png",],
    imageAlt: "Recipe and Meal Planner app screenshot",
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
