module.exports = {
  title: 'Upsell Live',
  tagline: 'Increase your sales on Shopify',
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
        href: '/'
      },
      items: [
        {
          label: "Home",
          to: "/",
          icon: "fas fa-home"
        },
        {
          label: "Documentation",
          to: "/docs",
          icon: "fas fa-layer-group"
        },
        // {
        //   position: "right",
        //   classNames: "whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900",
        //   label: "Sign in",
        //   to: "/sign_in"
        // },
        // {
        //   position: "right",
        //   classNames: "ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700",
        //   label: "Sign up",
        //   to: "/sign_up"
        // }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Solutions',
        //   items: [
        //     { label: 'Marketing', to: '#' },
        //     { label: 'Analytics', to: '#' },
        //     { label: 'Commerce', to: '#' },
        //     { label: 'Insights', to: '#' }
        //   ]
        // },
        {
          title: 'Support',
          items: [
            // { label: 'Pricing', to: '#' },
            { label: 'Documentation', to: '/docs' },
            // { label: 'Guides', to: '#' },
            // { label: 'API Status', to: '#' }
          ]
        },
        // {
        //   title: 'Company',
        //   items: [
        //     { label: 'About', to: '#' },
        //     { label: 'Blog', to: '#' },
        //     { label: 'Jobs', to: '#' },
        //     { label: 'Press', to: '#' },
        //     { label: 'Partner', to: '#' }
        //   ]
        // },
        {
          title: 'Legal',
          items: [
            // { label: 'Claim', to: '#' },
            { label: 'Privacy', to: '/privacy' },
            // { label: 'Terms', to: '#' }
          ]
        }
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
