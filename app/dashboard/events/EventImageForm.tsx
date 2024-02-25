
import React, { useState } from 'react';
import { Event } from './page';

interface EventImageFormProps {
    initialResource?: {
        community_event_id: number;
        url: string;
        caption: string;
    };
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
    setShowImageForm: React.Dispatch<React.SetStateAction<boolean>>;
    eventId: number | null;
}

const EventImageForm: React.FC<EventImageFormProps> = ({ initialResource = { community_event_id: '', url: '', caption: '' }, setLoading, setEvents, setShowImageForm, eventId }) => {
    const [resource, setResource] = useState({
        community_event_id: initialResource?.community_event_id || eventId || '',
        url: initialResource?.url || '',
        caption: initialResource?.caption || '',
    });
    const [errors, setErrors] = useState<string[]>([]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setResource({ ...resource, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors([]);


        const formDataToSend = new FormData();

        Object.entries(resource).forEach(([key, value]) => {
            formDataToSend.append(key, String(value));
        });

        try {
            const response = await fetch(`/api/community_events/${eventId}/images`, {
                method: "POST",
                body: formDataToSend,
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setLoading(true)
                setShowImageForm(false)
                alert("Image added!");
                fetch('/api/community_events')
                    .then((res) => res.json())
                    .then((res) => {
                        setEvents(res.community_events);
                    });

                // Handle success, e.g., redirect or display a success message
            } else {
                const errorData = await response.json();
                console.log(errorData);
                setErrors(errorData.errors);
            }
        } catch (error) {
            console.error("An error occurred during form submission:", error);
        } finally {

            setLoading(false)
        }
    };

    const handleGoBack = () => {
        setShowImageForm(false)
    };


    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <button
                type="button"
                onClick={handleGoBack}
                className="hover:underline text-black font-bold py-2 px-4 rounded mb-2"
            >
                <span>&larr; &nbsp;</span>Back
            </button>
            <ul className="text-red-500">
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
            <div>
                <label htmlFor="url" className="block text-lg font-medium text-gray-700">Link</label>
                <input
                    type="text"
                    name="url"
                    id="link"
                    value={resource.url}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 shadow-sm rounded-md"
                />
            </div>
            <div>
                <label htmlFor="title" className="block text-lg font-medium text-gray-700">Caption</label>
                <input
                    type="text"
                    name="caption"
                    id="title"
                    value={resource.caption}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 shadow-sm rounded-md"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Save Resource
            </button>
        </form>
    );
};

export default EventImageForm;
