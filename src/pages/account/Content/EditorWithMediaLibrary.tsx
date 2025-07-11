import React, { useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditorWithMediaLibrary = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
    const quillRef = useRef<ReactQuill>(null);

    // Insert image at current cursor position
    const handleInsertImage = () => {
        const url = prompt('Paste image URL from cloud storage:');
        if (url && quillRef.current) {
            const editor = quillRef.current.getEditor();
            const range = editor.getSelection(true);
            editor.insertEmbed(range.index, 'image', url, 'user');
        }
    };

    useEffect(() => {
        const quill = quillRef.current?.getEditor();
        if (quill) {
            const toolbar = quill.getModule('toolbar');
            toolbar.addHandler('image', handleInsertImage);
        }
    }, []);

    return (
        <ReactQuill
            ref={quillRef}
            value={value}
            onChange={onChange}
            modules={{
                toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['link', 'image', 'blockquote', 'code-block'],
                ],
            }}
            formats={[
                'header',
                'bold',
                'italic',
                'underline',
                'list',
                'bullet',
                'link',
                'image',
                'blockquote',
                'code-block',
            ]}
            theme="snow"
        />
    );
};

export default EditorWithMediaLibrary;
