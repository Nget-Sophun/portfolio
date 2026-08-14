<script setup lang="ts">
import { onMounted, ref } from 'vue'

/* =========================================================
   TYPES
========================================================= */

interface ProjectScreenshot {
  title: string
  description: string
  image?: string
}

interface ProjectChallenge {
  problem: string
  solution: string
}

interface Project {
  title: string
  slug: string
  description: string
  longDescription: string
  type: string
  year: string
  role: string
  company?: string
  status: string
  duration?: string
  team?: string

  icon: string
  gradient: string

  tags: string[]
  technologies: string[]
  features: string[]
  responsibilities: string[]

  challenges: ProjectChallenge[]

  result: string

  screenshots: ProjectScreenshot[]

  links: {
    github?: string
    demo?: string
    playStore?: string
  }
}

/* =========================================================
   STATE
========================================================= */

const isDark = ref(true)
const mobileMenuOpen = ref(false)
const selectedProject = ref<Project | null>(null)

/* =========================================================
   PROJECTS
========================================================= */

const projects: Project[] = [
  {
    title: 'Smart GPS',

    slug: 'smart-gps',

    type: 'Mobile Application',

    year: '2023',

    role: 'Mobile Developer',

    company: 'TurboTech Co., Ltd.',

    status: 'Production',

    duration: 'Project duration — add your actual duration',

    team: 'Team size — add your actual team size',

    description:
      'A smart GPS mobile application focused on location-based services and GPS management.',

    longDescription:
      'Smart GPS is a mobile application developed for GPS and location-based services. The application provides a mobile interface for users to interact with GPS-related functionality while connecting the frontend application with backend services.',

    icon: '⌖',

    gradient: 'from-cyan-500 via-blue-500 to-indigo-600',

    tags: [
      'Flutter',
      'Dart',
      'Google Maps',
      'REST API'
    ],

    technologies: [
      'Flutter',
      'Dart',
      'Google Maps',
      'REST API',
      'Responsive UI',
      'State Management'
    ],

    features: [
      'User authentication',
      'Email and password login',
      'GPS and location functionality',
      'Google Maps integration',
      'REST API integration',
      'Responsive mobile interface',
      'Loading and API state handling'
    ],

    responsibilities: [
      'Designed and implemented mobile application screens',
      'Developed reusable Flutter UI components',
      'Integrated REST APIs with the mobile application',
      'Implemented authentication screens and user flows',
      'Integrated Google Maps and location-related functionality',
      'Connected frontend screens with backend services',
      'Handled asynchronous application states',
      'Worked on responsive mobile layouts',
      'Tested application flows and fixed UI issues'
    ],

    challenges: [
      {
        problem:
          'The application needed to combine mobile UI, GPS-related functionality, map services and backend APIs into one consistent experience.',

        solution:
          'Structured the application into reusable UI components and connected the different services through the application layer.'
      },

      {
        problem:
          'Location and API-driven information needs to be displayed without making the interface difficult to use.',

        solution:
          'Focused on a simple mobile-first interface and clear application states for loading, data and user interaction.'
      }
    ],

    result:
      'Contributed to the development of a production mobile application for GPS and location-based services.',

    screenshots: [
      {
        title: 'Login & Authentication',

        description:
          'Login screen for entering user credentials and accessing the application.',

        image: '~/projects/smart-gps/login.png'
      },

      {
        title: 'GPS Application',

        description:
          'Mobile interface for GPS and location-related functionality.'
      },

      {
        title: 'Map & Location',

        description:
          'Map-based interface using location and geographic information.'
      }
    ],

    links: {
      github: '',
      demo: '',
      playStore: ''
    }
  },

  {
    title: 'Smart Data Table Plus',

    slug: 'smart-data-table-plus',

    type: 'Open Source Package',

    year: '2026',

    role: 'Creator / Developer',

    status: 'Open Source',

    description:
      'A customizable Flutter data table package with pagination, sorting, responsive layouts and scrolling.',

    longDescription:
      'Smart Data Table Plus is a reusable Flutter package designed to make complex data-table interfaces easier to build. It focuses on customization, responsive layouts, pagination, sorting and table interaction.',

    icon: '▦',

    gradient: 'from-violet-500 via-purple-500 to-indigo-600',

    tags: [
      'Flutter',
      'Dart',
      'Open Source'
    ],

    technologies: [
      'Flutter',
      'Dart',
      'Generics',
      'Pagination',
      'Sorting',
      'Responsive UI',
      'Reusable Components'
    ],

    features: [
      'Customizable table UI',
      'Pagination',
      'Sorting',
      'Responsive layout',
      'Horizontal scrolling',
      'Vertical scrolling',
      'Reusable generic data model',
      'Custom table columns'
    ],

    responsibilities: [
      'Designed the package API',
      'Built the reusable Flutter data-table component',
      'Implemented pagination support',
      'Implemented sorting functionality',
      'Worked on responsive table layouts',
      'Designed customizable table columns',
      'Improved scrolling behavior',
      'Created example usage for developers',
      'Prepared the package for public distribution'
    ],

    challenges: [
      {
        problem:
          'Standard data tables can become difficult to customize when applications require pagination, sorting and responsive behavior.',

        solution:
          'Built a reusable component with configurable columns, rows, pagination and interaction behavior.'
      },

      {
        problem:
          'Large tables need to remain usable across different screen sizes.',

        solution:
          'Added responsive layout behavior and scrolling support so the component can adapt to different application layouts.'
      }
    ],

    result:
      'Created a reusable Flutter package intended to help developers build customizable and responsive data-table interfaces.',

    screenshots: [
      {
        title: 'Smart Data Table',

        description:
          'Example of the customizable data-table interface.'
      },

      {
        title: 'Pagination',

        description:
          'Table pagination interface for navigating large datasets.'
      },

      {
        title: 'Responsive Table',

        description:
          'Responsive table layout with scrolling and customizable columns.'
      }
    ],

    links: {
      github: 'https://github.com/Nget-Sophun'
    }
  },

  {
    title: 'EZ Remote',

    slug: 'ez-remote',

    type: 'Robotics / IoT',

    year: '2026',

    role: 'Mobile Developer',

    status: 'Development',

    description:
      'A Bluetooth remote-control application for RC projects with joystick control and ESP32 integration.',

    longDescription:
      'EZ Remote is a Flutter-based remote-control application designed to communicate with RC hardware. The project combines mobile development with Bluetooth communication and embedded hardware such as ESP32.',

    icon: '⌁',

    gradient: 'from-orange-500 via-red-500 to-rose-600',

    tags: [
      'Flutter',
      'Bluetooth',
      'ESP32'
    ],

    technologies: [
      'Flutter',
      'Dart',
      'Bluetooth',
      'ESP32',
      'Joystick',
      'Embedded Systems'
    ],

    features: [
      'Bluetooth connection',
      'Joystick control',
      'Remote vehicle control',
      'Connection management',
      'Speed control',
      'Battery information',
      'ESP32 communication'
    ],

    responsibilities: [
      'Designed the remote-control mobile interface',
      'Implemented joystick interaction',
      'Worked on Bluetooth communication',
      'Implemented connection and reconnection behavior',
      'Designed controls for RC vehicle movement',
      'Worked with ESP32 hardware communication',
      'Designed the application for landscape driving mode'
    ],

    challenges: [
      {
        problem:
          'The mobile application needs to communicate with external hardware with low interaction latency.',

        solution:
          'Designed the application around direct Bluetooth communication and simplified control interactions.'
      },

      {
        problem:
          'Driving interfaces need large and accessible controls.',

        solution:
          'Designed a control-oriented interface using joystick interaction and landscape orientation.'
      }
    ],

    result:
      'Developed a Flutter-based remote-control application that connects mobile controls with RC hardware through Bluetooth and ESP32.',

    screenshots: [
      {
        title: 'Remote Control',

        description:
          'Main interface for controlling the RC vehicle.'
      },

      {
        title: 'Joystick',

        description:
          'Joystick-based interaction for vehicle movement.'
      },

      {
        title: 'Bluetooth Connection',

        description:
          'Connection interface for communicating with the RC hardware.'
      }
    ],

    links: {
      github: 'https://github.com/Nget-Sophun/EZ-Remote'
    }
  },

  {
    title: 'KotMe',

    slug: 'kotme',

    type: 'Productivity Application',

    year: '2026',

    role: 'Mobile Developer',

    status: 'Development',

    description:
      'A modern productivity application for notes and tasks with categories, reminders and rich text editing.',

    longDescription:
      'KotMe is a productivity application focused on helping users manage notes and tasks. The application combines task management, categories, rich text editing and reminders in a single mobile experience.',

    icon: '✓',

    gradient: 'from-pink-500 via-rose-500 to-orange-500',

    tags: [
      'Flutter',
      'Firebase',
      'GetX'
    ],

    technologies: [
      'Flutter',
      'Dart',
      'Firebase',
      'GetX',
      'FlutterQuill',
      'Notifications'
    ],

    features: [
      'Notes',
      'Tasks',
      'Task categories',
      'Task priorities',
      'Subtasks',
      'Rich text editing',
      'Authentication',
      'Reminders',
      'Task status management'
    ],

    responsibilities: [
      'Designed application screens',
      'Built task management interfaces',
      'Implemented notes functionality',
      'Implemented task categories and priorities',
      'Built rich text editing functionality',
      'Integrated Firebase authentication',
      'Worked on notifications and reminders',
      'Implemented task state management'
    ],

    challenges: [
      {
        problem:
          'Users need to manage both notes and tasks without making the application complicated.',

        solution:
          'Organized information using categories, filters, priorities and clear task states.'
      },

      {
        problem:
          'Rich text editing requires a different interaction model from normal text input.',

        solution:
          'Integrated a rich text editor into the note workflow while keeping the surrounding UI simple.'
      }
    ],

    result:
      'Built a productivity-focused mobile application combining notes, tasks, rich text editing and reminders.',

    screenshots: [
      {
        title: 'Notes',

        description:
          'Interface for managing personal notes.'
      },

      {
        title: 'Tasks',

        description:
          'Task management interface with status, categories and priorities.'
      },

      {
        title: 'Rich Text Editor',

        description:
          'Rich text editing experience for creating detailed notes.'
      }
    ],

    links: {}
  },

  {
    title: 'Smart Converter',

    slug: 'smart-converter',

    type: 'Web Tool',

    year: '2026',

    role: 'Developer',

    status: 'Completed',

    description:
      'A developer utility tool for JSON formatting, Base64 conversion and image-to-Base64 conversion.',

    longDescription:
      'Smart Converter is a browser-based developer utility that provides common conversion tools in a simple interface. It is designed to make repetitive development tasks faster and easier.',

    icon: '{}',

    gradient: 'from-cyan-500 via-blue-500 to-indigo-600',

    tags: [
      'Flutter Web',
      'Dart',
      'Developer Tool'
    ],

    technologies: [
      'Flutter Web',
      'Dart',
      'JSON',
      'Base64'
    ],

    features: [
      'JSON formatter',
      'JSON viewer',
      'Base64 conversion',
      'Image to Base64 conversion',
      'Developer-focused interface'
    ],

    responsibilities: [
      'Designed the developer-tool interface',
      'Implemented JSON formatting functionality',
      'Implemented Base64 conversion',
      'Implemented image-to-Base64 conversion',
      'Designed responsive web layouts'
    ],

    challenges: [
      {
        problem:
          'Developer utilities need to present technical data clearly without unnecessary UI complexity.',

        solution:
          'Designed a focused interface around input, conversion and output workflows.'
      }
    ],

    result:
      'Created a lightweight browser-based developer utility for common data conversion tasks.',

    screenshots: [
      {
        title: 'JSON Formatter',

        description:
          'Format and inspect JSON data directly in the browser.'
      },

      {
        title: 'Base64 Converter',

        description:
          'Convert data to and from Base64.'
      }
    ],

    links: {}
  },

  {
    title: 'Merchant App',

    slug: 'merchant-app',

    type: 'Mobile Application',

    year: '2024',

    role: 'Mobile Developer',

    status: 'Production',

    description:
      'A production mobile application for merchants with responsive UI, API integration and state management.',

    longDescription:
      'Merchant App is a production-oriented mobile application designed for merchant workflows. The application combines responsive mobile UI, backend API integration and application state management.',

    icon: '◈',

    gradient: 'from-blue-500 via-cyan-500 to-teal-500',

    tags: [
      'Flutter',
      'BLoC',
      'REST API'
    ],

    technologies: [
      'Flutter',
      'Dart',
      'BLoC',
      'REST API',
      'Responsive UI'
    ],

    features: [
      'Merchant workflows',
      'REST API integration',
      'State management',
      'Responsive mobile UI',
      'Production application architecture'
    ],

    responsibilities: [
      'Developed Flutter application screens',
      'Integrated REST APIs',
      'Worked with BLoC state management',
      'Implemented responsive layouts',
      'Handled application states and API responses'
    ],

    challenges: [
      {
        problem:
          'Production mobile applications need predictable state transitions when working with remote APIs.',

        solution:
          'Used structured state management and clear UI states for API-driven workflows.'
      }
    ],

    result:
      'Contributed to a production mobile application for merchant workflows.',

    screenshots: [
      {
        title: 'Merchant Interface',

        description:
          'Mobile interface for merchant workflows.'
      },

      {
        title: 'API-driven Screen',

        description:
          'Application screen connected to backend services.'
      }
    ],

    links: {}
  }
]

/* =========================================================
   SKILLS
========================================================= */

const skills = [
  {
    name: 'Flutter',
    level: 'Advanced',
    icon: 'F'
  },
  {
    name: 'Vue / Nuxt',
    level: 'Advanced',
    icon: 'V'
  },
  {
    name: 'JavaScript',
    level: 'Advanced',
    icon: 'JS'
  },
  {
    name: 'TypeScript',
    level: 'Intermediate',
    icon: 'TS'
  },
  {
    name: 'Java',
    level: 'Intermediate',
    icon: 'J'
  },
  {
    name: 'Node.js',
    level: 'Intermediate',
    icon: 'N'
  },
  {
    name: 'Spring Boot',
    level: 'Intermediate',
    icon: 'S'
  },
  {
    name: 'Docker',
    level: 'Intermediate',
    icon: 'D'
  }
]

/* =========================================================
   EXPERIENCE
========================================================= */

const experiences = [
  {
    date: '2024 — Present',
    role: 'Mobile Developer',
    company: 'Turbo Tech',

    description:
      'Developing production mobile applications using Flutter and Dart. Working with REST APIs, Google Maps, responsive layouts, notifications, state management and application architecture.',

    tags: [
      'Flutter',
      'Dart',
      'BLoC',
      'REST API'
    ]
  },

  {
    date: '2022 — Present',
    role: 'Education & Robotics Team Member',
    company: 'E-Robot',

    description:
      'Researching robotics and emerging technologies while mentoring students and contributing to IoT, AI and robotics projects.',

    tags: [
      'Robotics',
      'AI',
      'IoT',
      'Education'
    ]
  },

  {
    date: '2023',
    role: 'Software Development Intern',
    company: 'Blue Technology',

    description:
      'Worked on a POS system using Java and MVC architecture with responsibility for UI, application structure and local database integration.',

    tags: [
      'Java',
      'MVC',
      'Database'
    ]
  }
]

/* =========================================================
   EDUCATION
========================================================= */

const education = [
  {
    year: '2020 — Present',

    title: 'Bachelor of Computer Science',

    school: 'Royal University of Phnom Penh',

    description:
      'Computer Science and Software Engineering with a focus on software development and modern technology.'
  },

  {
    year: '2023',

    title: 'Full-Stack Development',

    school: 'New Information Technology',

    description:
      'Studied full-stack web development and modern application development.'
  }
]

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  {
    label: 'Home',
    href: '#home'
  },

  {
    label: 'About',
    href: '#about'
  },

  {
    label: 'Skills',
    href: '#skills'
  },

  {
    label: 'Projects',
    href: '#projects'
  },

  {
    label: 'Experience',
    href: '#experience'
  },

  {
    label: 'Contact',
    href: '#contact'
  }
]

/* =========================================================
   FUNCTIONS
========================================================= */

const toggleTheme = () => {
  isDark.value = !isDark.value

  document.documentElement.classList.toggle(
    'dark',
    isDark.value
  )

  document.documentElement.classList.toggle(
    'light',
    !isDark.value
  )

  localStorage.setItem(
    'portfolio-theme',
    isDark.value ? 'dark' : 'light'
  )
}

const scrollTo = (href: string) => {
  mobileMenuOpen.value = false

  const element = document.querySelector(href)

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    })
  }
}

const openProject = (project: Project) => {
  selectedProject.value = project

  document.body.style.overflow = 'hidden'
}

const closeProject = () => {
  selectedProject.value = null

  document.body.style.overflow = ''
}

/* =========================================================
   LIFECYCLE
========================================================= */

onMounted(() => {
  const savedTheme =
    localStorage.getItem('portfolio-theme')

  if (savedTheme === 'light') {
    isDark.value = false
  } else {
    isDark.value = true
  }

  document.documentElement.classList.toggle(
    'dark',
    isDark.value
  )

  document.documentElement.classList.toggle(
    'light',
    !isDark.value
  )

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeProject()
    }
  })
})
</script>

<template>
  <div
    class="min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100 transition-colors duration-500"
  >

    <!-- =====================================================
         BACKGROUND
    ====================================================== -->

    <div
      class="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        class="absolute left-[-180px] top-[-180px] h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-3xl"
      />

      <div
        class="absolute right-[-180px] top-[25%] h-[450px] w-[450px] rounded-full bg-cyan-600/10 blur-3xl"
      />

      <div
        class="absolute bottom-[-200px] left-[30%] h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-3xl"
      />
    </div>

    <!-- =====================================================
         NAVBAR
    ====================================================== -->

    <header
      class="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl"
    >
      <div class="section-container">

        <nav
          class="flex h-18 items-center justify-between"
        >

          <!-- Logo -->

          <button
            class="group flex items-center gap-3"
            @click="scrollTo('#home')"
          >
            <div
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-black text-zinc-950 shadow-lg shadow-violet-500/10"
            >
              NS
            </div>

            <div class="hidden text-left sm:block">
              <div class="text-sm font-bold">
                Nget Sophun
              </div>

              <div class="text-xs text-zinc-500">
                Developer
              </div>
            </div>
          </button>

          <!-- Desktop navigation -->

          <div
            class="hidden items-center gap-1 lg:flex"
          >
            <button
              v-for="item in navItems"
              :key="item.href"
              class="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/5 hover:text-white"
              @click="scrollTo(item.href)"
            >
              {{ item.label }}
            </button>
          </div>

          <!-- Right -->

          <div class="flex items-center gap-2">

            <!-- Theme -->

            <button
              aria-label="Toggle theme"
              class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition hover:border-violet-500 hover:text-violet-400"
              @click="toggleTheme"
            >
              <span v-if="isDark">
                ☀
              </span>

              <span v-else>
                ☾
              </span>
            </button>

            <!-- Mobile -->

            <button
              class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 lg:hidden"
              @click="
                mobileMenuOpen = !mobileMenuOpen
              "
            >
              <span class="text-xl">
                {{ mobileMenuOpen ? '×' : '☰' }}
              </span>
            </button>

            <!-- CTA -->

            <button
              class="hidden rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-violet-400 sm:block"
              @click="scrollTo('#contact')"
            >
              Let's talk
            </button>
          </div>
        </nav>

        <!-- Mobile navigation -->

        <div
          v-if="mobileMenuOpen"
          class="border-t border-white/10 py-4 lg:hidden"
        >
          <div class="grid gap-1">

            <button
              v-for="item in navItems"
              :key="item.href"
              class="rounded-lg px-4 py-3 text-left text-sm font-medium text-zinc-400 hover:bg-white/5 hover:text-white"
              @click="scrollTo(item.href)"
            >
              {{ item.label }}
            </button>

          </div>
        </div>

      </div>
    </header>

    <!-- =====================================================
         MAIN
    ====================================================== -->

    <main id="home">

      <!-- ===================================================
           HERO
      ==================================================== -->

      <section
        class="grid-background relative flex min-h-screen items-center pt-28"
      >

        <div class="section-container py-20">

          <div
            class="grid items-center gap-14 lg:grid-cols-[1.25fr_.75fr]"
          >

            <!-- LEFT -->

            <div>

              <div
                class="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-sm text-emerald-400"
              >

                <span class="relative flex h-2 w-2">

                  <span
                    class="pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400"
                  />

                  <span
                    class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"
                  />

                </span>

                Available for opportunities

              </div>

              <p
                class="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-violet-400"
              >
                Hello, I'm
              </p>

              <h1
                class="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
              >
                Nget

                <span class="gradient-text">
                  Sophun.
                </span>
              </h1>

              <h2
                class="mt-7 text-2xl font-bold text-zinc-300 sm:text-3xl"
              >
                I build digital products
                <span class="text-violet-500">
                  .
                </span>
              </h2>

              <p
                class="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg"
              >
                I'm a developer from Cambodia focused on
                building modern mobile and web
                applications. I enjoy turning ideas into
                clean, useful and scalable products with
                <span class="font-semibold text-zinc-200">
                  Flutter, Vue, Nuxt and modern
                  technologies.
                </span>
              </p>

              <!-- Buttons -->

              <div
                class="mt-9 flex flex-wrap gap-3"
              >

                <button
                  class="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-zinc-950 shadow-xl transition hover:-translate-y-1 hover:bg-violet-400"
                  @click="scrollTo('#projects')"
                >
                  View my work

                  <span
                    class="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </button>

                <a
                  href="/cv.pdf"
                  download
                  class="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-bold text-zinc-200 transition hover:-translate-y-1 hover:border-violet-500 hover:text-violet-400"
                >
                  Download CV

                  <span>
                    ↓
                  </span>
                </a>

              </div>

              <!-- Social -->

              <div
                class="mt-10 flex items-center gap-5 text-sm text-zinc-500"
              >

                <span>
                  Find me on
                </span>

                <a
                  href="https://github.com/Nget-Sophun"
                  target="_blank"
                  class="font-semibold transition hover:text-violet-400"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  class="font-semibold transition hover:text-violet-400"
                >
                  LinkedIn
                </a>

              </div>

            </div>

            <!-- RIGHT CODE CARD -->

            <div
              class="relative hidden lg:block"
            >

              <div
                class="animate-float relative mx-auto w-full max-w-md"
              >

                <div
                  class="absolute inset-10 rounded-full bg-violet-500/20 blur-3xl"
                />

                <div
                  class="glass relative overflow-hidden rounded-[2rem] border border-white/10 p-8 shadow-2xl shadow-violet-500/10"
                >

                  <div
                    class="flex items-center justify-between"
                  >

                    <div class="flex gap-2">
                      <span
                        class="h-3 w-3 rounded-full bg-red-400"
                      />

                      <span
                        class="h-3 w-3 rounded-full bg-yellow-400"
                      />

                      <span
                        class="h-3 w-3 rounded-full bg-green-400"
                      />
                    </div>

                    <span
                      class="font-mono text-xs text-zinc-500"
                    >
                      developer.ts
                    </span>

                  </div>

                  <div
                    class="mt-10 font-mono text-sm leading-8"
                  >

                    <div>
                      <span class="text-violet-400">
                        const
                      </span>

                      <span class="text-blue-400">
                        developer
                      </span>

                      =

                      <span class="text-orange-400">
                        {
                      </span>
                    </div>

                    <div class="pl-5">
                      <span class="text-zinc-500">
                        name:
                      </span>

                      <span class="text-emerald-400">
                        "Nget Sophun"
                      </span>
                    </div>

                    <div class="pl-5">
                      <span class="text-zinc-500">
                        role:
                      </span>

                      <span class="text-emerald-400">
                        "Developer"
                      </span>
                    </div>

                    <div class="pl-5">
                      <span class="text-zinc-500">
                        location:
                      </span>

                      <span class="text-emerald-400">
                        "Cambodia"
                      </span>
                    </div>

                    <div class="pl-5">
                      <span class="text-zinc-500">
                        focus:
                      </span>

                      <span class="text-emerald-400">
                        "Building"
                      </span>
                    </div>

                    <div>
                      <span class="text-orange-400">
                        }
                      </span>
                    </div>

                  </div>

                  <div
                    class="mt-10 grid grid-cols-4 gap-3"
                  >

                    <div
                      v-for="tech in [
                        'Vue',
                        'Nuxt',
                        'Flutter',
                        'TS'
                      ]"
                      :key="tech"
                      class="rounded-xl border border-white/10 bg-white/5 p-3 text-center text-xs font-bold"
                    >
                      {{ tech }}
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <!-- ===================================================
           ABOUT
      ==================================================== -->

      <section
        id="about"
        class="border-t border-white/10 py-28"
      >

        <div class="section-container">

          <div
            class="grid gap-14 lg:grid-cols-[.8fr_1.2fr]"
          >

            <div>

              <p
                class="text-sm font-bold uppercase tracking-[0.25em] text-violet-400"
              >
                About me
              </p>

              <h2
                class="mt-4 text-4xl font-black tracking-tight sm:text-5xl"
              >
                More than

                <span class="gradient-text">
                  just code.
                </span>
              </h2>

            </div>

            <div>

              <p
                class="text-lg leading-9 text-zinc-400"
              >
                I'm a Computer Science student and
                developer passionate about technology,
                software development and building useful
                products.
              </p>

              <p
                class="mt-6 text-lg leading-9 text-zinc-400"
              >
                My main experience is in mobile development
                with Flutter, while I'm also expanding deeply
                into modern web development with Vue, Nuxt
                and TypeScript.
              </p>

              <p
                class="mt-6 text-lg leading-9 text-zinc-400"
              >
                Outside of software development, I enjoy
                robotics, IoT, electronics and experimenting
                with AI-powered projects.
              </p>

              <div
                class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
              >

                <div
                  class="rounded-2xl border border-white/10 p-5"
                >
                  <div class="text-3xl font-black">
                    3+
                  </div>

                  <div class="mt-1 text-xs text-zinc-500">
                    Years coding
                  </div>
                </div>

                <div
                  class="rounded-2xl border border-white/10 p-5"
                >
                  <div class="text-3xl font-black">
                    10+
                  </div>

                  <div class="mt-1 text-xs text-zinc-500">
                    Projects
                  </div>
                </div>

                <div
                  class="rounded-2xl border border-white/10 p-5"
                >
                  <div class="text-3xl font-black">
                    8+
                  </div>

                  <div class="mt-1 text-xs text-zinc-500">
                    Technologies
                  </div>
                </div>

                <div
                  class="rounded-2xl border border-white/10 p-5"
                >
                  <div class="text-3xl font-black">
                    ∞
                  </div>

                  <div class="mt-1 text-xs text-zinc-500">
                    Curiosity
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <!-- ===================================================
           SKILLS
      ==================================================== -->

      <section
        id="skills"
        class="border-y border-white/10 bg-white/[0.02] py-28"
      >

        <div class="section-container">

          <div class="max-w-2xl">

            <p
              class="text-sm font-bold uppercase tracking-[0.25em] text-violet-400"
            >
              My toolkit
            </p>

            <h2
              class="mt-4 text-4xl font-black tracking-tight sm:text-5xl"
            >
              Technologies I

              <span class="gradient-text">
                work with.
              </span>
            </h2>

            <p
              class="mt-5 leading-8 text-zinc-500"
            >
              A combination of mobile, web, backend and
              development tools that I use to turn ideas
              into products.
            </p>

          </div>

          <div
            class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >

            <div
              v-for="skill in skills"
              :key="skill.name"
              class="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:-translate-y-1 hover:border-violet-500/50 hover:bg-white/[0.04]"
            >

              <div
                class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-sm font-black"
              >
                {{ skill.icon }}
              </div>

              <h3 class="mt-5 font-bold">
                {{ skill.name }}
              </h3>

              <div
                class="mt-2 text-xs text-zinc-500"
              >
                {{ skill.level }}
              </div>

              <div
                class="mt-5 h-1 overflow-hidden rounded-full bg-white/10"
              >

                <div
                  class="h-full w-4/5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-500 group-hover:w-full"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      <!-- ===================================================
           PROJECTS
      ==================================================== -->

      <section
        id="projects"
        class="border-b border-white/10 py-28"
      >

        <div class="section-container">

          <div
            class="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
          >

            <div>

              <p
                class="text-sm font-bold uppercase tracking-[0.25em] text-violet-400"
              >
                Selected work
              </p>

              <h2
                class="mt-4 text-4xl font-black tracking-tight sm:text-5xl"
              >
                Things I've

                <span class="gradient-text">
                  built.
                </span>
              </h2>

              <p
                class="mt-5 max-w-2xl leading-8 text-zinc-500"
              >
                A selection of mobile applications,
                developer tools, open-source packages and
                technology projects.
              </p>

            </div>

            <a
              href="https://github.com/Nget-Sophun"
              target="_blank"
              class="text-sm font-bold text-zinc-400 transition hover:text-violet-400"
            >
              View GitHub →
            </a>

          </div>

          <!-- PROJECT GRID -->

          <div
            class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >

            <article
              v-for="project in projects"
              :key="project.slug"
              class="project-card group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]"
            >

              <!-- Visual -->

              <div
                class="relative h-52 overflow-hidden bg-gradient-to-br"
                :class="project.gradient"
              >

                <div
                  class="absolute inset-0 bg-black/20"
                />

                <div
                  class="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
                />

                <div
                  class="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-black/10 blur-2xl"
                />

                <div
                  class="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl bg-white/15 text-4xl font-black text-white shadow-2xl backdrop-blur-md transition duration-500 group-hover:scale-110 group-hover:rotate-3"
                >
                  {{ project.icon }}
                </div>

                <span
                  class="absolute right-4 top-4 rounded-full bg-black/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md"
                >
                  {{ project.type }}
                </span>

              </div>

              <!-- Content -->

              <div class="p-6">

                <div
                  class="flex items-start justify-between gap-3"
                >

                  <div>

                    <h3 class="text-xl font-bold">
                      {{ project.title }}
                    </h3>

                    <p
                      class="mt-1 text-xs text-zinc-500"
                    >
                      {{ project.role }}
                      <span
                        v-if="project.company"
                      >
                        · {{ project.company }}
                      </span>
                    </p>

                  </div>

                  <span
                    class="shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500"
                  >
                    {{ project.year }}
                  </span>

                </div>

                <p
                  class="mt-4 min-h-20 text-sm leading-7 text-zinc-400"
                >
                  {{ project.description }}
                </p>

                <!-- Tags -->

                <div
                  class="mt-5 flex flex-wrap gap-2"
                >

                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400"
                  >
                    {{ tag }}
                  </span>

                </div>

                <!-- Case study -->

                <button
                  class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-violet-400 transition hover:gap-3 hover:text-violet-300"
                  @click="openProject(project)"
                >
                  View case study

                  <span>
                    →
                  </span>
                </button>

              </div>

            </article>

          </div>

        </div>

      </section>

      <!-- ===================================================
           EXPERIENCE
      ==================================================== -->

      <section
        id="experience"
        class="border-b border-white/10 py-28"
      >

        <div class="section-container">

          <div class="max-w-2xl">

            <p
              class="text-sm font-bold uppercase tracking-[0.25em] text-violet-400"
            >
              Experience
            </p>

            <h2
              class="mt-4 text-4xl font-black tracking-tight sm:text-5xl"
            >
              My professional

              <span class="gradient-text">
                journey.
              </span>
            </h2>

          </div>

          <div class="mt-14">

            <div
              v-for="(experience, index) in experiences"
              :key="experience.role"
              class="relative grid gap-8 pb-12 md:grid-cols-[180px_1fr]"
            >

              <div
                v-if="index !== experiences.length - 1"
                class="absolute bottom-0 left-[6px] top-8 w-px bg-white/10 md:left-[186px]"
              />

              <div
                class="relative z-10 text-sm font-bold text-violet-400"
              >
                {{ experience.date }}
              </div>

              <div class="relative">

                <span
                  class="absolute -left-[33px] top-1 hidden h-3 w-3 rounded-full border-2 border-violet-500 bg-zinc-950 md:block"
                />

                <h3 class="text-xl font-bold">
                  {{ experience.role }}
                </h3>

                <p
                  class="mt-1 font-medium text-zinc-500"
                >
                  {{ experience.company }}
                </p>

                <p
                  class="mt-5 max-w-3xl leading-8 text-zinc-500"
                >
                  {{ experience.description }}
                </p>

                <div
                  class="mt-5 flex flex-wrap gap-2"
                >

                  <span
                    v-for="tag in experience.tags"
                    :key="tag"
                    class="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-500"
                  >
                    {{ tag }}
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <!-- ===================================================
           EDUCATION
      ==================================================== -->

      <section
        class="border-b border-white/10 py-28"
      >

        <div class="section-container">

          <div
            class="grid gap-12 lg:grid-cols-2"
          >

            <div>

              <p
                class="text-sm font-bold uppercase tracking-[0.25em] text-violet-400"
              >
                Education
              </p>

              <h2
                class="mt-4 text-4xl font-black tracking-tight sm:text-5xl"
              >
                Always

                <span class="gradient-text">
                  learning.
                </span>
              </h2>

              <p
                class="mt-5 max-w-xl leading-8 text-zinc-500"
              >
                Technology changes quickly. I believe
                continuous learning and experimentation
                are essential for becoming a better
                developer.
              </p>

            </div>

            <div class="space-y-4">

              <div
                v-for="item in education"
                :key="item.title"
                class="rounded-2xl border border-white/10 p-6"
              >

                <div
                  class="text-xs font-bold uppercase tracking-wider text-violet-400"
                >
                  {{ item.year }}
                </div>

                <h3 class="mt-3 text-xl font-bold">
                  {{ item.title }}
                </h3>

                <p
                  class="mt-1 text-sm font-medium text-zinc-500"
                >
                  {{ item.school }}
                </p>

                <p
                  class="mt-4 text-sm leading-7 text-zinc-500"
                >
                  {{ item.description }}
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <!-- ===================================================
           CONTACT
      ==================================================== -->

      <section
        id="contact"
        class="relative overflow-hidden py-32"
      >

        <div
          class="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl"
        />

        <div
          class="section-container text-center"
        >

          <p
            class="text-sm font-bold uppercase tracking-[0.25em] text-violet-400"
          >
            Contact
          </p>

          <h2
            class="mx-auto mt-5 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl"
          >
            Have an idea?

            <br />

            <span class="gradient-text">
              Let's build it.
            </span>
          </h2>

          <p
            class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-500"
          >
            Whether you have a project, opportunity or
            simply want to talk about technology, I'd love
            to hear from you.
          </p>

          <div
            class="mt-10 flex flex-wrap justify-center gap-3"
          >

            <a
              href="mailto:ngetsophun@gmail.com"
              class="rounded-xl bg-white px-7 py-4 text-sm font-bold text-zinc-950 shadow-xl transition hover:-translate-y-1 hover:bg-violet-400"
            >
              Send me an email →
            </a>

            <a
              href="tel:+85510640074"
              class="rounded-xl border border-white/10 px-7 py-4 text-sm font-bold transition hover:-translate-y-1 hover:border-violet-500 hover:text-violet-400"
            >
              Call me
            </a>

          </div>

          <div
            class="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-zinc-500"
          >

            <span>
              Phnom Penh, Cambodia
            </span>

            <span>
              •
            </span>

            <span>
              ngetsophun@gmail.com
            </span>

          </div>

        </div>

      </section>

    </main>

    <!-- =====================================================
         FOOTER
    ====================================================== -->

    <footer
      class="border-t border-white/10 py-8"
    >

      <div
        class="section-container flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row"
      >

        <p>
          © {{ new Date().getFullYear() }}
          Nget Sophun.
          All rights reserved.
        </p>

        <div class="flex gap-5">

          <a
            href="https://github.com/Nget-Sophun"
            target="_blank"
            class="hover:text-violet-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            class="hover:text-violet-400"
          >
            LinkedIn
          </a>

          <a
            href="mailto:ngetsophun@gmail.com"
            class="hover:text-violet-400"
          >
            Email
          </a>

        </div>

      </div>

    </footer>

    <!-- =====================================================
         PROJECT DETAIL MODAL
    ====================================================== -->

    <Teleport to="body">

      <Transition name="modal">

        <div
          v-if="selectedProject"
          class="fixed inset-0 z-[100] overflow-y-auto bg-black/80 p-4 backdrop-blur-md sm:p-8"
          @click.self="closeProject"
        >

          <div
            class="mx-auto my-6 max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-2xl sm:my-10"
          >

            <!-- Modal Header -->

            <div
              class="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-zinc-950/90 px-5 py-4 backdrop-blur-xl sm:px-8"
            >

              <div class="flex items-center gap-3">

                <div
                  class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-lg font-black text-white"
                  :class="selectedProject.gradient"
                >
                  {{ selectedProject.icon }}
                </div>

                <div>

                  <div
                    class="text-sm font-bold"
                  >
                    {{ selectedProject.title }}
                  </div>

                  <div
                    class="text-xs text-zinc-500"
                  >
                    {{ selectedProject.type }}
                  </div>

                </div>

              </div>

              <button
                class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-xl text-zinc-400 transition hover:border-white/20 hover:text-white"
                @click="closeProject"
              >
                ×
              </button>

            </div>

            <!-- Modal Content -->

            <div class="p-5 sm:p-8 lg:p-12">

              <!-- Hero -->

              <div
                class="grid gap-10 lg:grid-cols-[1.15fr_.85fr]"
              >

                <div>

                  <div
                    class="mb-5 flex flex-wrap gap-2"
                  >

                    <span
                      class="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-bold text-violet-400"
                    >
                      {{ selectedProject.status }}
                    </span>

                    <span
                      class="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-500"
                    >
                      {{ selectedProject.year }}
                    </span>

                  </div>

                  <h2
                    class="text-4xl font-black tracking-tight sm:text-6xl"
                  >
                    {{ selectedProject.title }}
                  </h2>

                  <p
                    class="mt-6 text-lg leading-8 text-zinc-400"
                  >
                    {{ selectedProject.longDescription }}
                  </p>

                  <!-- Project metadata -->

                  <div
                    class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3"
                  >

                    <div
                      class="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                    >

                      <div
                        class="text-[10px] font-bold uppercase tracking-wider text-zinc-500"
                      >
                        Role
                      </div>

                      <div
                        class="mt-2 text-sm font-bold"
                      >
                        {{ selectedProject.role }}
                      </div>

                    </div>

                    <div
                      v-if="selectedProject.company"
                      class="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                    >

                      <div
                        class="text-[10px] font-bold uppercase tracking-wider text-zinc-500"
                      >
                        Company
                      </div>

                      <div
                        class="mt-2 text-sm font-bold"
                      >
                        {{ selectedProject.company }}
                      </div>

                    </div>

                    <div
                      class="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                    >

                      <div
                        class="text-[10px] font-bold uppercase tracking-wider text-zinc-500"
                      >
                        Year
                      </div>

                      <div
                        class="mt-2 text-sm font-bold"
                      >
                        {{ selectedProject.year }}
                      </div>

                    </div>

                  </div>

                </div>

                <!-- Project visual -->

                <div
                  class="relative min-h-[280px] overflow-hidden rounded-[2rem] bg-gradient-to-br"
                  :class="selectedProject.gradient"
                >

                  <div
                    class="absolute inset-0 bg-black/20"
                  />

                  <div
                    class="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2.5rem] bg-white/15 text-7xl font-black text-white shadow-2xl backdrop-blur-md"
                  >
                    {{ selectedProject.icon }}
                  </div>

                  <div
                    class="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/20 p-4 backdrop-blur-xl"
                  >

                    <div
                      class="text-xs font-bold uppercase tracking-wider text-white/60"
                    >
                      Project
                    </div>

                    <div
                      class="mt-1 font-bold text-white"
                    >
                      {{ selectedProject.title }}
                    </div>

                  </div>

                </div>

              </div>

              <!-- Divider -->

              <div
                class="my-12 h-px bg-white/10"
              />

              <!-- Features -->

              <div
                class="grid gap-12 lg:grid-cols-2"
              >

                <!-- Features -->

                <section>

                  <p
                    class="text-xs font-bold uppercase tracking-[0.25em] text-violet-400"
                  >
                    Features
                  </p>

                  <h3
                    class="mt-3 text-2xl font-black"
                  >
                    What the project includes
                  </h3>

                  <div
                    class="mt-6 grid gap-3"
                  >

                    <div
                      v-for="feature in selectedProject.features"
                      :key="feature"
                      class="flex gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4"
                    >

                      <span
                        class="mt-0.5 text-violet-400"
                      >
                        ✓
                      </span>

                      <span
                        class="text-sm leading-6 text-zinc-400"
                      >
                        {{ feature }}
                      </span>

                    </div>

                  </div>

                </section>

                <!-- Technologies -->

                <section>

                  <p
                    class="text-xs font-bold uppercase tracking-[0.25em] text-violet-400"
                  >
                    Technology
                  </p>

                  <h3
                    class="mt-3 text-2xl font-black"
                  >
                    Technology stack
                  </h3>

                  <div
                    class="mt-6 flex flex-wrap gap-3"
                  >

                    <span
                      v-for="technology in selectedProject.technologies"
                      :key="technology"
                      class="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-medium text-zinc-300"
                    >
                      {{ technology }}
                    </span>

                  </div>

                </section>

              </div>

              <!-- Responsibilities -->

              <section class="mt-16">

                <p
                  class="text-xs font-bold uppercase tracking-[0.25em] text-violet-400"
                >
                  My contribution
                </p>

                <h3
                  class="mt-3 text-2xl font-black"
                >
                  What I worked on
                </h3>

                <div
                  class="mt-6 grid gap-3 sm:grid-cols-2"
                >

                  <div
                    v-for="responsibility in selectedProject.responsibilities"
                    :key="responsibility"
                    class="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                  >

                    <div class="flex gap-3">

                      <span
                        class="text-violet-400"
                      >
                        →
                      </span>

                      <span
                        class="text-sm leading-6 text-zinc-400"
                      >
                        {{ responsibility }}
                      </span>

                    </div>

                  </div>

                </div>

              </section>

              <!-- Challenges -->

              <section class="mt-16">

                <p
                  class="text-xs font-bold uppercase tracking-[0.25em] text-violet-400"
                >
                  Problem solving
                </p>

                <h3
                  class="mt-3 text-2xl font-black"
                >
                  Challenges & solutions
                </h3>

                <div
                  class="mt-6 grid gap-5"
                >

                  <div
                    v-for="(challenge, index) in selectedProject.challenges"
                    :key="index"
                    class="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:grid-cols-2"
                  >

                    <div>

                      <div
                        class="text-xs font-bold uppercase tracking-wider text-red-400"
                      >
                        Challenge
                      </div>

                      <p
                        class="mt-3 text-sm leading-7 text-zinc-400"
                      >
                        {{ challenge.problem }}
                      </p>

                    </div>

                    <div>

                      <div
                        class="text-xs font-bold uppercase tracking-wider text-emerald-400"
                      >
                        Solution
                      </div>

                      <p
                        class="mt-3 text-sm leading-7 text-zinc-400"
                      >
                        {{ challenge.solution }}
                      </p>

                    </div>

                  </div>

                </div>

              </section>

              <!-- Screenshots -->

              <section class="mt-16">

                <p
                  class="text-xs font-bold uppercase tracking-[0.25em] text-violet-400"
                >
                  Project gallery
                </p>

                <h3
                  class="mt-3 text-2xl font-black"
                >
                  Screens & interface
                </h3>

                <div
                  class="mt-6 grid gap-5 md:grid-cols-3"
                >

                  <div
                    v-for="screenshot in selectedProject.screenshots"
                    :key="screenshot.title"
                    class="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
                  >

                    <!-- Image -->

                    <div
                      v-if="screenshot.image"
                      class="aspect-[4/3] overflow-hidden bg-zinc-900"
                    >

                      <img
                        :src="screenshot.image"
                        :alt="screenshot.title"
                        class="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />

                    </div>

                    <!-- Placeholder -->

                    <div
                      v-else
                      class="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800"
                    >

                      <div
                        class="text-center"
                      >

                        <div
                          class="text-4xl font-black text-zinc-700"
                        >
                          {{ selectedProject.icon }}
                        </div>

                        <div
                          class="mt-2 text-xs text-zinc-600"
                        >
                          Add screenshot
                        </div>

                      </div>

                    </div>

                    <div class="p-5">

                      <h4 class="font-bold">
                        {{ screenshot.title }}
                      </h4>

                      <p
                        class="mt-2 text-xs leading-6 text-zinc-500"
                      >
                        {{ screenshot.description }}
                      </p>

                    </div>

                  </div>

                </div>

              </section>

              <!-- Result -->

              <section
                class="mt-16 rounded-3xl border border-violet-500/20 bg-violet-500/5 p-6 sm:p-8"
              >

                <p
                  class="text-xs font-bold uppercase tracking-[0.25em] text-violet-400"
                >
                  Result
                </p>

                <p
                  class="mt-4 text-lg leading-8 text-zinc-300"
                >
                  {{ selectedProject.result }}
                </p>

              </section>

              <!-- Links -->

              <div
                v-if="
                  selectedProject.links.github ||
                  selectedProject.links.demo ||
                  selectedProject.links.playStore
                "
                class="mt-8 flex flex-wrap gap-3"
              >

                <a
                  v-if="selectedProject.links.github"
                  :href="selectedProject.links.github"
                  target="_blank"
                  class="rounded-xl bg-white px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-violet-400"
                >
                  GitHub →
                </a>

                <a
                  v-if="selectedProject.links.demo"
                  :href="selectedProject.links.demo"
                  target="_blank"
                  class="rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-zinc-300 transition hover:border-violet-500 hover:text-violet-400"
                >
                  Live Demo →
                </a>

                <a
                  v-if="selectedProject.links.playStore"
                  :href="selectedProject.links.playStore"
                  target="_blank"
                  class="rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-zinc-300 transition hover:border-violet-500 hover:text-violet-400"
                >
                  Google Play →
                </a>

              </div>

            </div>

          </div>

        </div>

      </Transition>

    </Teleport>

  </div>
</template>