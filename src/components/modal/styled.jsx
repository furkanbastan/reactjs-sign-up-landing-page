import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
`;

export const ModalBox = styled.div`
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
    background-color: var(--red);
    opacity: 0.9;
    color: black;
    font-weight: var(--fw-md);
    width: 20vw;
    padding: var(--space-4);
    border-radius: var(--space-3);
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: var(--space-2);
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`;

export const HeaderTitle = styled.h4`
    font-size: var(--fs-lg);
    text-transform: capitalize;
`;

export const HeaderCloseButton = styled.button`
    margin-left: auto;
`;

export const Body = styled.div``;

export const Footer = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.4);
    padding-top: var(--space-2);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--space-3);
    text-transform: capitalize;
    font-size: var(--fs-sm);
    font-weight: var(--fw-lg);
    color: white;
`;

export const FooterButton = styled.button`
    background-color: var(--green);
    padding: var(--space-2);
    border-radius: var(--space-2);
`;

export const FooterCloseButton = styled.button`
    background-color: var(--dark-blue);
    padding: var(--space-2);
    border-radius: var(--space-2);
`;
