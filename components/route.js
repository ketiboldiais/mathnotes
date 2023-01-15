import Link from "next/link";

const Route = ({ to, text, clickHandler }) => {
	return (<Link href={to} onClick={clickHandler} shallow>{text}</Link>)
}

export default Route;