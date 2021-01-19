import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const Button = ({ text }: Props) => (
    <button className="button">
        <h5 className="button-content">
            { text }
        </h5>
    </button>
);

export default Button;