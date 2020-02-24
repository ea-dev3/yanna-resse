import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "tachyons";

export default () => (
	<div className="pv5 pa2 flex flex-wrap mw9 center justify-around items-center">
		<StaticQuery
			query={graphql`
				query {
					image: file(relativePath: { eq: "img/author.jpg" }) {
						childImageSharp {
							fluid(maxWidth: 1080) {
								...GatsbyImageSharpFluid
							}
						}
					}
					copy: markdownRemark(frontmatter: { name: { eq: "homepage__bio" } }) {
						html
						frontmatter {
							title
						}
					}
				}
			`}
			render={data => (
				<React.Fragment>
					<Img
						fluid={data.image.childImageSharp.fluid}
						alt="The Author"
						className="w-100 mw6"
					/>
					<div class="w-100 pa2 mw6 mv4">
						<span className="db f2 display dark-gray">Yanna Resse</span>
						<div className="lh-copy f5 serif mt4">
							I am the basic definition of a food junkie and i feed my addiction
							by trying out different couisines at various food joints. Am
							infatuated with trying out different makeup looks and am gonna
							show you all my look book, the products i use and why i love those
							specific product brands. Icreated this platform to give you all
							insight and a glipmse into my world and allow you all to see life
							through my eyes by taking a look at my preferences in terms of
							makeup brands, products and other elements of our lifetyle.
						</div>
					</div>
				</React.Fragment>
			)}
		/>
	</div>
);
