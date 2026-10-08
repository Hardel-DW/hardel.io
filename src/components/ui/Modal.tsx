import type React from "react";
import Icon from "@/components/ui/Icon";

type ModalProps = { label: string; onClose: () => void; onKeyDown?: (event: React.KeyboardEvent<HTMLDialogElement>) => void; children: React.ReactNode };

const show = (node: HTMLDialogElement | null) => {
    if (node && !node.open) node.showModal();
};

const closeOnBackdrop = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) event.currentTarget.close();
};

const closeDialog = (event: React.MouseEvent<HTMLButtonElement>) => event.currentTarget.closest("dialog")?.close();

export default function Modal({ label, onClose, onKeyDown, children }: ModalProps) {
    return (
        <dialog
            ref={show}
            aria-label={label}
            onClose={onClose}
            onClick={closeOnBackdrop}
            onKeyDown={onKeyDown}
            className="m-0 h-dvh max-h-none w-dvw max-w-none place-items-center bg-transparent p-4 text-cream-200 transition-[opacity,display,overlay] transition-discrete duration-200 ease-soft open:grid starting:open:opacity-0 sm:p-10">
            <button
                type="button"
                aria-label="Close"
                onClick={closeDialog}
                className="fixed top-4 right-4 z-10 grid size-11 cursor-pointer place-items-center rounded-full border border-line bg-bark-900 text-cream-400 transition-colors hover:bg-bark-800 hover:text-cream-50">
                <Icon name="close" />
            </button>
            {children}
        </dialog>
    );
}
