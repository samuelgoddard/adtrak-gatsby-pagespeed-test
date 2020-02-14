import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const SEO = ({ pathname, titleOverride, descriptionOverride, pathnameOverride, imageOverride, jobDescription, jobDatePosted, jobClosingDate }) => {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
    datoCmsSite: {
      globalSeo: { 
        siteName,
        titleSuffix,
        twitterAccount,
        fallbackSeo: {
          title,
          description,
          image: {
            url
          }
        }
      }
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
        }
      }
      datoCmsSite {
        globalSeo {
          siteName
          titleSuffix
          twitterAccount
          fallbackSeo {
            title
            description
            twitterCard
            image {
              url
            }
          }
        }
      }
    }
  `)  
  const schemaOrgWebPage = {
    '@context': "https://schema.org",
    '@type': "LocalBusiness",
    name: "Adtrak",
    image: imageOverride !== null ? imageOverride : url,
    url: "https://adtrak.co.uk/",
    telephone: "01159598900",
    priceRange: "£",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Level 3 Chapel Quarter, Maid Marian Way",
      addressLocality: "Nottingham",
      postalCode: "NG1 6HQ",
      addressCountry: "GB"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.9537877,
      longitude: -1.1564899
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      opens: "08:30",
      closes: "17:00"
    },
    sameAs: [
      "https://twitter.com/adtrak/",
      "https://www.linkedin.com/adtrak",
      "https://www.facebook.com/adtrak"
    ],
  }
  const schemaJob = {
    '@context': "http://schema.org/",
    '@type': "JobPosting",
    title: titleOverride ? titleOverride : title,
    description: jobDescription ? jobDescription : description,
    datePosted: jobDatePosted ? jobDatePosted : null,
    validThrough: jobClosingDate ? jobClosingDate : null,
    employmentType:"Full Time",
    hiringOrganization:{ 
      '@type':"Organization",
      name: "Adtrak",
      logo: "https://www.adtrak.co.uk/favicon.png"
    },
    jobLocation: { 
      '@type':"Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Level 3 Chapel Quarter, Maid Marian Way",
        addressLocality: "Nottingham",
        postalCode: "NG1 6HQ",
        addressCountry: "GB"
      },
    },
    baseSalary: { 
      '@type': "MonetaryAmount",
      currency: "GBP",
      value: { 
        '@type': "QuantitativeValue",
        value: "Dependent on experience",
        unitText: "GBP"
      }
    }
  }
  return (
    <Helmet defer={false} titleTemplate={`%s${titleSuffix}`}>
      <html lang="en" />
      <link rel="canonical" href={`${siteUrl}${pathnameOverride ? pathnameOverride : pathname}`}/>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <title>{titleOverride ? titleOverride : title }</title>
      <meta name="description" content={descriptionOverride ? descriptionOverride : description} />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={`${imageOverride ? imageOverride : url}`} />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitterAccount} />
      
      <meta name="robots" content="noindex" />

      <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>

      { jobDescription && (
        <script type="application/ld+json">{JSON.stringify(schemaJob)}</script>
      )}
      
    </Helmet>
  )
}

export default SEO