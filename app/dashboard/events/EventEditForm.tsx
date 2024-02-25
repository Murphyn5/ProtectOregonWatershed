
import React, { useState } from 'react';
import { Event } from './page';

interface EventEditFormProps {
  initialResource?: {
    id: number;
    title: string;
    link: string;
    description: string;
    location: string;
    days: string;
    dates: string;
    times: string;
  };
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
  setEditingResource: React.Dispatch<React.SetStateAction<Event | null>>;
}

const EventEditForm: React.FC<EventEditFormProps> = ({ initialResource = { id: null, title: '', link: '', description: '', location: '', days: '', dates: '', times: '' }, setLoading, setEvents, setEditingResource }) => {
  const [resource, setResource] = useState(initialResource);
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
      const response = await fetch(`/api/community_events/${resource.id}`, {
        method: "PUT",
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setLoading(true)
        setEditingResource(null)
        alert("Update Successful!");

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
    setEditingResource(null)
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
        <label htmlFor="title" className="block text-lg font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={resource.title}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 shadow-sm rounded-md"
        />
      </div>
      <div>
        <label htmlFor="url" className="block text-lg font-medium text-gray-700">Link</label>
        <input
          type="text"
          name="link"
          id="link"
          value={resource.link}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 shadow-sm rounded-md"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          id="description"
          value={resource.description}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 shadow-sm rounded-md"
          rows={3}
        ></textarea>
      </div>
      <div>
        <label htmlFor="description" className="block text-lg font-medium text-gray-700">Days</label>
        <textarea
          name="days"
          id="days"
          value={resource.days}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 shadow-sm rounded-md"
          rows={3}
        ></textarea>
      </div>
      <div>
        <label htmlFor="description" className="block text-lg font-medium text-gray-700">Dates</label>
        <textarea
          name="dates"
          id="dates"
          value={resource.dates}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 shadow-sm rounded-md"
          rows={3}
        ></textarea>
      </div>
      <div>
        <label htmlFor="description" className="block text-lg font-medium text-gray-700">Times</label>
        <textarea
          name="times"
          id="times"
          value={resource.times}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 shadow-sm rounded-md"
          rows={3}
        ></textarea>
      </div>
      <div>
        <label htmlFor="description" className="block text-lg font-medium text-gray-700">Location</label>
        <textarea
          name="location"
          id="location"
          value={resource.location}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 shadow-sm rounded-md"
          rows={3}
        ></textarea>
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

export default EventEditForm;
