module.exports = {
  title: "Hidalgo Fernández",
  tagline: "Siempre en WIP",
  url: "https://soydev.mx",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "hidalgofdz", // Usually your GitHub org/user name.
  projectName: "soydevmx", // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: "d6692025b805cb780e809fa09a2fdfa0",
      indexName: "prod_soydev",
      appId: "6EOMV875SD",
    },
    gtag: {
      trackingID: "G-8S77FVQJ8J",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: "soydev",
      logo: {
        alt: "SD",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/hidalgofdz",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/hidalgofdz/soydevmx",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} soydev. Built with Docusaurus.`,
    },
  },
  plugins: ["@docusaurus/plugin-ideal-image"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/hidalgofdz/soydevmx",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/hidalgofdz/soydevmx/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
