import { css } from "styled-components";

const mixins = {
    flexCenter: css`
    display: flex;
    justfiy-content: center;
    align-items: center;
    `,
    flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    `,
    button: css`
    position: relative;
    text-transform: uppercase;
    line-height: 26px;
    height: 38px;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(
        to right,
        var(--green) 50%,
        var(--white) 50%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200%;
    background-position: right;
    color: var(--black);
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s linear;

    &::after {
        content: '';
        width: 100%;
        height: 2px;
        background: var(--green);
    }

    &:hover {
        background-position: left;
    }
    `,
    textField: css`
    position: relative;
    height: 43px;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    
    input, textarea {
        padding: 0;
        background: transparent;
        color: var(--white);
        font-size: 16px;
        font-weight: 500;
        line-height: 26px;
        letter-spacing: -0.222px;
        text-transform: uppercase;

        &::placeholder {
            color: var(--white);
            opacity: 0.5;
        }
    }
	label {
        border-bottom: 1px inset var(--white);
        height: 100%;
		&::before,
		&::after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 0;
			width: 0%;
			height: 1px;
			transition-duration: 0.5s;
			transition-property: all;
			transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
			transition-delay: 0s;
		}
	}
    input:focus + label::before,
	textarea:focus + label::before{
		width: 100%;
		background: var(--green);
	}
    span, svg {
        opacity: 0;
    }
    span {
        position: absolute;
        top: calc(100% + 5px);
        color: var(--red);
        right: 0;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px; /* 133.333% */
        letter-spacing: -0.167px;
    }
    svg {
        position: absolute;
        top: 0;
        right: 0;
    }
    &.error {
        label::after {
            width: 100%;
            background: var(--red);
        }
        span, svg {
            opacity: 1;
        }
    }`,
    
}

export default mixins