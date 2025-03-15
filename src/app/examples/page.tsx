'use client';

import { useState } from "react";
import ButtonChatOnline from "../components/ButtonChatOnline";

interface FormData {
    email: string;
    password: string;
}

function Example() {

    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: ''
    });

    return (
        <div>
            <input type="email" onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email}/><br/>
            <input type="password" onChange={(e) => setFormData({...formData, password: e.target.value})} value={formData.password}/><br/>

            <ButtonChatOnline></ButtonChatOnline>
        </div>
    );
}

export default Example;