import React from "react";
import Layout from "../common/layouts";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";
import Seo from "../common/seo";

export default ({ props, data }) => (
	<Layout>
		<Seo
			title={`About ${data.site.siteMetadata.title}`}
			description={data.markdownRemark.frontmatter.title}
		/>
		<div className="relative">
			<Img fluid={data.banner.childImageSharp.fluid} />
			<h1
				className="fw1 tc f2 display absolute dn dib-ns"
				style={{
					bottom: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)"
				}}>
				About {data.site.siteMetadata.title}
			</h1>

			<p className="pv4 ph5 bg-dark-gray  near-white  sans-serif no-underline mv2">
				{" "}
				I am the basic definition of a food junkie and i feed my addiction by
				trying out different couisines at various food joints. Am infatuated
				with trying out different makeup looks and am gonna show you all my look
				book, the products i use and why i love those specific product brands.
				Icreated this platform to give you all insight and a glipmse into my
				world and allow you all to see life through my eyes by taking a look at
				my preferences in terms of makeup brands, products and other elements of
				our lifetyle.
			</p>
		</div>
		<div className="mw5 center flex flex-wrap pv10-l w-100">
			<div className="mw7 w-100 pa2 ">
				<Link
					to="/blog"
					className="dib bg-dark-gray b near-white hover-bg-mid-gray pv3 ph4 ttu tracked sans-serif no-underline mv1">
					Read the blog
				</Link>
			</div>
		</div>
	</Layout>
);

export const dataQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		markdownRemark(frontmatter: { name: { eq: "about__bio" } }) {
			html
			frontmatter {
				title
			}
		}
		banner: file(relativePath: { eq: "img/about__banner.jpg" }) {
			childImageSharp {
				fluid(maxHeight: 720, maxWidth: 1920) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;
