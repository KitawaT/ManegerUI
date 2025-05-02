const images = import.meta.glob('./images/*.svg', {eager: true});
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
        icon: images['./images/logo-devlens.svg'].default,
        title: 'DevLens',
        text: 'Quickly inspect page layouts and visualize element boundaries.',
      },
];