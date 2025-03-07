import React, {ChangeEvent, FormEvent, useState} from 'react';
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



emailjs.init('9XPGB5dqKSBZ4B9U1');


type EmailJSParams = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type ModalFormProps = {
    toggleModal: boolean;
    setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalForm({toggleModal, setToggleModal}: ModalFormProps) {
    const [formData, setFormData] = useState<EmailJSParams>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const [isSending, setIsSending] = useState(false);


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.send('service_fwl70hs', 'template_ni0qvtx', formData)
            .then((result) => {
                console.log('E-mail envoyé avec succès:', result.text);
                toast.success('E-mail envoyé avec succès ! 🎉', {
                    position: "top-right",
                    autoClose: 3000,
                });
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            })
            .catch((error) => {
                console.error('Erreur lors de l\'envoi de l\'e-mail:', error.text);
                toast.error('Erreur lors de l\'envoi de l\'e-mail 😞', {
                    position: "top-right",
                    autoClose: 3000,
                });
            })
            .finally(() => {
                setIsSending(false);
                setToggleModal(false);
            });
    };

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setToggleModal(false);
        }
    };

    return (
        <div onClick={handleClickOutside} className={`modalForm absolute z-100 w-full h-full justify-center items-center bg-bg-black ${toggleModal ? 'flex' : 'hidden'}`}>
            <form onSubmit={handleSubmit} className="w-[350px] p-4 pt-4 text-primary flex flex-col bg-secondary rounded border-solid border-2 relative" id="form">
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2">Nom:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded bg-quinary"
                        placeholder="Rory MclLroy"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded bg-quinary"
                        placeholder="mon@email.com"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="subject" className="block mb-2">Sujet:</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded bg-quinary"
                        placeholder="Sujet"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block mb-2">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full p-2 border rounded bg-quinary"
                        placeholder="Mon message"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSending}
                    className={`text-red-400 px-4 py-2 self-center rounded hover:bg-primary hover:text-quinary bg-quinary font-bold ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {isSending ? 'Envoi en cours...' : 'Envoyer'}
                </button>
                <i className="fa-solid fa-xmark absolute right-4 text-2xl" onClick={() => setToggleModal(false)}></i>
            </form>
        </div>
    );
}
