import styled from "styled-components";

export const SignUpCard = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: var(--space-7);
`;

export const HeroTitleSection = styled.div`
    color: white;
    background-color: var(--blue);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-block: var(--space-5);
    border-radius: var(--space-3);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

export const HeroTitle = styled.h5``;

export const HeroTitleThick = styled.span`
    font-weight: var(--fw-lg);
`;

export const SignUpSection = styled.div`
    border-radius: var(--space-3);
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-10);
    padding-block: var(--space-10);
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 85%;
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) =>
        props.$hasError ? "var(--red)" : "var(--grayish-blue)"};
    border-radius: var(--space-2);
    transition: border-color 250ms ease;

    &:hover {
        border-color: ${(props) =>
            props.$hasError ? "var(--red)" : "var(--blue)"};
    }
`;

export const Input = styled.input`
    width: 80%;
    padding-left: var(--space-4);
    padding-block: var(--space-3);
    font-weight: var(--fw-md);
    text-align: left;

    &::placeholder {
        font-weight: var(--fw-sm);
    }
`;

export const ErrorMessage = styled.p`
    position: absolute;
    top: 120%;
    right: 0;
    color: var(--red);
    font-size: var(--fs-sm);
`;

export const ErrorIcon = styled.img`
    position: absolute;
    right: 2%;
    top: 50%;
    transform: translateY(-50%);
`;

export const SubmitButton = styled.button`
    width: 85%;
    background-color: var(--green);
    padding-block: var(--space-5);
    border-radius: var(--space-2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-transform: uppercase;
    font-weight: var(--fw-lg);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

export const TermsInfo = styled.p`
    color: var(--dark-blue);
    font-size: var(--fs-xs);
    margin-top: calc(var(--space-7) * -1);
`;

export const TermsInfoLink = styled.a`
    font-weight: var(--fw-lg);
    color: var(--red);
`;
