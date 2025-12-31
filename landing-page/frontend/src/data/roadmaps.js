export const roadmapsData = {
    frontend: {
        title: "Frontend Development",
        description: "The art of building user interfaces.",
        levels: [
            {
                id: "rookie",
                title: "The Rookie Route",
                subtitle: "Frontend Development",
                description: "Welcome to the start of your web development journey! This roadmap is designed for beginners (0–6 months).",
                modules: [
                    {
                        title: "Module 0: The Setup & Mental Model",
                        description: "Understand the 'playing field' and prepare your digital workbench.",
                        checkmarks: [
                            "Understand Client vs Server relationship",
                            "Install and configure VS Code",
                            "Install browser with Developer Tools",
                            "Set up Live Server for auto-refresh"
                        ]
                    },
                    {
                        title: "Module 1: HTML (The Skeleton)",
                        description: "Learn to structure content.",
                        checkmarks: [
                            "Create webpage file structure",
                            "Use Headings, Paragraphs, Lists, Buttons",
                            "Insert Images and Links",
                            "Understand Parent/Child nesting",
                            "Apply Semantic HTML tags"
                        ]
                    },
                    {
                        title: "Module 2: CSS (The Style & Layout)",
                        description: "Transform your skeleton into a visually appealing document.",
                        checkmarks: [
                            "Link CSS to HTML",
                            "Master the Box Model (Padding/Margin)",
                            "Align items using Flexbox",
                            "Configure colors, fonts, and backgrounds",
                            "Implement basic Responsive Design"
                        ]
                    },
                    {
                        title: "Module 3: JavaScript Basics (The Interaction)",
                        description: "Add logic and interactivity.",
                        checkmarks: [
                            "Separate logic from structure",
                            "Manage data with Variables",
                            "Write reusable Functions",
                            "Manipulate the DOM content",
                            "Create Event Listeners for interactivity"
                        ]
                    },
                    {
                        title: "Module 4: Git & Deployment (The Launch)",
                        description: "Learn how to save your work and publish it.",
                        checkmarks: [
                            "Install Git and set up GitHub",
                            "Perform Commits with meaningful messages",
                            "Push local code to cloud repositories",
                            "Connect repo to hosting (Netlify/Vercel)",
                            "Deploy a live, shareable URL"
                        ]
                    }
                ]
            },
            {
                id: "adventurer",
                title: "The Adventurer Route",
                subtitle: "Intermediate Frontend",
                description: "Master the language. Move away from simple click events and learn to manipulate complex data structures.",
                modules: [
                    {
                        title: "Module 5: JavaScript Deep Dive",
                        description: "Modern JS (ES6+), High-Order Functions, Async/Await.",
                        checkmarks: [
                            "Master Arrow Syntax and Destructuring",
                            "Use .map(), .filter(), and .reduce()",
                            "Handle Async logic with Promises",
                            "Implement Async/Await for data fetching"
                        ]
                    },
                    {
                        title: "Module 6: The Ecosystem",
                        description: "Command Line, Node.js, NPM, Bundlers.",
                        checkmarks: [
                            "Navigate system via Terminal (cd, ls)",
                            "Manage project runtimes with Node.js",
                            "Install and manage NPM packages",
                            "Initialize projects with npm init",
                            "Set up modern build tools (Vite)"
                        ]
                    },
                    {
                        title: "Module 7: The Framework (React)",
                        description: "Components, JSX, Props, State, Hooks.",
                        checkmarks: [
                            "Think in Declarative UI",
                            "Create reusable React Components",
                            "Communicate via Props",
                            "Manage internal State (useState)",
                            "Handle side-effects (useEffect)"
                        ]
                    },
                    {
                        title: "Module 8: Connecting to the World (APIs)",
                        description: "Fetch, REST, Async Data.",
                        checkmarks: [
                            "Understand REST API principles",
                            "Fetch live data from public APIs",
                            "Display dynamic data via loops",
                            "Handle Loading and Success states",
                            "Implement Error Handling for failed calls"
                        ]
                    },
                    {
                        title: "Module 9: Routing",
                        description: "SPA, React Router, Dynamic Routing.",
                        checkmarks: [
                            "Implement Single Page Application logic",
                            "Configure client-side React Router",
                            "Build custom 404 pages",
                            "Handle Dynamic Routing with URL Params"
                        ]
                    }
                ]
            },
            {
                id: "master",
                title: "The Master Route",
                subtitle: "Advanced Engineering",
                description: "Harden your code against crashes. Move from loose JavaScript to strict TypeScript and Enterprise Architecture.",
                modules: [
                    {
                        title: "Module 10: TypeScript",
                        description: "Static Typing, Interfaces, Generics.",
                        checkmarks: [
                            "Configure tsconfig.json",
                            "Define Interfaces for API responses",
                            "Fix 'Implicit Any' errors",
                            "Pass typed Props to Components"
                        ]
                    },
                    {
                        title: "Module 11: Global State Management",
                        description: "Context API, Redux/Zustand.",
                        checkmarks: [
                            "Differentiate Local vs Global state",
                            "Implement Context Provider for themes/auth",
                            "Manage complex data via Redux or Zustand",
                            "Synchronize state across disconnected components"
                        ]
                    },
                    {
                        title: "Module 12: Next.js & SSR",
                        description: "Server Components, File-based Routing.",
                        checkmarks: [
                            "Initialize projects with App Router",
                            "Optimise with Server vs Client Components",
                            "Implement Static Site Generation (SSG)",
                            "Configure Server Side Rendering (SSR)"
                        ]
                    },
                    {
                        title: "Module 13: Testing",
                        description: "Unit, Integration, and E2E Testing.",
                        checkmarks: [
                            "Write Unit Tests for pure functions (Vitest)",
                            "Perform Component Testing (React Testing Library)",
                            "Understand Code Coverage metrics",
                            "Differentiate False Positives vs Negatives"
                        ]
                    }
                ]
            }
        ]
    },
    backend: {
        title: "Backend Engineering",
        description: "The logic behind the screen.",
        levels: [
            {
                id: "rookie",
                title: "The Rookie Handbook",
                subtitle: "Backend Foundations",
                description: "Learn to control the computer without a GUI. The backend developer's home is the Terminal.",
                modules: [
                    {
                        title: "Module 0: The Command Line & OS",
                        description: "Linux, Shell, DNS/IP.",
                        checkmarks: [
                            "Navigate hard drive via Terminal",
                            "Manage files without a GUI",
                            "Explain Localhost and internal networking",
                            "Understand IP, DNS, and Ports"
                        ]
                    },
                    {
                        title: "Module 1: Programming Logic",
                        description: "Variables, Control Flow, File I/O.",
                        checkmarks: [
                            "Install a backend language runtime",
                            "Execute scripts in the terminal",
                            "Iterate through data with loops",
                            "Read and write to text files"
                        ]
                    },
                    {
                        title: "Module 2: HTTP & The Network",
                        description: "Request/Response, Methods, Status Codes.",
                        checkmarks: [
                            "Differentiate GET vs POST vs PUT vs DELETE",
                            "Identify common Status Codes (200, 404, 500)",
                            "Perform manual API requests (Postman/cURL)"
                        ]
                    },
                    {
                        title: "Module 3: Databases (The Memory)",
                        description: "Relational DBs, SQL, Data Modeling.",
                        checkmarks: [
                            "Install a Database GUI (TablePlus/DBeaver)",
                            "Write basic SQL Queries (SELECT, INSERT)",
                            "Understand Tables, Rows, and Columns",
                            "Model Primary and Foreign Key relationships"
                        ]
                    }
                ]
            },
            {
                id: "adventurer",
                title: "The Adventurer Route",
                subtitle: "Backend Engineering",
                description: "Build a program that listens on a specific Port and responds to internet traffic.",
                modules: [
                    {
                        title: "Module 4: The Web Server",
                        description: "Frameworks, Routing, Middleware.",
                        checkmarks: [
                            "Start a server on a specific Port",
                            "Create GET routes returning JSON",
                            "Parse incoming POST request bodies",
                            "Implement Middleware for logging/validation"
                        ]
                    },
                    {
                        title: "Module 5: Database Integration",
                        description: "ORM vs Raw SQL, Env Variables.",
                        checkmarks: [
                            "Connect server code to a live database",
                            "Secure secrets via .env variables",
                            "Perform 'Create' operations in the DB",
                            "Perform 'Read' operations in the DB"
                        ]
                    },
                    {
                        title: "Module 6: RESTful Architecture",
                        description: "Project Structure, MVC.",
                        checkmarks: [
                            "Organize endpoints via REST Principles",
                            "Return context-accurate Status Codes",
                            "Separate Routing from Database logic",
                            "Implement basic MVC/Layered folders"
                        ]
                    },
                    {
                        title: "Module 7: Authentication Basics",
                        description: "Hashing, JWT, Security.",
                        checkmarks: [
                            "Securely hash passwords (Bcrypt)",
                            "Verify logins against stored hashes",
                            "Issue and verify digital session tokens (JWT)"
                        ]
                    }
                ]
            },
            {
                id: "master",
                title: "The Master Route",
                subtitle: "Advanced Backend",
                description: "Solve the 'It works on my machine' problem forever and build scalable systems.",
                modules: [
                    {
                        title: "Module 8: Docker & Containers",
                        description: "Dockerfile, Image, Compose.",
                        checkmarks: [
                            "Write a Dockerfile for your API",
                            "Build and run local Docker Images",
                            "Orchestrate services via Docker Compose"
                        ]
                    },
                    {
                        title: "Module 9: Testing",
                        description: "Unit/Integration Testing, CI/CD.",
                        checkmarks: [
                            "Write Unit Tests for isolated logic",
                            "Perform Integration Tests on endpoints",
                            "Mock external APIs and Databases",
                            "Identify testing 'Success' vs 'False Positives'"
                        ]
                    },
                    {
                        title: "Module 10: Caching & Performance",
                        description: "Redis, Indexes.",
                        checkmarks: [
                            "Spin up Redis instances for caching",
                            "Implement a Caching layer in API logic",
                            "Optimize SQL Performance with Indexes"
                        ]
                    },
                    {
                        title: "Module 11: System Design",
                        description: "Microservices, Queues, Load Balancing.",
                        checkmarks: [
                            "Differentiate Sync vs Async communication",
                            "Implement Message Queues for background tasks",
                            "Design Load Balanced architectures"
                        ]
                    }
                ]
            }
        ]
    }
}
