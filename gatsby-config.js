const config = require("./config.json")
const infoData = require("./content/data/info.json")
const menuData = require("./content/menu/menu.json")

module.exports = {
  //this makes the site config available to forestry cms
  siteMetadata: {
    title: config.title,
    description: config.description,
    repoUrl: config.repository_url,
    alertMessage: config.alert_message,
    about: config.about,
    contact: config.contact,
    primaryColor: config.primary_color,
    infoData: infoData,
    menuData: menuData,
  },
  pathPrefix: 'levarans',
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-yaml",
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Montserrat",
            variants: ["Regular", "Bold"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/content/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaultQuality: 75,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          "gatsby-remark-normalize-paths",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
