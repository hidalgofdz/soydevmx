module.exports = {
  title: 'soydev',
  tagline: 'intentemos, fallemos, aprendamos',
  url: 'https://soydev.mx',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'hidalgofdz', // Usually your GitHub org/user name.
  projectName: 'soydevmx', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: '67df48a321d5749fcccb3c23bcebdca6',
      indexName: 'prod_soydev',
    },
    gtag: {
      trackingID: 'G-8S77FVQJ8J',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: 'soydev',
      logo: {
        alt: 'SD',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/hidalgofdz',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/hidalgofdz/soydevmx',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} soydev. Built with Docusaurus.`,
    },
  },
  plugins: ['@docusaurus/plugin-ideal-image'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/hidalgofdz/soydevmx',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/hidalgofdz/soydevmx/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
