import React from "react";
import Helmet from "react-helmet";
import Layout from "../common/layouts/";
import Seo from "../common/seo";
import "tachyons";

export default () => (
	<Layout>
		<Seo title="Privacy Policy" description="Privacy policies and statements" />
		<Helmet>
			<meta name="robots" content="noindex, nofollow" />
		</Helmet>
	</Layout>
);
