<script setup lang="ts">
const navOpen = ref(false)
const scrolled = ref(false)
const selectedProject = ref<any>(null)
const activeImage = ref(0)

const activeGallery = computed(() =>
  selectedProject.value?.images?.length
    ? selectedProject.value.images
    : selectedProject.value
      ? [selectedProject.value.img]
      : []
)

function openProject(project: any) {
  if (project.url) {
    window.open(project.url, '_blank', 'noopener,noreferrer')
    return
  }
  selectedProject.value = project
  activeImage.value = 0
  document.body.style.overflow = 'hidden'
}

function closeProject() {
  selectedProject.value = null
  document.body.style.overflow = ''
}

function nextImage() {
  activeImage.value = (activeImage.value + 1) % activeGallery.value.length
}
function prevImage() {
  activeImage.value = (activeImage.value - 1 + activeGallery.value.length) % activeGallery.value.length
}

function handleKeydown(e: KeyboardEvent) {
  if (!selectedProject.value) return
  if (e.key === 'Escape') closeProject()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', handleKeydown)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
})
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' }
]

const socials = [
  { label: 'Facebook', href: 'https://web.facebook.com/Nget.Sophun.1' },
  { label: 'GitHub', href: 'https://github.com/Ngetsophun' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nget-sophun-854b8b24a' },
  { label: 'Telegram', href: 'https://t.me/PhunZz' }
]

const skills = [
  { name: 'Flutter & Dart', level: 90 },
  { name: 'MVC/MVVM Architecture & Design Patterns', level: 75 },
  { name: 'State Management (BLoC, GetX, Riverpod)', level: 75 },
  { name: 'RESTful APIs & JSON', level: 80 },
  { name: 'Firebase Authentication & Cloud Services', level: 75 },
  { name: 'Java, Kotlin, Jetpack Compose', level: 65 },
  { name: 'Backend Development (Node.js, Express.js, Laravel, Spring Boot)', level: 65 },
  { name: 'MySQL & SQL Server', level: 65 },
  { name: 'Robotics & Internet of Things (IoT)', level: 80 },
  { name: 'Google Maps & WebSocket Integration', level: 70 }
]

const stack = [
  'Flutter', 'Dart', 'Java', 'Kotlin', 'Node.js', 'Laravel', 'Spring Boot',
  'Firebase', 'MySQL', 'SQL Server', 'Git', 'GitHub', 'GitLab', 'Trello',
  'Arduino / IoT'
]

const experience = [
  {
    year: '2025 — Present',
    role: 'Mobile Developer',
    org: 'Canadia Bank',
    points: [
      'Developed a cross-platform property evaluation application (PEDS) using Flutter.',
      'Implemented Google Maps with custom markers, polygons, and GPS tracking.',
      'Integrated REST APIs for property data management.',
      'Built property inspection, valuation, and reporting modules.',
      'Optimized application performance and enhanced user experience.',
      'Gained working knowledge of the T24 core banking system to support integration and data flow.',
      'Collaborated with cross-functional teams in an Agile environment.',
      'Performed automated testing using Katalon Studio to improve release quality.',
      'Maintained, supported, and enhanced feature development for the Center of Excellent (COE) App.',
      'Fixed bugs and improved application stability for the COE App.',
      'Maintained, supported, and enhanced the Customer Feedback web application.',
      'Developed a chat application using polling for near real-time messaging (CNB-IM).',
      'Optimized application performance and enhanced user experience for CNB-IM.'
    ]
  },
   {
    year: 'Present',
    role: 'Freelance Mobile Developer',
    org: 'Damra Team',
    points: [
       'Designed and built Damra, a gamified learning app, independently using Flutter and Dart.',
    'Built a level-based progression system with points, badges, and unlockable content to drive engagement.',
    'Developed real-time global and group leaderboards for competitive, social learning.',
    'Designed interactive quizzes and structured, progressive learning paths.',
    'Integrated REST APIs and Firebase for data, authentication, and real-time updates.',
    "Owned the app's development independently, from planning through testing."
    ]
  },
  {
    year: '2024 — 2025',
    role: 'Mobile Developer',
    org: 'Turbo Tech',
    points: [
      'Built the Merchant App with Flutter and the BLoC pattern, from screen design to API integration.',
      'Developed the Red Ant customer e-commerce app — UI, Google Maps and REST API.',
      'Built the Driver App and a Smart GPS App, handling UI, notifications and map integration.',
      'Ensured responsive layouts across tablet and mobile screens.'
    ]
  },
  {
    year: '2023',
    role: 'Software Intern',
    org: 'Blue Technology',
    points: [
      'Developed a POS System in Java using the MVC pattern.',
      'Designed the app structure and connected it to a local Room database.'
    ]
  },
  {
  year: '2022 — 2025',
  role: 'Robotics & Education Team',
  org: 'E-Robot',
  points: [
    'Led the E-Robot team and headed the STEM for Youth project.',
    'Developed a mobile application for controlling robots.',
    'Built robots for exhibitions, competitions, and demonstrations, including an IoT smart-home controlled by hand, voice and face recognition.',
    'Developed IoT applications to control robots via mobile devices.',
    'Integrated AI features including hand gesture, voice, and face recognition, including a face-recognition wake-up alarm system.',
    'Collaborated on robotics research and development projects.',
    'Programmed and taught robotics to children in rural areas including Ratanakiri, Takeo, Battambang, and Phnom Penh.',
    'Mentored Python and Flutter courses, and participated in robotics competitions.'
  ]
}
]

const education = [
  { year: '2020 — 2024', title: 'Bachelor of Computer Science & Software Engineering', org: 'Royal University of Phnom Penh' },
  { year: '2023', title: 'Full-Stack Development', org: 'New Information Technology (NIT)' },
  { year: '2022 — 2023', title: 'Mentor Python Programming Course, Dart and Flutter Course, Robotics Course, PCB Design', org: 'E-Robot' },
  { year: '2021 — 2022', title: 'C/C++, Java & Web Development', org: 'Etec Center' }
]

const projects = [
  // {
  //   title: 'Smart GPS App',
  //   tag: 'Flutter · Google Maps · REST API',
  //   desc: 'Real-time GPS tracking app built with Flutter, integrating live maps and location APIs.',
  //   img: 'https://ngetsophun.netlify.app/assets/img/gps_app1.png'
  // },
  {
  title: 'Smart GPS App',
  tag: 'Flutter · Google Maps · REST API',
  desc: 'Real-time GPS tracking app built with Flutter, integrating live maps and location APIs.',
  img: 'https://ngetsophun.netlify.app/assets/img/gps_app1.png',
  images: [
    'https://ngetsophun.netlify.app/assets/img/gps_app1.png',
    'https://ngetsophun.netlify.app/assets/img/gps_app2.png',
    'https://ngetsophun.netlify.app/assets/img/gps_app3.png'
  ]
},
  {
    title: 'Merchant App',
    tag: 'Flutter · BLoC · Internal Storage',
    desc: 'Merchant-facing app for Turbo Tech — screen design, app structure and data/API access.',
    img: 'https://ngetsophun.netlify.app/assets/img/merchat_app1.png'
  },
  {
    title: 'Driver App',
    tag: 'Flutter · Notifications · REST API',
    desc: 'Driver app handling live jobs and notifications, built end-to-end with Flutter and Dart.',
    img: 'https://ngetsophun.netlify.app/assets/img/driver_app1.png'
  },
  {
    title: 'Red Ant Customer App',
    tag: 'Flutter · Google Maps · REST API',
    desc: 'E-commerce customer app with map-based ordering and a fully custom UI.',
    img: 'https://ngetsophun.netlify.app/assets/img/customer_app1.png'
  },
  
  {
    title: 'Damra App',
    tag: 'Flutter · Gamification · Firebase',
    desc: 'A gamified learning platform with levels, badges, and real-time leaderboards to make learning fun and competitive.',
    img: '/img/damra.png'
  },
  {
  title: 'E-Robot',
  tag: 'IoT · AI · Python · Flutter',
  desc: 'Developed an AI-powered IoT system for controlling robots and smart home devices through mobile applications, featuring hand gesture, voice, and face recognition.',
  img: '/img/smart_home.jpg'
},
  {
    title: 'Properties Evaluation (PEDS)',
    tag: 'Flutter · Google Maps · REST API',
    desc: 'A property evaluation app with GPS tracking, custom map markers, and tools for inspection, valuation, and reporting.',
    img: '/img/peds_app.png'
  },
  {
    title: 'Center of Excellent (COE)',
    tag: 'Flutter · Maintenance · Feature Enhancement',
    desc: 'An internal app maintained and enhanced with new features and bug fixes to improve stability and usability.',
    img: '/img/coe.png'
  },
  {
    title: 'Customer Feedback',
    tag: 'Web App · Maintenance',
    desc: 'A customer feedback web application, supported and enhanced to improve reliability and user experience.',
    img: '/img/customer_feedback.png'
  },
  {
    title: 'Canadia Bank Internal Message (CNB-IM)',
    tag: 'Flutter · Real-time Messaging',
    desc: 'An internal chat application using polling for near real-time messaging between bank staff.',
    img: '/img/cnb.jpg'
  },
  {
  title: 'Smart Data Table Plus',
  tag: 'Flutter · Dart Package · pub.dev',
  desc: 'A responsive, customizable Flutter data table with pagination, sorting, and adaptive layouts — published as an open-source package on pub.dev.',
  img: 'https://raw.githubusercontent.com/Nget-Sophun/smart_data_table_plus/main/example/assets/table.png',
  url: 'https://pub.dev/packages/smart_data_table_plus'
  },
  {
  title: 'Google Map Custom Info Widow',
  tag: 'Flutter · Dart Package · pub.dev',
  desc: 'A customizable Flutter package for displaying custom info windows on Google Maps markers, supporting custom widgets, dynamic resizing, close buttons, and Android, iOS, and Web.',
  img: 'https://raw.githubusercontent.com/Ngetsophun/google_map_custom_info_widow/main/example/assets/img_demo.png',
  url: 'https://pub.dev/packages/google_map_custom_info_widow'
},
{
  title: 'Google Map Dotted Polygon',
  tag: 'Flutter · Dart Package · pub.dev',
  desc: 'A lightweight Flutter package for drawing dotted or dashed polygons on Google Maps with customizable colors, gaps, and stroke widths for map zones, areas, and custom boundaries.',
  img: 'https://raw.githubusercontent.com/Ngetsophun/google_map_dotted_polygon/main/example/assets/screenshot.jpg',
  url: 'https://pub.dev/packages/google_map_dotted_polygon'
},
{
  title: 'Google Map Drawer',
  tag: 'Flutter · Dart Package · pub.dev',
  desc: 'A Flutter package for drawing polygons on Google Maps and managing locations, with support for interactive area drawing, clearing points, and saving custom map areas.',
  img: 'https://raw.githubusercontent.com/Ngetsophun/google_map_drawer/main/example/assets/img_map.png',
  url: 'https://pub.dev/packages/google_map_drawer'
}


]

function handleScroll() {
  scrolled.value = window.scrollY > 24
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <div class="min-h-screen bg-ink text-paper font-body antialiased">

    <!-- NAV -->
    <header
      class="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
      :class="scrolled ? 'bg-ink/90 backdrop-blur border-b border-line' : 'bg-transparent'"
    >
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" class="font-display text-lg font-semibold tracking-tight">
          Nget<span class="text-gold">.</span>Sophun
        </a>

        <nav class ="hidden gap-6 font-mono text-sm md:flex">
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            class="transition-colors hover:text-gold"
          >
            {{ link.label }}
          </a>
        </nav>

        <a
          href="#contact"
          class="hidden rounded-full border border-gold/40 px-5 py-2 font-mono text-xs uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-ink md:inline-block"
        >
          Hire me
        </a>



        <button
          class="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          @click="navOpen = !navOpen"
        >
          <span class="h-0.5 w-6 bg-paper transition-transform" :class="navOpen && 'translate-y-2 rotate-45'"></span>
          <span class="h-0.5 w-6 bg-paper transition-opacity" :class="navOpen && 'opacity-0'"></span>
          <span class="h-0.5 w-6 bg-paper transition-transform" :class="navOpen && '-translate-y-2 -rotate-45'"></span>
        </button>
      </div>

      <div v-if="navOpen" class="border-t border-line bg-ink px-6 py-4 md:hidden">
      <a
        v-for="link in navLinks"
        :key="link.label"
        :href="link.href"
        class="block py-2 text-sm transition-colors hover:text-gold"
         @click="navOpen = false">
         {{ link.label }}
        </a>
        
      </div>
    </header>

    <!-- HERO -->
    <section id="home" class="relative overflow-hidden pt-40 pb-28 md:pt-52 md:pb-36">
      <div
        class="pointer-events-none absolute inset-0 opacity-[0.07]"
        style="background-image: radial-gradient(var(--color-gold) 1px, transparent 1px); background-size: 26px 26px;"
      ></div>

      <div class="mx-auto max-w-6xl px-6">
        <div class="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-signal">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75"></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-signal"></span>
          </span>
          Available for freelance — Phnom Penh, Cambodia
        </div>

        <h1 class="mt-8 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Building mobile apps
          <span class="text-gold">&amp;</span>
          intelligent robots.
        </h1>

        <p class="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          I'm Sophun — a mobile &amp; frontend developer from Cambodia. I build Flutter apps by day
          and robots that see, hear and think by night.
        </p>

        <div class="mt-10 flex flex-wrap gap-4">
          <a
            href="#portfolio"
            class="rounded-full bg-gold px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5"
          >
           View my work
          </a> 

            <a
            href="#contact"
             class="rounded-full border border-line px-7 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-gold hover:text-gold"
          >
          Get in touch
          </a> 

       
        </div>

       

        <dl class="mt-20 grid max-w-2xl grid-cols-3 gap-6 border-t border-line pt-8">
          <div>
            <dt class="font-mono text-xs uppercase tracking-widest text-muted">Role</dt>
            <dd class="mt-1 font-display text-sm text-paper">Mobile Developer</dd>
          </div>
          <div>
            <dt class="font-mono text-xs uppercase tracking-widest text-muted">Degree</dt>
            <dd class="mt-1 font-display text-sm text-paper">B.Sc. Computer Science</dd>
          </div>
          <div>
            <dt class="font-mono text-xs uppercase tracking-widest text-muted">Focus</dt>
            <dd class="mt-1 font-display text-sm text-paper">Mobile · Backed · Robotics · AI</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="border-t border-line py-24 md:py-32">
      <div class="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <div class="relative">
          <div class="aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-surface">
            <img
              src="https://ngetsophun.netlify.app/assets/img/profile.jpg"
              alt="Nget Sophun"
              class="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
            >
          </div>
          <div class="absolute -bottom-0 -right-6 hidden rounded-2xl border border-gold/30 bg-ink px-6 py-4 md:block">
            <p class="font-display text-2xl font-semibold text-gold">3+</p>
            <p class="font-mono text-[11px] uppercase tracking-widest text-muted">Years building</p>
          </div>
        </div>

        <div>
          <p class="font-mono text-xs uppercase tracking-widest text-gold">$ whoami</p>
          <h2 class="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            A hardworking, self-driven engineer who learns by building.
          </h2>
          <p class="mt-6 leading-relaxed text-muted">
            I'm currently pursuing Computer Science &amp; Software Engineering at the Royal University
            of Phnom Penh. Coding and technology pulled me toward mobile development, where I now
            build production Flutter apps. I thrive on challenges and enjoy adapting to new tools fast.
          </p>
          <p class="mt-4 leading-relaxed text-muted">
            Outside of work, weekends belong to E-Robot — designing robots, experimenting with new
            hardware, and folding AI (face and voice recognition, hand control) into real projects.
          </p>

          <div class="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-line pt-8 font-mono text-sm">
            <div class="flex justify-between border-b border-line/60 pb-3">
              <span class="text-muted">Birthday</span><span>11 Dec 2001</span>
            </div>
            <div class="flex justify-between border-b border-line/60 pb-3">
              <span class="text-muted">Degree</span><span>Bachelor</span>
            </div>
            <div class="flex justify-between border-b border-line/60 pb-3">
              <span class="text-muted">Phone</span><span>+855 10 640 074</span>
            </div>
            <div class="flex justify-between border-b border-line/60 pb-3">
              <span class="text-muted">Email</span><span>ngetsophun@email.com</span>
            </div>
            <div class="flex justify-between border-b border-line/60 pb-3">
              <span class="text-muted">City</span><span>Phnom Penh, KH</span>
            </div>
            <div class="flex justify-between border-b border-line/60 pb-3">
              <span class="text-muted">Freelance</span><span class="text-signal">Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills" class="border-t border-line bg-surface py-24 md:py-32">
      <div class="mx-auto max-w-6xl px-6">
        <p class="font-mono text-xs uppercase tracking-widest text-gold">$ skills --list</p>
        <h2 class="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Tools I reach for
        </h2>

        <div class="mt-14 grid gap-16 md:grid-cols-2">
          <div class="space-y-7">
            <div v-for="skill in skills" :key="skill.name">
              <div class="mb-2 flex items-baseline justify-between">
                <span class="text-sm text-paper">{{ skill.name }}</span>
                <span class="font-mono text-xs text-gold">{{ skill.level }}%</span>
              </div>
              <div class="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                <div
                  class="h-full rounded-full bg-gradient-to-r from-gold-dim to-gold"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>

          <div class="flex flex-col justify-between">
            <div>
              <p class="font-mono text-xs uppercase tracking-widest text-muted">Also working with</p>
              <div class="mt-5 flex flex-wrap gap-3">
                <span
                  v-for="tech in stack"
                  :key="tech"
                  class="rounded-full border border-line px-4 py-2 font-mono text-xs text-muted transition-colors hover:border-gold hover:text-gold"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="mt-10 rounded-2xl border border-line p-6">
              <p class="font-mono text-xs uppercase tracking-widest text-signal">Robotics lab</p>
              <p class="mt-3 text-sm leading-relaxed text-muted">
                Face &amp; voice recognition access control, hand-gesture smart-home control, and a
                face-recognition wake-up alarm — built with E-Robot for real showcases and competitions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section id="experience" class="border-t border-line py-24 md:py-32">
      <div class="mx-auto max-w-6xl px-6">
        <p class="font-mono text-xs uppercase tracking-widest text-gold">$ history</p>
        <h2 class="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Experience &amp; education
        </h2>

        <div class="mt-16 grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <!-- Experience timeline -->
          <div class="space-y-10 border-l border-line pl-8">
            <div v-for="job in experience" :key="job.org" class="relative">
              <span class="absolute -left-[35px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold"></span>
              <p class="font-mono text-xs uppercase tracking-widest text-muted">{{ job.year }}</p>
              <h3 class="mt-2 font-display text-xl font-semibold">{{ job.role }}</h3>
              <p class="text-sm text-signal">{{ job.org }}</p>
              <ul class="mt-4 space-y-2">
                <li
                  v-for="point in job.points"
                  :key="point"
                  class="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold"></span>
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Education -->
          <div>
            <p class="font-mono text-xs uppercase tracking-widest text-muted">Education</p>
            <div class="mt-6 space-y-6">
              <div
                v-for="edu in education"
                :key="edu.title"
                class="rounded-2xl border border-line p-6 transition-colors hover:border-gold/40"
              >
                <p class="font-mono text-xs text-gold">{{ edu.year }}</p>
                <h4 class="mt-2 font-display text-base font-semibold">{{ edu.title }}</h4>
                <p class="mt-1 text-sm text-muted">{{ edu.org }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PORTFOLIO -->
    <section id="portfolio" class="border-t border-line bg-surface py-24 md:py-32">
      <div class="mx-auto max-w-6xl px-6">
        <p class="font-mono text-xs uppercase tracking-widest text-gold">$ ls ./projects</p>
        <h2 class="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Selected work
        </h2>

        <div class="mt-14 grid gap-8 md:grid-cols-3">
          <article
            v-for="project in projects"
            :key="project.title"
            class="group overflow-hidden rounded-2xl border border-line bg-ink transition-colors hover:border-gold/40"
            @click="openProject(project)"
          >
            <div class="aspect-[16/10] overflow-hidden bg-surface-2">
              <img
                :src="project.img"
                :alt="project.title"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              >
              
            </div>
            <div class="p-6">
              <p class="font-mono text-[11px] uppercase tracking-widest text-signal">{{ project.tag }}</p>
              <h3 class="mt-2 font-display text-lg font-semibold">{{ project.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-muted">{{ project.desc }}</p>
            </div>
            
          </article>
        </div>
      </div>
    </section>

    <!-- PROJECT DETAILS MODAL -->
    <!-- PROJECT DETAILS MODAL -->
<Teleport to="body">
  <div
    v-if="selectedProject"
    class="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 backdrop-blur-sm px-4 py-8"
    @click.self="closeProject"
  >
    <div class="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-line bg-surface">
      <button
        class="absolute right-4 top-4 z-10 rounded-full border border-line bg-ink/80 p-2 text-paper hover:border-gold hover:text-gold"
        aria-label="Close"
        @click="closeProject"
      >
        ✕
      </button>

      <div class="relative flex max-h-[70vh] items-center justify-center bg-surface-2">
        <img
          :src="activeGallery[activeImage]"
          :alt="selectedProject.title"
          class="max-h-[70vh] w-full object-contain"
        >

        <template v-if="activeGallery.length > 1">
          <button
            class="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-line bg-ink/70 p-2 text-paper hover:border-gold hover:text-gold"
            aria-label="Previous image"
            @click="prevImage"
          >
            ‹
          </button>
          <button
            class="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-line bg-ink/70 p-2 text-paper hover:border-gold hover:text-gold"
            aria-label="Next image"
            @click="nextImage"
          >
            ›
          </button>
          <div class="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            <span
              v-for="(img, i) in activeGallery"
              :key="i"
              class="h-1.5 w-1.5 rounded-full"
              :class="i === activeImage ? 'bg-gold' : 'bg-paper/40'"
            ></span>
          </div>
        </template>
      </div>

      <div class="max-h-[calc(90vh-70vh)] overflow-y-auto p-6 md:p-8">
        <p class="font-mono text-[11px] uppercase tracking-widest text-signal">{{ selectedProject.tag }}</p>
        <h3 class="mt-2 font-display text-2xl font-semibold">{{ selectedProject.title }}</h3>
        <p class="mt-3 text-sm leading-relaxed text-muted">{{ selectedProject.desc }}</p>
      </div>
    </div>
  </div>
</Teleport>

    <!-- CONTACT -->
    <section id="contact" class="border-t border-line py-24 md:py-32">
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid gap-16 md:grid-cols-2">
          <div>
            <p class="font-mono text-xs uppercase tracking-widest text-gold">$ contact --new</p>
            <h2 class="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Let's build something together.
            </h2>
            <p class="mt-6 max-w-md leading-relaxed text-muted">
              Open to freelance mobile &amp; frontend work, and robotics collaborations.
              Reach out any time — I usually reply within a day.
            </p>

            <div class="mt-10 space-y-4 font-mono text-sm">
              <a href="mailto:ngetsophun@gmail.com" class="flex items-center gap-3 text-paper hover:text-gold">
                <span class="text-muted">Email</span> ngetsophun@gmail.com
              </a>
              <a href="tel:+85510640074" class="flex items-center gap-3 text-paper hover:text-gold">
                <span class="text-muted">Phone</span> +855 10 640 074
              </a>
              <div class="flex items-center gap-3 text-paper">
                <span class="text-muted">Location</span> Phnom Penh, Cambodia
              </div>
            </div>

            <div class="mt-10 flex gap-4">
              <a
                v-for="social in socials"
                :key="social.label"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-full border border-line p-3 text-paper transition-colors hover:border-gold hover:text-gold"
              >
                {{ social.label }}
              </a>
            </div>  

          
          </div>

          <form class="space-y-5 rounded-2xl border border-line bg-surface p-8" @submit.prevent>
            <div>
              <label class="font-mono text-xs uppercase tracking-widest text-muted">Name</label>
              <input
                type="text"
                placeholder="Your name"
                class="mt-2 w-full rounded-lg border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-muted/60 focus:border-gold focus:outline-none"
              >
            </div>
            <div>
              <label class="font-mono text-xs uppercase tracking-widest text-muted">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                class="mt-2 w-full rounded-lg border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-muted/60 focus:border-gold focus:outline-none"
              >
            </div>
            <div>
              <label class="font-mono text-xs uppercase tracking-widest text-muted">Message</label>
              <textarea
                rows="4"
                placeholder="Tell me about your project"
                class="mt-2 w-full rounded-lg border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-muted/60 focus:border-gold focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full rounded-full bg-gold py-3 font-mono text-xs uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="border-t border-line py-10">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 font-mono text-xs text-muted md:flex-row">
        <p>© {{ new Date().getFullYear() }} Nget Sophun. Built with Nuxt &amp; Tailwind.</p>
        <p>Phnom Penh, Cambodia</p>
      </div>
    </footer>
  </div>
</template>