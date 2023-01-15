import Image from "next/image";
import ImgStyles from "../styles/image.module.css";
import Head from "next/head";
import Link from "next/link";
import { Fig } from "./Fig";
import { Array } from "./Array";
import { Algo } from "./Algo";
import { Obj } from "./Obj";
import { Grid } from "./illus/components/Grid/Grid";
import { Bipartite } from "./illus/components/Bipartite/Bipartite";
import { Minutiae } from "./Minutiae";
const MDXComponents = {
	img: (props) => (
		<div>
			<figure className={ImgStyles.fig}>
				<Image
					{...props}
					alt={props.alt}
				/>
			</figure>
		</div>
	),
	Grid,
	Bipartite,
	Array,
	Head,
	Minutiae,
	Algo,
	Obj,
	Link,
	Fig,
	del: (props) => <small>{props.children}</small>,
};

export default MDXComponents;
