// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').DocusaurusConfig} */
// @ts-ignore
const config = {
  title: 'hentaiOS Docuwiki',
  tagline: 'mmmmmmmmmmmmmmmmmm',
  url: 'https://wiki.helluvaos.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hentaiOS-Infrastructure',
  projectName: 'wiki.helluvaos.com',
  trailingSlash: false,
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.github,
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
          to: 'https://hentaios.com',
          label: 'Homepage',
          position: 'left'
        },
        {
          to: 'https://blog.hentaios.com',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/hentaiOS-Infrastructure/wiki.helluvaos.com',
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
      copyright: `Copyright © ${new Date().getFullYear()} The hentaiOS Project.<br><span class="footer__link-item">Android is a trademark of Google LLC.</span>`,
    },
    metadata: [
      { name: 'keywords', content: 'hentaiOS, helluvaOS, wiki, guide, knowledge base' }
    ],
  },
  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Organization',
        name: 'hentaiOS Open Source',
        url: 'https://hentaios.com/',
        logo: 'img/oss_logo.svg',
      }),
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/hentaiOS-Infrastructure/wiki-frontpage-develop/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (/** @type {{ [x: string]: any; defaultCreateSitemapItems: any; }} */ params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((/** @type {{ url: string | string[]; }} */ item) => !item.url.includes('/page/'));
          },
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
        sidebarPath: require.resolve('./devtech/sidebars.js'),
      },
    ],
  ],
};

export default config;
