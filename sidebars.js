module.exports = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '🏠 Home',
    },

    {
      type: 'category',
      label: '🐧 Linux Administration',
      items: [
        'linux/intro',
        'linux/installation',
        'linux/tp1',
        'linux/tp2',
        'linux/tp3',
        'linux/tp4',
        'linux/tp5',
      ],
    },

    {
      type: 'category',
      label: '📱 Flutter Development',
      items: [
        'flutter/intro',
        'flutter/installation',
        'flutter/lab1',
        'flutter/lab2',
        'flutter/project',
      ],
    },

    {
      type: 'category',
      label: '🤖 Kotlin Programming',
      items: [
        'kotlin/intro',
        'kotlin/installation',
        'kotlin/lab1',
        'kotlin/lab2',
      ],
    },
  ],
};