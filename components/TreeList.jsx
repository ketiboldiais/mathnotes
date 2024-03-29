import { useState } from "react";
import Route from "./route";

export const Tree = ({ data = [], allLinks = false, clickHandler }) => {
	return (
		<ul>
			{data.map((tree, index) => (
				<TreeNode
					node={tree}
					key={index}
					allLinks={allLinks}
					clickFunction={clickHandler}
				/>
			))}
		</ul>
	);
};

const TreeNode = ({ node, allLinks, clickFunction }) => {
	const [visibility, setVisibility] = useState(false);
	const toggleVisibility = () => {
		setVisibility((v) => !v);
	};
	return (
		<li>
			{allLinks ? (
				<>
					<div onClick={toggleVisibility}></div>
					<span onClick={clickFunction}>
						<Route to={node.path} text={node.name} />
					</span>
				</>
			) : (
				<div onClick={clickFunction}>{node.name}</div>
			)}
			<ul>
				<Tree
					data={node.children}
					allLinks={true}
					clickHandler={clickFunction}
				/>
			</ul>
		</li>
	);
};