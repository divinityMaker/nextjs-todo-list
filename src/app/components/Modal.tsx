"use client";

import { useState } from "react";

interface IModal {
    title?: string;
    bodyContent?: React.ReactElement;
    isOpen?: boolean;
    footer?: React.ReactElement;
    onClose?: () => void;
    onSubmit?: () => void;
}

const Modal: React.FC<IModal> = ({
    title,
    bodyContent,
    isOpen,
    footer,
    onClose,
    onSubmit
}) => {

    const [showModal, setShowModal] = useState(false);

    if (!isOpen) return null;

    return (
        <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70 flex justify-center items-center">
            <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
                <div
                className={`
                translante 
                duration-300 
                h-full 
                ${showModal ? "translate-y-0" : "translate-y-full"}
                ${showModal ? "opacity-100" : "opacity-0"}
            `}
                >
                    <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;