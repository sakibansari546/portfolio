'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
    const [isFlipped, setIsFlipped] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the form data to your server
        console.log('Form submitted:', formData)
        setIsFlipped(true)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    return (
        <div className="perspective-1000 w-full max-w-md mx-auto">
            <div className={`relative transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Front of the card */}
                <div className="bg-gray-800 p-8 rounded-lg shadow-xl backface-hidden">
                    <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-cyan-500 focus:bg-gray-600 focus:ring-0 text-white"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-cyan-500 focus:bg-gray-600 focus:ring-0 text-white"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-cyan-500 focus:bg-gray-600 focus:ring-0 text-white"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                        >
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                        </button>
                    </form>
                </div>

                {/* Back of the card */}
                <div className="bg-gray-800 p-8 rounded-lg shadow-xl backface-hidden absolute inset-0 rotate-y-180 flex flex-col justify-center items-center text-white">
                    <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                    <p className="text-center mb-6">Your message has been sent successfully. I'll get back to you soon!</p>
                    <button
                        onClick={() => setIsFlipped(false)}
                        className="px-4 py-2 bg-cyan-600 rounded-md hover:bg-cyan-700 transition-colors"
                    >
                        Send Another Message
                    </button>
                </div>
            </div>
        </div>
    )
}

