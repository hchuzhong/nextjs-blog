"use client";

import { addPost } from "@/lib/action";
import { useCallback, useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

export default function AdminPostForm({userId}: {userId: string}) {
    const [markdownText, setMarkdownText] = useState('');
    const onChange = useCallback((value: string) => {
        setMarkdownText(value);
    }, []);
    const initialFormData = {
        title: '',
        slug: '',
        img: '',
        userId: userId,
        error: '',
    };
    const [formData, setFormData] = useState(initialFormData);
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = {...formData, desc: markdownText};
        const result = await addPost(postData);
        if (result?.error) {
            setFormData({...formData, error: result?.error});
        } else {
            setFormData(initialFormData);
            setMarkdownText('');
        }
    };
    return (
        <div className="flex flex-col items-center mb-5">
            <h3>Add New Post</h3>
            <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
                <input className="form-input-admin-tailwind" type="text" placeholder="Blog Title" name="title" value={formData.title} onChange={handleInputChange} />
                <input className="form-input-admin-tailwind" type="text" placeholder="Blog Slug" name="slug" value={formData.slug} onChange={handleInputChange} />
                <input className="form-input-admin-tailwind" type="text" placeholder="Img (Optional)" name="img" value={formData.img} onChange={handleInputChange} />
                <div className="prose max-w-full bg-white rounded"><SimpleMDE value={markdownText} onChange={onChange} /></div>
                <button className="form-button-tailwind">Add</button>
                {formData?.error && <div className="text-red-500">{formData.error}</div> }
            </form>
        </div>
    );
}