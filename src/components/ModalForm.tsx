import {ChangeEvent, FormEvent, useState} from 'react';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ModalForm() {
    const [formData, setFormData] = useState<FormData>({
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

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        window.location.href = `mailto:marc.tetart@proton.me?subject=${formData.subject}&body=De: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="modalForm absolute w-full h-full flex justify-center items-center bg-bg-black ">
            <form onSubmit={handleSubmit} className="w-[350px] p-4 pt-4 text-primary flex flex-col bg-secondary rounded border-solid border-2" id="form">
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
                    className=" text-primary px-4 py-2 self-center rounded hover:bg-primary hover:text-quinary bg-quinary font-bold"
                >
                    Envoyer
                </button>
            </form>
        </div>
    );
}
