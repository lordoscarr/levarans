import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query getMetadata {
      site {
        siteMetadata {
          title
          description
          repoUrl
          alertMessage
          instagramUsername
          facebookUsername
          infoData {
            title
            contact {
              email
              phone
            }
            about
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
            contact {
              email
              phone
            }
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
