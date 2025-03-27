"use client"
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react"
import { MessageData } from "../components/Context/context"
import Button from "../components/button/Button";
export default function DashboardPage() {
  const messageContext = useContext(MessageData);

  // Accessing message and setMessage from context
  // const { message, setMessage } = messageContext || {};
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false)



  return (
    <div className="flex h-screen bg-gray-100 p-10">
</div>

  );
}
