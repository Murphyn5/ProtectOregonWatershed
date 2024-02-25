'use client';
import { Input, Textarea, Button, Spacer } from '@nextui-org/react';
import { useState } from 'react';


interface FormData {
  title: string;
  days: string;
  dates: string;
  times: string;
  location: string;
  description: string;
  link: string;
}

interface EventCreateForm {
  setShowEventCreateForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const EventCreateForm: React.FC<EventCreateForm> = ({ setShowEventCreateForm }) => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    days: '',
    dates: '',
    times: '',
    location: '',
    description: '',
    link: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);



  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setErrors([]);

    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch("/api/community_events/new", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert("Post Successful!");
        setShowEventCreateForm(false)
        // Handle success, e.g., redirect or display a success message
      } else {
        const errorData = await response.json();
        console.log(errorData);
        setErrors(errorData.errors);
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (key: keyof FormData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleGoBack = () => {
    setShowEventCreateForm(false)
  };

  return (
    <div className="py-10 px-5 ">

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
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        {/* Input fields go here, similar to the example below */}
        {/* <Input
          fullWidth
          color="primary"
          size="lg"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => handleChange('title', e.target.value)}
        />
        <Input
          fullWidth
          color="primary"
          size="lg"
          placeholder="Days"
          value={formData.days}
          onChange={(e) => handleChange('days', e.target.value)}
        />
        <Input
          fullWidth
          color="primary"
          size="lg"
          placeholder="Dates"
          value={formData.dates}
          onChange={(e) => handleChange('dates', e.target.value)}
        />
        <Input
          fullWidth
          color="primary"
          size="lg"
          placeholder="Times"
          value={formData.times}
          onChange={(e) => handleChange('times', e.target.value)}
        />
        <Input
          fullWidth
          color="primary"
          size="lg"
          placeholder="Location"
          value={formData.location}
          onChange={(e) => handleChange('location', e.target.value)}
        />
        <Input
          fullWidth
          color="primary"
          size="lg"
          placeholder="Description"
          value={formData.description}
          onChange={(e) => handleChange('description', e.target.value)}
        />
        <Input
          fullWidth
          color="primary"
          size="lg"
          placeholder="Link"
          value={formData.link}
          onChange={(e) => handleChange('link', e.target.value)}
        />


        <Button type="submit" color="primary" size="lg" disabled={isLoading}>
          Submit
        </Button> */}

        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            className="mt-1 block w-full border-gray-300 shadow-sm rounded-md"
          />
        </div>
        <div>
          <label htmlFor="url" className="block text-lg font-medium text-gray-700">Link</label>
          <input
            type="text"
            name="link"
            id="link"
            value={formData.link}
            onChange={(e) => handleChange('link', e.target.value)}
            className="mt-1 block w-full border-gray-300 shadow-sm rounded-md"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            className="mt-1 block w-full border-gray-300 shadow-sm rounded-md"
            rows={3}
          ></textarea>
        </div>
        <div>
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">Days</label>
          <textarea
            name="days"
            id="days"
            value={formData.days}
            onChange={(e) => handleChange('days', e.target.value)}
            className="mt-1 block w-full border-gray-300 shadow-sm rounded-md"
            rows={3}
          ></textarea>
        </div>
        <div>
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">Dates</label>
          <textarea
            name="dates"
            id="dates"
            value={formData.dates}
            onChange={(e) => handleChange('dates', e.target.value)}
            className="mt-1 block w-full border-gray-300 shadow-sm rounded-md"
            rows={3}
          ></textarea>
        </div>
        <div>
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">Times</label>
          <textarea
            name="times"
            id="times"
            value={formData.times}
            onChange={(e) => handleChange('times', e.target.value)}
            className="mt-1 block w-full border-gray-300 shadow-sm rounded-md"
            rows={3}
          ></textarea>
        </div>
        <div>
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">Location</label>
          <textarea
            name="location"
            id="location"
            value={formData.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className="mt-1 block w-full border-gray-300 shadow-sm rounded-md"
            rows={3}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}

export default EventCreateForm;
