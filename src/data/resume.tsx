import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vimal Anand",
  location: "Darbhanga, Bihar, India",
  description:
    "Fresher, Looking for a Job opportunity, Very active on Twitter & LinkdeIn.",
  summary:
    "Completed my graduation in June 2024, Looking for a full-time job opportunity. I am a passionate coding and programming enthusiast. I find joy in unraveling the complexities of algorithms, solving problems through lines of code, and creating innovative solutions that bridge the gap between imagination and technology. I thrive on building dynamic and interactive web applications, constantly exploring the latest trends and best practices in the software development landscape.",
  avatarUrl: "/me.jpg",
  skills: [
    "React.js",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Javascript",
    "MongoDB",
    "Express.js",
    "TailswindCSS",
    "Java",
    "C++",
    "Postman",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://medium.com/@Coder_Shelby_7" , icon: NotebookIcon, label: "Blog", target: "_blank" },
  ],
  contact: {
    email: "vimalanand0709@example.com",
    tel: "+919473020200",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Vimal2023",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vimal-anand-9917a1212/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Coder_Shelby_7",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  // work: [
  //   {
  //     company: "Atomic Finance",
  //     href: "https://atomic.finance",
  //     badges: [],
  //     location: "Remote",
  //     title: "Bitcoin Protocol Engineer",
  //     logoUrl: "/atomic.png",
  //     start: "May 2021",
  //     end: "Oct 2022",
  //     description:
  //       "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
  //   },
  //   {
  //     company: "Shopify",
  //     badges: [],
  //     href: "https://shopify.com",
  //     location: "Remote",
  //     title: "Software Engineer",
  //     logoUrl: "/shopify.svg",
  //     start: "January 2021",
  //     end: "April 2021",
  //     description:
  //       "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
  //   },
  //   {
  //     company: "Nvidia",
  //     href: "https://nvidia.com/",
  //     badges: [],
  //     location: "Santa Clara, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/nvidia.png",
  //     start: "January 2020",
  //     end: "April 2020",
  //     description:
  //       "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
  //   },
  //   {
  //     company: "Splunk",
  //     href: "https://splunk.com",
  //     badges: [],
  //     location: "San Jose, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/splunk.svg",
  //     start: "January 2019",
  //     end: "April 2019",
  //     description:
  //       "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
  //   },
  //   {
  //     company: "Lime",
  //     href: "https://li.me/",
  //     badges: [],
  //     location: "San Francisco, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/lime.svg",
  //     start: "January 2018",
  //     end: "April 2018",
  //     description:
  //       "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
  //   },
  //   {
  //     company: "Mitre Media",
  //     href: "https://mitremedia.com/",
  //     badges: [],
  //     location: "Toronto, ON",
  //     title: "Software Engineer",
  //     logoUrl: "/mitremedia.png",
  //     start: "May 2017",
  //     end: "August 2017",
  //     description:
  //       "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
  //   },
  // ],
  education: [
    {
      school: "JIS College of Engineering",
      href: "https://www.jiscollege.ac.in/",
      degree: "B.Tech in Electrical & Communication (8.5 CGPA)",
      logoUrl: "/jisce.png",
      start: "2020",
      end: "2024",
    },
    {
      school: "MLSM College - Darbhanga",
      href: "https://mlsmcollege.ac.in/",
      degree: "Class 11th & 12th (70 %) ",
      logoUrl: "/mlsm.png",
      start: "2017",
      end: "2019",
    },
    {
      school: "Delhi Public School - Darbhanga",
      href: "http://dpsdarbhanga.in/",
      degree: "upto Class 10th (9.6 CGPA)",
      logoUrl: "/dpsk.jpeg",
      start: "2014",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "ZuAi - Blog Web App",
      href: "https://chatcollect.com",
      dates: "",
      active: true,
      description:
        "It is a Responsive blogging web where you can have a sleek interface and a plethora of features, ZuAi stands out as the ultimate choice for anyone passionate about sharing their thoughts and ideas with the world.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
        "Responsive"
      ],
      links: [
        {
          type: "Website",
          href: "https://zuai-blogging-site.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Vimal2023/ZuAi_BlogApp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/zuAi.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Mera Zyaka",
      href: "https://zyaka.vercel.app/",
      dates: "",
      active: true,
      description:
        "It a restaurant web where you can watch the details and trending food and reserve a table online {Use dummy data to perform this task}.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
        "Responsive"
      ],
      links: [
        {
          type: "Website",
          href: "https://zyaka.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Vimal2023/Zyaka",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/zyaka.png",
      video: "",
    },
    {
      title: "PDFverse",
      href: "https://pdf-splitter-3ngd.onrender.com/",
      dates: "",
      active: true,
      description:
        "It allows users to upload a PDF file and extract certain pages from the PDF to create a new PDF.",
      technologies: [
        "ejs",
        "javascript",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://pdf-splitter-3ngd.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Vimal2023/PDF-Splitter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pdfspiliter.png",
      video: "",
    },
    {
      title: "Electronics Ecommerce App",
      href: "https://automatic.chat",
      dates: "",
      active: true,
      description:
        "The application featured a product listing page that showcased various products with details and an 'Add to Cart' functionality. Additionally, a dedicated cart page allowed users to manage items, including quantity adjustments, removal, and total price calculations with potential discounts.",
      technologies: [
        "React.js",
        "TailswindCSS",
        "NodeJS",
        "Responsive",
      ],
      links: [
        {
          type: "Website",
          href: "https://profile-fyi-assignment-sage.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Vimal2023/Profile.fyi---Assignment",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/eec.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Diversion 2K23",
      dates: "Feb 25th - 26th, 2023",
      location: "Kolkata, West Bengal",
      description:
        "Developed a Secure & Transparent way to stream your content, powered by the Blockchain and IPFS. Received the award for the 'best use of 5ireChain labs' track and 'Deploy on replit' track.",
      image:
        "/d2k23.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Devfolio",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devfolio.co/projects/peerplay-bb90",
        },
        {
          title: "LinkdeIn",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/vimal-anand-9917a1212_diversion2k23-hackathon-5irelabs-activity-7036420381657686016-lNoR?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
    {
      title: "Hack4Bengal 2.O",
      dates: "July 09th - 10th, 2023",
      location: "Kolkata, West Bengal",
      description:
        "Built the website under the collaboration with other teammates.Worked as a Marketing Co-Lead with a group of 7 members to increase the engagement and connections.",
      image:
        "/h4b.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://s2.hack4bengal.tech/team",
        },
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/vimal-anand-9917a1212_certificate-of-appreciation-hack4bengal-activity-7094599667954458625-bSpd?utm_source=share&utm_medium=member_desktop",
        },
        {
          title: "LinkdeIn",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/vimal-anand-9917a1212_innovation-technology-marketing-activity-7084893958845136896-dxpf?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
    {
      title: "Diversion 2K24",
      dates: "Feb 03rd - 04th, 2024",
      location: "Kolkata, West Bengal",
      description:
        "Developed 𝐂𝐫𝐚𝐟𝐭-𝐅𝐨𝐫-𝐅𝐮𝐧𝐝, it is a great initiative to work for Humanity. The main purpose of CraftForFund is to serve needy people to get helped on online platform and it connects Entrepreneurs, Medical seekers, Individuals, Business groups, Students and Organizations with group of Moneylenders willing to contribute money to support impactful initiatives and meaningful projects.",
      image:
        "/d2k24.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Devfolio",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Vimal2023/D-CraftForFund",
        },
        {
          title: "LinkdeIn",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/vimal-anand-9917a1212_mlh-diversion2k24-hackathon-activity-7160199121562169345-chPX?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
  ],
} as const;
