import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
	text-align: center;
`;

const Img = styled.img`
	/* height: 11rem;
	width: auto; */
	height: 90px;
	width: 90px;
	margin: auto;
	/* margin-top: 1rem; */
`;

const P = styled.p`
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 600;
	margin-top: 3px;
	--tw-text-opacity: 1;
	color: rgb(212 222 231 / var(--tw-text-opacity)) /* #d4dee7 */;
`;

function Logo() {
	const { isDarkMode } = useDarkMode();

	const src = isDarkMode ? "/logo.png" : "/logo.png";
	return (
		<StyledLogo>
			<Img src={src} alt='Logo' />
			<P>Nature&apos;s Corner Retreat</P>
		</StyledLogo>
	);
}

export default Logo;
