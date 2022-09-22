import Image from "next/image";
import ImgStyles from "../styles/image.module.css";
import Link from "next/link";
import { Fig } from "./Fig";
import { Algo } from "./Algo";
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
					layout="fill"
					objectFit="contain"
				/>
			</figure>
			<figcaption className={ImgStyles.figcaption}>{props.alt}</figcaption>
		</div>
	),
	Grid,
	Minutiae,
	Bipartite,
	Algo,
	Link,
	Fig,
	del: (props) => <small>{props.children}</small>,
};

export default MDXComponents;
