// make a button component
// it should take a list of styles as prop
// it should render a button with the styles
// but the button has default styles
//

type ButtonProps = {
    children: React.ReactNode;
    border?: boolean | string;
    variant?: "primary" | "secondary" | "tertiary";
    size?: "small" | "medium" | "large";
    onClick?: () => void;
};

const Button = ({
    children,
    border = true,
    variant = "primary",
    size = "medium",
    onClick = () => {},
}: ButtonProps) => {
    // style it like the google button
    const buttonStyles = {
        border: border ? "1px solid #ccc" : "none",
        padding: "10px 20px",
        backgroundColor: "white",
        color: "black",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        outline: "none",
        borderRadius: "5px",
        boxShadow:
            "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)",
        transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
        "&:hover": {
            boxShadow:
                "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
            transform: "translateY(-3px)",
        },
    };

    return (
        <button
            style={{
                ...buttonStyles,
                ...(variant === "primary" && {
                    // use tyler the creator's color palette
                    backgroundColor: "#4285f4",
                    color: "white",
                }),
                ...(variant === "secondary" && {
                    backgroundColor: "#f4b400",
                    color: "white",
                }),
                ...(variant === "tertiary" && {
                    backgroundColor: "green",
                    color: "white",
                }),
                ...(size === "small" && {
                    fontSize: "0.8rem",
                    padding: "5px",
                }),
                ...(size === "large" && {
                    fontSize: "1.5rem",
                    padding: "15px",
                }),
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
