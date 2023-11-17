import { createPortal } from "react-dom";
import * as S from "./styled";
import { useEffect } from "react";

function Modal({ children }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "visible";
        };
    }, []);

    return createPortal(
        <S.Modal>
            <S.ModalBox>{children}</S.ModalBox>
        </S.Modal>,
        document.getElementById("root-modal")
    );
}

Modal.Header = ({ children, onClickClose }) => {
    return (
        <S.Header>
            <S.HeaderTitle>{children}</S.HeaderTitle>
            <S.HeaderCloseButton onClick={onClickClose}>X</S.HeaderCloseButton>
        </S.Header>
    );
};

Modal.Body = ({ children }) => {
    return <S.Body>{children}</S.Body>;
};

Modal.Footer = ({ children, onClickClose, onClickContinue }) => {
    return (
        <S.Footer>
            <S.FooterButton onClick={onClickContinue}>
                {children}
            </S.FooterButton>
            {onClickClose && (
                <S.FooterCloseButton onClick={onClickClose}>
                    Kapat
                </S.FooterCloseButton>
            )}
        </S.Footer>
    );
};

export { Modal };
