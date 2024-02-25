'use client';
// dashboard/resources/page.tsx
import React, { useState, useEffect } from 'react';
// import EventEditForm from '../components/EventEditForm';
// import EventImageForm from '../components/EventImageForm';
// import EventCreateForm from '../components/EventCreateForm';

export interface EventImage {
    id: number;
    caption: string;
    url: string;
}

interface ManageEventImagesProps {
    setShowManageImagesPage: React.Dispatch<React.SetStateAction<boolean>>;
    eventId: number | null;
}
const ManageEventImages: React.FC<ManageEventImagesProps> = ({ eventId, setShowManageImagesPage }) => {
    console.log(eventId)

    const [eventImages, setEventImages] = useState<EventImage[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState<number | null>(null);
    const [eventImageId, setEventImageId] = useState<number | null>(null);
    //   const [showImageForm, setShowImageForm] = useState(false)
    //   const [showEventCreateForm, setShowEventCreateForm] = useState(false)
    //   const [showManageImagesPage, setshowManageImagesPage] = useState(false)

    const openDeleteModal = (id: number) => {
        setDeleteItemId(id);
        setDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setDeleteItemId(null);
        setDeleteModalOpen(false);
    };

    useEffect(() => {
        fetch(`/api/community_events/${eventId}`)
            .then((res) => res.json())
            .then((res) => {


                setEventImages(res.images);
                setLoading(false);

            });

        setLoading(false)
    }, []);


    // const [editingResource, setEditingResource] = useState<Event | null>(null);

    //   const handleEdit = (event: Event) => {
    //     setEditingResource(event);
    //   };

    //   const handleAddImage = (event: Event) => {
    //     setShowImageForm(true)
    //     setEventImageId(event.id)
    //   };

    //   const handleManageImages = (id: number) => {
    //     setshowManageImagesPage(true)
    //   };

    const handleDelete = async () => {
        if (deleteItemId === null) return;

        setLoading(true);

        try {
            const response = await fetch(`/api/community_event_images/${deleteItemId}`, {
                method: "DELETE"
            });

            if (response.ok) {
                // Handle success, e.g., redirect or display a success message
            } else {
                const errorData = await response.json();
                // Handle error
            }
        } catch (error) {
            console.error("An error occurred during form submission:", error);
        } finally {
            closeDeleteModal();
            fetch(`/api/community_events/${eventId}`)
                .then((res) => res.json())
                .then((res) => {
                    setEventImages(res.images);
                    setLoading(false);
                });

        }
    };

    const handleGoBack = () => {
        setShowManageImagesPage(false)
    };



    if (isLoading) return <p>Loading...</p>;
    if (!eventImages) return <p>No profile data</p>;

    return (
        <div className="flex h-screen bg-gray-100 p-10">
            <div className="max-w-3xl w-full space-y-8">
                <h2 className="text-2xl font-bold mb-6">Images</h2>
                <button
                    type="button"
                    onClick={handleGoBack}
                    className="hover:underline text-black font-bold py-2 px-4 rounded mb-2"
                >
                    <span>&larr; &nbsp;</span>Back
                </button>
                <>
                    <div className="space-y-4">
                        {Array.from(Object.values(eventImages)).map((image, index) => (
                            <div key={index} className="bg-white shadow-md rounded px-4 py-3">
                                {/* <h2 className="text-xl font-semibold">{image.title}</h2> */}
                                <img className="py-2" src={image.url}></img>
                                <a href={image.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{image.url}</a>
                                <p>{image.caption}</p>
                                <div className="flex justify-end space-x-2 mt-2">
                                    {/* <button onClick={() => handleAddImage(image)} className="text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded">Add image</button>
                                        <button onClick={() => handleManageImages(image.id)} className="text-white bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded">Manage Images</button>
                                        <button onClick={() => handleEdit(image)} className="text-white bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded">Edit</button> */}
                                    <button onClick={() => openDeleteModal(image.id)} className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>


            </div>

            {isDeleteModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md">
                        <p>Are you sure you want to delete this event?</p>
                        <div className="flex justify-end mt-2">
                            <button onClick={handleDelete} className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded mr-2">Yes</button>
                            <button onClick={closeDeleteModal} className="text-white bg-gray-500 hover:bg-gray-600 px-3 py-1 rounded">No</button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};


export default ManageEventImages;
