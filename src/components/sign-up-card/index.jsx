import { useState } from "react";
import {
    ERROR_ICON_SRC,
    HERO_TITLE,
    HERO_TITLE_THICK,
    INPUTS,
    SUBMIT_BUTTON_TEXT,
    TERMS_INFO_LINK_TEXT,
    TERMS_INFO_TEXT,
} from "./consts";
import * as S from "./styled";
import { useFormContext } from "react-hook-form";
import { createPortal } from "react-dom";

function SignUpCard({ onSubmitHandle }) {
    const {
        formState: { errors },
        register,
    } = useFormContext();

    return (
        <S.SignUpCard>
            <S.HeroTitleSection>
                <S.HeroTitle>
                    <S.HeroTitleThick>{HERO_TITLE_THICK}</S.HeroTitleThick>
                    &nbsp;
                    {HERO_TITLE}
                </S.HeroTitle>
            </S.HeroTitleSection>

            <S.SignUpSection as="form" onSubmit={onSubmitHandle}>
                {INPUTS.map((item) => (
                    <S.InputWrapper
                        key={item.id}
                        $hasError={errors[item.name] ? true : false}
                    >
                        <S.Input
                            type={item.type}
                            placeholder={item.placeholder}
                            {...register(item.name, item.validations)}
                        />
                        {errors[item.name] && (
                            <>
                                <S.ErrorIcon src={ERROR_ICON_SRC} />
                                <S.ErrorMessage>
                                    {errors[item.name].message}
                                </S.ErrorMessage>
                            </>
                        )}
                    </S.InputWrapper>
                ))}

                <S.SubmitButton>{SUBMIT_BUTTON_TEXT}</S.SubmitButton>

                <S.TermsInfo>
                    {TERMS_INFO_TEXT}&nbsp;
                    <S.TermsInfoLink href="#">
                        {TERMS_INFO_LINK_TEXT}
                    </S.TermsInfoLink>
                </S.TermsInfo>
            </S.SignUpSection>
        </S.SignUpCard>
    );
}

export { SignUpCard };
