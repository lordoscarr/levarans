import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query getMetadata {
      site {
        siteMetadata {
          title
          description
          repoUrl
          infoData {
            contact {
              email
              github_handle
              twitter_handle
            }
            cta
            description
            background_color
          }
          menuData {
            week_number
            delivery_info
            delivery_price
            delivery_date
            last_order_date
            last_order_time
            delivery_end_time
            delivery_start_time
            menu_information
            menu {
              food
              description
              price
            }
          }
        }
      }
    }
  `)
  return data.site.siteMetadata
}
