interface ButtonProps{
    text?: string;
    click?: () => void;
    children?: string;
}

function Button({ text, click, children }:ButtonProps ) {
    return (
        <button onClick={click}>{text}{children}</button>
    );
}

export default Button