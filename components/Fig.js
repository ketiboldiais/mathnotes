import React from "react";
import Image from "next/image";
import styles from "../styles/Fig.module.css";

export const Fig = ({
	link,
	caption = "Figure",
	width = 30,
	height = 30,
	imwidth = 150,
	imheight = 150,
	layout = "responsive",
	fit = "cover",
	marginTop = 0,
	marginBottom = 0,
}) => {
	return (
		<figure
			className={styles.fig}
			style={{
				width: `${width}%`,
				height: `${height}%`,
				marginTop,
				marginBottom,
			}}
		>
			<Image
				src={link}
				className="figureImage"
				alt={caption}
				width={imwidth}
				height={imheight}
				layout={layout}
				objectFit={fit}
			/>
		</figure>
	);
};
