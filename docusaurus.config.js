module.exports = {
  title: 'Upsell Live',
  tagline: 'Sell more on Shopify',
  url: 'https://upsell.live/docs',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  plugins: ['docusaurus-plugin-sass'],
  themeConfig: {
    navbar: {
      title: 'Upsell Live',
      logo: {
        alt: 'Upsell Live Logo',
        src: 'img/logo.svg',
      },
      items: [
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: 'docs/',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Privacy Policy',
              to: 'privacy',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Apsure. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['liquid']
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
};
