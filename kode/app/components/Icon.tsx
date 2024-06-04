import * as React from 'react';
import Svg, { Circle, Rect, G, Defs, Path, ClipPath } from 'react-native-svg';
import colors from '../ui/colors';

const Icon = ({ name, size = 20, height = 20 }) => {

	const icons = {
		browse: <><G fill="currentColor" clip-path="url(#a)"><Path d="M4.583 5.833H1.25A1.25 1.25 0 0 1 0 4.583V1.25A1.25 1.25 0 0 1 1.25 0h3.333a1.25 1.25 0 0 1 1.25 1.25v3.333a1.25 1.25 0 0 1-1.25 1.25Zm-3.333-5a.417.417 0 0 0-.417.417v3.333A.417.417 0 0 0 1.25 5h3.333A.417.417 0 0 0 5 4.583V1.25a.417.417 0 0 0-.417-.417H1.25ZM11.667 5.833H8.333a1.25 1.25 0 0 1-1.25-1.25V1.25A1.25 1.25 0 0 1 8.333 0h3.334a1.25 1.25 0 0 1 1.25 1.25v3.333a1.25 1.25 0 0 1-1.25 1.25Zm-3.334-5a.417.417 0 0 0-.416.417v3.333A.417.417 0 0 0 8.333 5h3.334a.417.417 0 0 0 .416-.417V1.25a.417.417 0 0 0-.416-.417H8.333ZM18.75 5.833h-3.333a1.25 1.25 0 0 1-1.25-1.25V1.25A1.25 1.25 0 0 1 15.417 0h3.333A1.25 1.25 0 0 1 20 1.25v3.333a1.25 1.25 0 0 1-1.25 1.25Zm-3.333-5A.417.417 0 0 0 15 1.25v3.333a.417.417 0 0 0 .417.417h3.333a.417.417 0 0 0 .417-.417V1.25a.416.416 0 0 0-.417-.417h-3.333ZM4.583 12.917H1.25A1.25 1.25 0 0 1 0 11.667V8.333a1.25 1.25 0 0 1 1.25-1.25h3.333a1.25 1.25 0 0 1 1.25 1.25v3.334a1.25 1.25 0 0 1-1.25 1.25Zm-3.333-5a.417.417 0 0 0-.417.416v3.334a.417.417 0 0 0 .417.416h3.333A.417.417 0 0 0 5 11.667V8.333a.417.417 0 0 0-.417-.416H1.25ZM11.667 12.917H8.333a1.25 1.25 0 0 1-1.25-1.25V8.333a1.25 1.25 0 0 1 1.25-1.25h3.334a1.25 1.25 0 0 1 1.25 1.25v3.334a1.25 1.25 0 0 1-1.25 1.25Zm-3.334-5a.417.417 0 0 0-.416.416v3.334a.417.417 0 0 0 .416.416h3.334a.417.417 0 0 0 .416-.416V8.333a.417.417 0 0 0-.416-.416H8.333ZM18.75 12.917h-3.333a1.25 1.25 0 0 1-1.25-1.25V8.333a1.25 1.25 0 0 1 1.25-1.25h3.333A1.25 1.25 0 0 1 20 8.333v3.334a1.25 1.25 0 0 1-1.25 1.25Zm-3.333-5a.417.417 0 0 0-.417.416v3.334a.417.417 0 0 0 .417.416h3.333a.417.417 0 0 0 .417-.416V8.333a.416.416 0 0 0-.417-.416h-3.333ZM4.583 20H1.25A1.25 1.25 0 0 1 0 18.75v-3.333a1.25 1.25 0 0 1 1.25-1.25h3.333a1.25 1.25 0 0 1 1.25 1.25v3.333A1.25 1.25 0 0 1 4.583 20ZM1.25 15a.417.417 0 0 0-.417.417v3.333a.417.417 0 0 0 .417.417h3.333A.416.416 0 0 0 5 18.75v-3.333A.417.417 0 0 0 4.583 15H1.25ZM11.667 20H8.333a1.25 1.25 0 0 1-1.25-1.25v-3.333a1.25 1.25 0 0 1 1.25-1.25h3.334a1.25 1.25 0 0 1 1.25 1.25v3.333a1.25 1.25 0 0 1-1.25 1.25Zm-3.334-5a.417.417 0 0 0-.416.417v3.333a.417.417 0 0 0 .416.417h3.334a.416.416 0 0 0 .416-.417v-3.333a.417.417 0 0 0-.416-.417H8.333ZM18.75 20h-3.333a1.25 1.25 0 0 1-1.25-1.25v-3.333a1.25 1.25 0 0 1 1.25-1.25h3.333a1.25 1.25 0 0 1 1.25 1.25v3.333A1.25 1.25 0 0 1 18.75 20Zm-3.333-5a.417.417 0 0 0-.417.417v3.333a.417.417 0 0 0 .417.417h3.333a.416.416 0 0 0 .417-.417v-3.333A.417.417 0 0 0 18.75 15h-3.333Z"/></G><Defs><ClipPath id="a"><Path fill="currentColor" d="M0 0h20v20H0z"/></ClipPath></Defs></>,
		explore: <Path fill="currentColor" d="m19.756 18.577-6.392-6.386a7.464 7.464 0 0 0 1.65-4.691c0-4.142-3.361-7.5-7.507-7.5C3.361 0 0 3.358 0 7.5 0 11.642 3.361 15 7.507 15c1.768 0 3.392-.61 4.675-1.632l6.394 6.388a.835.835 0 0 0 1.18-1.179ZM1.668 7.5a5.836 5.836 0 0 1 5.84-5.833A5.836 5.836 0 0 1 13.345 7.5a5.812 5.812 0 0 1-1.72 4.134 5.823 5.823 0 0 1-4.119 1.7A5.837 5.837 0 0 1 1.668 7.5Z"/>,
		recipeBook: <Path fill="currentColor" d="M15.01 0H2.947A3.145 3.145 0 0 0 .85.817C.297 1.33-.008 2.021 0 2.738v15.644c-.002.312.097.618.285.88.187.262.456.469.771.594.3.128.636.172.963.126.328-.046.633-.18.875-.384l5.652-4.538A.778.778 0 0 1 9 14.915c.165 0 .325.051.454.145l5.651 4.537c.245.203.55.335.876.381.327.046.662.004.963-.122a1.73 1.73 0 0 0 .771-.594c.188-.262.287-.568.285-.88V2.738a2.487 2.487 0 0 0-.219-1.046 2.701 2.701 0 0 0-.645-.888 3.023 3.023 0 0 0-.974-.595A3.259 3.259 0 0 0 15.01 0Zm1.891 18.382a.596.596 0 0 1-.105.357.69.69 0 0 1-.307.246.704.704 0 0 1-.707-.096l-5.652-4.528a1.9 1.9 0 0 0-1.151-.382 1.9 1.9 0 0 0-1.152.382l-5.65 4.528a.704.704 0 0 1-.708.096.69.69 0 0 1-.307-.245.596.596 0 0 1-.106-.358V2.738c-.008-.463.186-.91.54-1.244.355-.334.84-.527 1.351-.537H15.01c.511.01.997.203 1.351.537.355.334.549.781.54 1.244v15.644Z"/>,
		connect: <><Path fill="currentColor" d="M17.302.106c-2.494 0-4.522 2.187-4.522 4.875s2.028 4.875 4.522 4.875c2.493 0 4.522-2.187 4.522-4.875S19.795.106 17.302.106Zm0 7.777c-1.428 0-2.589-1.302-2.589-2.902s1.161-2.902 2.589-2.902c1.427 0 2.588 1.302 2.588 2.902s-1.16 2.902-2.588 2.902ZM26.93.762h-.03c-2.164.018-3.908 1.926-3.89 4.252.02 2.315 1.777 4.186 3.927 4.186h.03c1.06-.009 2.05-.465 2.788-1.283.719-.8 1.11-1.855 1.101-2.97C30.837 2.634 29.08.763 26.93.763Zm1.4 5.82c-.37.412-.86.64-1.378.645h-.015c-1.09 0-1.983-.996-1.993-2.23-.01-1.238.874-2.253 1.971-2.262h.015c1.09 0 1.983.997 1.992 2.23a2.374 2.374 0 0 1-.593 1.617Z"/><Path fill="currentColor" d="M27.933 9.694h-1.999a5.734 5.734 0 0 0-3.978 1.608 6.657 6.657 0 0 0-3.453-.963h-2.404a6.662 6.662 0 0 0-3.512.999A5.74 5.74 0 0 0 8.57 9.694H6.573c-3.21 0-5.82 2.664-5.82 5.938v2.515h8.542v1.959h16.012v-1.96h8.446v-2.514c0-3.274-2.611-5.938-5.82-5.938Zm-18.55 6.48H2.685v-.542c0-2.186 1.744-3.965 3.887-3.965H8.57c.954 0 1.828.352 2.506.937a6.972 6.972 0 0 0-1.695 3.57Zm13.99 1.959H11.23v-.85a4.993 4.993 0 0 1 .995-3.006c.41-.551.93-1.012 1.528-1.348a4.76 4.76 0 0 1 2.347-.617h2.404c.82 0 1.593.208 2.272.575a4.988 4.988 0 0 1 2.599 4.395v.85Zm8.446-1.96H25.22a6.986 6.986 0 0 0-1.736-3.617 3.82 3.82 0 0 1 2.45-.89h1.998c2.144 0 3.887 1.78 3.887 3.966v.542ZM7.568.762h-.03C5.374.78 3.63 2.688 3.649 5.014 3.668 7.33 5.425 9.2 7.575 9.2h.03c1.061-.009 2.051-.465 2.788-1.283.72-.8 1.11-1.855 1.101-2.97C11.476 2.634 9.718.763 7.568.763Zm1.4 5.82c-.37.412-.86.64-1.378.645h-.015c-1.09 0-1.983-.996-1.992-2.23-.01-1.238.874-2.253 1.97-2.262h.015c1.09 0 1.983.997 1.993 2.23a2.374 2.374 0 0 1-.593 1.617Z"/></>,
	};

	return (
		<Svg
			width={size}
			height={height}
			color={colors.white}
		>
			{ icons[name] }
		</Svg>
	);
}

export default Icon;