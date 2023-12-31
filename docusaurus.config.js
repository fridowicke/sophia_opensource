// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sophia Video Curriculum',
  tagline: 'High School Mathematics in Short Videos!',
  favicon: 'img/Sophia-Dot.ico',

  // Set the production url of your site here
  url: 'https:/opensource.sophiaedulabs.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fridowicke', // Usually your GitHub org/user name.
  projectName: 'sophia_opensource', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/fridowicke/sophia_opensource',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/fridowicke/sophia_opensource',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/Sophia-Dot.png',
    navbar: {
      title: 'Sophia Video Curriculum',
      logo: {
        alt: 'Sophia Dot Logo',
        src: 'img/Sophia-Dot.png',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        { to: 'https://github.com/Sophia-Edu-Labs/sophia-math#readme', label: 'Tutorial', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/syllabus', label: 'Curriculum', position: 'left' },
        {
          href: 'https://github.com/Sophia-Edu-Labs/sophia-math',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'TikTok',
              href: 'https://www.tiktok.com/@sophiaedulabs',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@sophiaedulabs',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/sophiaedulabs/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Sophia Edu Labs',
              href: 'https://www.sophiaedulabs.com',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Sophia-Edu-Labs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sophia Edu Labs.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  },
};

module.exports = config;
