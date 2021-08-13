module.exports = {
	siteMetadata: {
		navbarLinks: [
			{ to: "/makeup", name: "Makeup" },
			{ to: "/lifestyle", name: "Lifestyle" },
			{ to: "/blog", name: "blog" },
		],
		title: "Yanna Resse",
		description:
			"Welcome to my blog Yanna Resse. My blog is divided into two; THE LIFESTYLE SECTION and THE MAKEUP SECTION. The LIFESTYLE SECTION contains recommendations of different things that surround our day to day lives such as what restaurants to visit, what clubs are popping, which matatus are the best, what foods should you order at the recommended restaurants, what movies/animations should you watch and abit of advise about relationships and friendships. Basically, its about everything you need to know about how you should live. The MAKEUP SECTION on the other hand is about the different cosmetics people use and which ones are the best for your skin types, where to shop for quality makeup on a budget and also short tutorials that will help you apply makeup like a professional",
		siteUrl: "https://yanna-resse.netlify.com/",
		homepageHeader: "Hello Y'all ",
		homepageAbout:
			"Welcome to my blog Yanna Resse. My blog is divided into two; THE LIFESTYLE SECTION and THE MAKEUP SECTION. The LIFESTYLE SECTION contains recommendations of different things that surround our day to day lives such as what restaurants to visit, what clubs are popping, which matatus are the best, what foods should you order at the recommended restaurants, what movies/animations should you watch and abit of advise about relationships and friendships. Basically, its about everything you need to know about how you should live. The MAKEUP SECTION on the other hand is about the different cosmetics people use and which ones are the best for your skin types, where to shop for quality makeup on a budget and also short tutorials that will help you apply makeup like a professional",
		mailChimpUrl: "https://mailchimp.com",
		mailChimpToken: "MAILCHIMP TOKEN HERE",
		youtube: "", // YOUR YOUTUBE PROFILE HERE
		github: "", // YOUR GITHUB PROFILE HERE
		pinterest: "", // YOUR PINTEREST PROFILE HERE
		facebook: "", // YOUR FACEBOOK PROFILE HERE
		twitter: "", // YOUR TWITTER PROFILE HERE
		instagram: "yanna_resse",
	},
	plugins: [
		"gatsby-plugin-sitemap",
		"gatsby-plugin-react-helmet",
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-plugin-feed",
			options: {
				query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
				feeds: [
					{
						serialize: ({ query: { site, allMarkdownRemark } }) => {
							return allMarkdownRemark.edges.map((edge) => {
								return Object.assign({}, edge.node.frontmatter, {
									description: edge.node.excerpt,
									date: edge.node.frontmatter.date,
									url: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
									guid: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
									custom_elements: [{ "content:encoded": edge.node.html }],
								});
							});
						},
						query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: {frontmatter: {type: {eq: "post"}}}
              ) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      slug
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
						output: "/rss.xml",
						title: "RSS Feed",
					},
				],
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/content`,
				name: "content",
			},
		},
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					"gatsby-remark-copy-linked-files",
					{
						resolve: "gatsby-remark-images",
						options: {
							maxWidth: 1400,
						},
					},
				],
			},
		},
		{
			resolve: "gatsby-plugin-web-font-loader",
			options: {
				google: {
					families: ["Karla", "Playfair Display", "Lora"],
				},
			},
		},
	],
};
