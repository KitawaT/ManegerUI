const images = import.meta.glob('./images/*.svg', { eager: true });
export const data = [
  {
    id: 1,
    category: "all",
    icon: images['./images/logo-devlens.svg'].default,
    title: 'DevLens',
    text: 'Quickly inspect page layouts and visualize element boundaries.',
  },
  {
    id: 2,
    category: "all",
    icon: images['./images/logo-style-spy.svg'].default,
    title: 'StyleSpy',
    text: 'Instantly analyze and copy CSS from any webpage element.',
  },
  {
    id: 3,
    category: "all",
    icon: images['./images/logo-speed-boost.svg'].default,
    title: 'SpeedBoost',
    text: 'Optimizes browser resource usage to accelerate page loading.',
  },
  {
    id: 4,
    category: "all",
    icon: images['./images/logo-json-wizard.svg'].default,
    title: 'JSONWizard',
    text: 'Formats, validates, and prettifies JSON responses in-browser.',
  },  
  {
    id: 5,
    category: "all",
    icon: images['./images/logo-tab-master-pro.svg'].default,
    title: 'TabMaster Pro',
    text: 'Organizes browser tabs into groups and sessions.',
  },
  {
    id: 6,
    category: "all",
    icon: images['./images/logo-viewport-buddy.svg'].default,
    title: 'ViewportBuddys',
    text: 'Simulates various screen resolutions directly within the browser.',
  },
  {
    id: 7,
    category: "all",
    icon: images['./images/logo-markup-notes.svg'].default,
    title: 'Markup Notes',
    text: 'Enables annotation and notes directly onto webpages for collaborative debugging.',
  },
  {
    id: 8,
    category: "all",
    icon: images['./images/logo-grid-guides.svg'].default,
    title: 'GridGuides',
    text: 'Overlay customizable grids and alignment guides on any webpage.',
  },
  {
    id: 9,
    category: "all",
    icon: images['./images/logo-palette-picker.svg'].default,
    title: 'Palette Picker',
    text: 'Instantly extracts color palettes from any webpage.',
  },
  {
    id: 10,
    category: "all",
    icon: images['./images/logo-link-checker.svg'].default,
    title: 'LinkChecker',
    text: 'Scans and highlights broken links on any page.',
  },
  
  {
    id: 11,
    category: "all",
    icon: images['./images/logo-dom-snapshot.svg'].default,
    title: 'DOM Snapshot',
    text: 'Capture and export DOM structures quickly.',
  }
  ,
  {
    id: 12,
    category: "all",
    icon: images['./images/logo-console-plus.svg'].default,
    title: 'ConsolePlus',
    text: 'Enhanced developer console with advanced filtering and logging.',
  }
];