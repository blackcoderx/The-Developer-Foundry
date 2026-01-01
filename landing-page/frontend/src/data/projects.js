export const projectsData = {
    frontend: {
        title: "Frontend Projects",
        description: "Kill 'tutorialitis'. Build things that matter.",
        tiers: [
            {
                id: "rookie",
                title: "Tier 1: Rookie",
                subtitle: "The Vanilla Survivor",
                theme: "Mastering the Browser",
                constraint: "NO FRAMEWORKS. Pure HTML/CSS/JS only.",
                projects: [
                    {
                        title: "The CSS Crime Scene",
                        pitch: "Pixel-perfect recreation of a complex webpage.",
                        twist: "No float, absolute positioning (except overlays), or fixed heights.",
                        challenge: [
                            "Indistinguishable from original at 50% opacity",
                            "Fully responsive without layout breaking",
                            "Use CSS Grid and Flexbox"
                        ],
                        tech: "CSS Grid, Flexbox, Media Queries"
                    },
                    {
                        title: "The Time-Zone Scheduler",
                        pitch: "Find overlapping meeting times for NY, London, and Tokyo.",
                        twist: "No Date libraries (like date-fns) allowed.",
                        challenge: [
                            "User selects date/time in local time",
                            "Generate slider for 3 other time zones",
                            "Highlight 'Overlap Hours' where everyone is awake"
                        ],
                        tech: "Date Object, Math logic, DOM manipulation"
                    },
                    {
                        title: "The Infinite Drum Machine",
                        pitch: "Interactive grid of buttons that play sounds.",
                        twist: "User must be able to record and playback sequences.",
                        challenge: [
                            "Use HTML5 Audio API",
                            "Implement Keyboard Mapping",
                            "Visual feedback during playback"
                        ],
                        tech: "Event Listeners, Audio API, setInterval"
                    },
                    {
                        title: "The Local-First Kanban",
                        pitch: "A Trello clone that thrives offline.",
                        twist: "Persist data without a backend.",
                        challenge: [
                            "Native HTML5 Drag and Drop API",
                            "Save state to localStorage",
                            "Restore exact state on refresh"
                        ],
                        tech: "LocalStorage, JSON parsing, Drag/Drop Events"
                    },
                    {
                        title: "The GitHub Detective",
                        pitch: "Search users and analyze profile strength.",
                        twist: "Handle API rate limits and error states.",
                        challenge: [
                            "Fetch data from GitHub Public API",
                            "Calculate 'Foundry Score' based on stats",
                            "Handle rate limits with countdown timer"
                        ],
                        tech: "fetch, Promises, Async/Await"
                    },
                    {
                        title: "The Typewriter Speed Test",
                        pitch: "MonkeyType clone with real-time validation.",
                        twist: "Real-time WPM calculation and validation.",
                        challenge: [
                            "Highlight correct/wrong chars instantly",
                            "Calculate WPM in real-time",
                            "Disable Backspace for 'Hard Mode'"
                        ],
                        tech: "String manipulation, Key events"
                    }
                ]
            },
            {
                id: "adventurer",
                title: "Tier 2: Adventurer",
                subtitle: "The React Architect",
                theme: "Managing State and Complexity",
                constraint: "REACT ONLY. No UI Kits. Build your own components.",
                projects: [
                    {
                        title: "The Tesla Configurator",
                        pitch: "Customize a car with dependent options.",
                        twist: "Every choice impacts available options and price.",
                        challenge: [
                            "Handle complex dependency logic",
                            "Rotate car image based on choices",
                            "Sticky footer with real-time financing math"
                        ],
                        tech: "Complex useState, useReducer"
                    },
                    {
                        title: "The Choose Your Own Adventure",
                        pitch: "Interactive story game driven by JSON.",
                        twist: "Story structure is dynamic, not hardcoded.",
                        challenge: [
                            "Create JSON schema for Story Nodes",
                            "Dynamic Routing (/story/:nodeId)",
                            "Allow backtracking without restart"
                        ],
                        tech: "React Router, JSON Data Structure"
                    },
                    {
                        title: "The Infinite Image Gallery",
                        pitch: "Unsplash clone loading 10,000 images.",
                        twist: "Performance. Don't crash the browser.",
                        challenge: [
                            "Implement Virtualization/Windowing",
                            "Infinite Scroll fetching",
                            "Blur-up loading placeholders"
                        ],
                        tech: "IntersectionObserver, useMemo"
                    },
                    {
                        title: "The Multi-Step Tax Wizard",
                        pitch: "TurboTax-style form wizard.",
                        twist: "Strict, context-aware validation.",
                        challenge: [
                            "Block progress until current step is valid",
                            "Preserve data when moving back steps",
                            "Complex form state management"
                        ],
                        tech: "Controlled Components, State Lifting"
                    },
                    {
                        title: "The Crypto Whale Tracker",
                        pitch: "Dashboard for live crypto prices.",
                        twist: "Real-Time updates via WebSockets.",
                        challenge: [
                            "Connect to WebSocket API",
                            "Flash UI on price changes",
                            "Client-side sorting/favorites"
                        ],
                        tech: "WebSockets, useEffect cleanup"
                    },
                    {
                        title: "The Restaurant Seating Chart",
                        pitch: "Admin tool for managing restaurant tables.",
                        twist: "Visual SVG map interaction.",
                        challenge: [
                            "Render floor plan with SVG/Canvas",
                            "Toggle table states (Open/Occupied)",
                            "Validate party size logic"
                        ],
                        tech: "SVG manipulation, Click handlers"
                    }
                ]
            }
        ]
    },
    backend: {
        title: "Backend Projects",
        description: "It works isn't enough. It must scale.",
        tiers: [
            {
                id: "rookie",
                title: "Tier 1: Rookie",
                subtitle: "The Scripting Savage",
                theme: "Terminal, Logic, I/O",
                constraint: "NO WEB FRAMEWORKS. CLIs and Scripts only.",
                projects: [
                    {
                        title: "The Big Data Log Analyzer",
                        pitch: "Make sense of massive log files.",
                        twist: "Limited memory. Cannot load 2GB file into RAM.",
                        challenge: [
                            "Stream processing line-by-line",
                            "Regex extraction of IPs",
                            "Find top 5 active IPs"
                        ],
                        tech: "Streams, Regex, HashMaps"
                    },
                    {
                        title: "The Dirty Data Migrator",
                        pitch: "Clean and migrate a messy CSV to SQL.",
                        twist: "Data is garbage. Handle errors gracefully.",
                        challenge: [
                            "Sanitize invalid rows to specific file",
                            "Insert clean data via raw SQL",
                            "Idempotent execution"
                        ],
                        tech: "CSV Parsing, SQL INSERT"
                    },
                    {
                        title: "The Bare Metal HTTP Client",
                        pitch: "Recreate Postman in the Terminal.",
                        twist: "No axios/requests. Native libs only.",
                        challenge: [
                            "Parse CLI arguments",
                            "Handle verbose flags",
                            "Human-readable error handling"
                        ],
                        tech: "Native HTTP modules, CLI args"
                    },
                    {
                        title: "The Manual Database",
                        pitch: "Build a DB engine using JSON.",
                        twist: "Handle concurrency and race conditions.",
                        challenge: [
                            "Support Create, Read, Delete",
                            "Implement Lock File mechanism",
                            "Prevent data corruption"
                        ],
                        tech: "File Locking, JSON Serialization"
                    },
                    {
                        title: "The Portfolio Scraper",
                        pitch: "Bot that tracks prices or data.",
                        twist: "Be polite. Respect robots.txt.",
                        challenge: [
                            "Respect crawling policies",
                            "Implement generic delay/throttling",
                            "Parse HTML DOM"
                        ],
                        tech: "DOM Traversal, HTTP Requests"
                    }
                ]
            },
            {
                id: "adventurer",
                title: "Tier 2: Adventurer",
                subtitle: "The API Architect",
                theme: "Production Standards",
                constraint: "Standard Status Codes. Proper Logging.",
                projects: [
                    {
                        title: "The Expense Tracker API",
                        pitch: "Manage personal finances.",
                        twist: "Complex filtering and aggregation.",
                        challenge: [
                            "CRUD operations",
                            "Advanced URL query filtering",
                            "SQL Aggregations for summaries"
                        ],
                        tech: "REST, SQL Group By"
                    },
                    {
                        title: "The Secure URL Shortener",
                        pitch: "Private Bit.ly clone.",
                        twist: "Security first.",
                        challenge: [
                            "Auth (Register/Login)",
                            "Rate Limiting (Token Bucket)",
                            "Nano-ID generation and collision handling"
                        ],
                        tech: "JWT, Bcrypt, Middleware"
                    },
                    {
                        title: "The Blog with Roles",
                        pitch: "CMS with Role-Based Access Control.",
                        twist: "Not all users are equal.",
                        challenge: [
                            "Implement Admin/Editor/Viewer roles",
                            "Write custom RBAC middleware",
                            "Protect routes based on role"
                        ],
                        tech: "Middleware, DB Relationships"
                    },
                    {
                        title: "The Flight Booking System",
                        pitch: "Reserve seats without conflicts.",
                        twist: "Data Integrity & Concurrency.",
                        challenge: [
                            "Use SQL Transactions (ACID)",
                            "Prevent Double Booking via Locking",
                            "Rollback on failure"
                        ],
                        tech: "SQL Transactions, Pessimistic Locking"
                    },
                    {
                        title: "The Physical Library",
                        pitch: "Manage book loans and due dates.",
                        twist: "Time/Date logic is hard.",
                        challenge: [
                            "Calculate fines based on 'Business Days'",
                            "Exclude weekends from calculations",
                            "Cron jobs for overdue checks"
                        ],
                        tech: "Date Libraries, Cron Jobs"
                    },
                    {
                        title: "The Notification Service",
                        pitch: "API that sends emails asynchronously.",
                        twist: "Separate the producer from the consumer.",
                        challenge: [
                            "Queue jobs (Redis/BullMQ)",
                            "Background worker process",
                            "Retry logic with exponential backoff"
                        ],
                        tech: "Message Queues, Async Processing"
                    }
                ]
            }
        ]
    }
};
