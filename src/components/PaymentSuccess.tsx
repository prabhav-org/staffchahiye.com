import { useNavigate } from "react-router-dom";

const modalOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
};

const modalContentStyle: React.CSSProperties = {
    background: 'white',
    padding: '2rem',
    borderRadius: '8px',
    maxWidth: '500px',
    textAlign: 'center',
    color: 'black',
};

const buttonStyle: React.CSSProperties = {
    marginTop: '1.5rem',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#f97316',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
};

export function PaymentSuccess() {
    const navigate = useNavigate();

    const handleGoToMainPage = () => {
        navigate("/");
    };

    return (
        <div style={modalOverlayStyle}>
            <div style={modalContentStyle}>
                <h2>Payment Successful!</h2>
                <p>
                    Sit tight, you'll get relevant candidates soon direct to your screen on whatsapp in a few minutes. Your website dashboard, COMING SOON!
                </p>
                <button style={buttonStyle} onClick={handleGoToMainPage}>Go to main page</button>
            </div>
        </div>
    );
}
