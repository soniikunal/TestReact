import React, { useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TinyMCEEditor = ({ value, onChange }) => {
    // useEffect(() => {
    //     debugger
    //     const alert = document.querySelector('body > div.tox.tox-silver-sink.tox-tinymce-aux > div > div > div.tox-notification__body')
    //     const alertBox= document.getElementsByClassName('tox-notifications-container')[0]
    //     if (!alert?.innerHTML.includes('A valid API key is required, starting 2024, to continue using TinyMCE.')) {
    //         alertBox.style.display = 'none'
    //     }
    // }, [])

    const handleEditorChange = (content, editor) => {
        if (onChange) {
            onChange(content);
        }
    };

    return (
        <Editor
            apiKey="YOUR_TINYMCE_API_KEY"
            initialValue={value}
            init={{
                height: 500,
                menubar: true,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                    'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
            onEditorChange={handleEditorChange}
        />
    );
};

export default TinyMCEEditor;
