import React from "react";
import Helmet from "react-helmet";
import Layout from "../common/layouts";
import Seo from "../common/seo";
import "tachyons";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		"& > *": {
			margin: theme.spacing(5),
			width: 200,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			marginLeft: "auto",
			marginRight: "auto"
		}
	}
}));

export default function SignUp() {
	const classes = useStyles();

	return (
		<Layout>
			<Seo
				title="Privacy Policy"
				description="Privacy policies and statements"
			/>
			<Helmet>
				<meta name="robots" content="noindex, nofollow" />
			</Helmet>
			<form
				className={classes.root}
				noValidate
				autoComplete="off"
				method="post"
				netlify-honeypot="bot-field"
				data-netlify="true">
				<input type="hidden" name="bot-field" />
				<TextField
					id="full-name"
					label="Full Name "
					variant="filled"
					name="Full_Name"
					color="secondary"
					size="medium"
				/>
				<TextField
					id="email"
					label="Your email"
					variant="filled"
					name="Email"
					color="secondary"
					size="medium"
				/>
				<Button
					variant="outlined"
					color="secondary"
					size="medium"
					type="submit">
					Submit{" "}
				</Button>
			</form>
		</Layout>
	);
}
