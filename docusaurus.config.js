// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {
  title: 'hentaiOS Docuwiki',
  tagline: 'mmmmmmmmmmmmmmmmmm',
  url: 'https://hentaios.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hentaiOS-Infrastructure', // Usually your GitHub org/user name.
  projectName: 'dokument', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/github'),
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'helluvaOS Logo',
        src: 'img/helluvaOS Logo Dark.svg',
        srcDark: 'img/helluvaOS Logo Light.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          to: 'https://blog.hentaios.com',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/hentaiOS-Infrastructure/wiki-frontpage-develop',
          label: 'GitHub',
          position: 'right',
        },
        {
          to: '/community/community-portal',
          label: 'Community',
          position: 'left',
          activeBaseRegex: '/community/',
        },
        {
          to: '/devtech/devtech',
          label: 'DevTech',
          position: 'left',
          activeBaseRegex: '/devtech/',
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
              label: 'Telegram',
              href: 'https://t.me/hentaiOSchat',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/hentaiOS/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/hentaiOS',
            },
          ],
        },
      ],
      logo: {
        alt: 'hentaiOS Open Source Logo',
        src: 'img/oss_logo.svg',
      },
      copyright: `Copyright © ${new Date().getFullYear()} hentaiOS.<br><span class="footer__link-item">Android is a trademark of Google LLC.</span>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/hentaiOS-Infrastructure/wiki-frontpage-develop/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'devtech',
        path: 'devtech',
        routeBasePath: 'devtech',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],
};

module.exports = config;
