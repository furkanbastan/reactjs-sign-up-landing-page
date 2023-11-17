import { Modal } from "@/components/modal";
import { SignUpCard } from "@/components/sign-up-card";
import { SignUpHero } from "@/components/sign-up-hero";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

function SignUpPage() {
    const [modal, setModal] = useState(false);
    const methods = useForm();

    const onSubmitHandle = (data) => {
        setModal(true);
    };

    const onClickCloseHandle = () => setModal(false);

    const onClickContinueHandle = () => {
        methods.reset();
        setModal(false);
    };

    return (
        <main className="sign-up-page">
            <SignUpHero />
            <FormProvider {...methods}>
                <SignUpCard
                    onSubmitHandle={methods.handleSubmit(onSubmitHandle)}
                />
            </FormProvider>
            {modal && (
                <Modal>
                    <Modal.Header onClickClose={onClickCloseHandle}>
                        Successiful
                    </Modal.Header>
                    <Modal.Body>submit form?</Modal.Body>
                    <Modal.Footer
                        onClickClose={onClickCloseHandle}
                        onClickContinue={onClickContinueHandle}
                    >
                        submit
                    </Modal.Footer>
                </Modal>
            )}
        </main>
    );
}

export { SignUpPage };
