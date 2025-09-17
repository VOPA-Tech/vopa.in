import React, { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImagePickerModal from './ImagePickerModal';

const EditorWithMediaLibrary = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
    const quillRef = useRef<ReactQuill>(null);
    const [showImagePicker, setShowImagePicker] = useState(false);

    // Determine folder based on current route
    const getFolder = () => {
        const path = window.location.pathname;

        if (path.includes('/events')) return 'events';
        if (path.includes('/press_releases')) return 'press releases';
        return 'blogs'; // default
    };

    const insertImage = (url: string) => {
        if (quillRef.current) {
            const editor = quillRef.current.getEditor();
            const range = editor.getSelection(true);

            if (range) {
                editor.insertEmbed(range.index, 'image', url, 'user');
                editor.setSelection({ index: range.index + 1, length: 0 });
            } else {
                const length = editor.getLength();
                editor.insertEmbed(length - 1, 'image', url, 'user');
                editor.setSelection({ index: length, length: 0 });
            }
        }
    };

    const handleInsertImage = () => {
        setShowImagePicker(true);
    };

    useEffect(() => {
        const quill = quillRef.current?.getEditor();
        if (quill) {
            const toolbar = quill.getModule('toolbar');
            toolbar.addHandler('image', handleInsertImage);
        }
    }, []);

    return (
        <>
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

            <ImagePickerModal
                show={showImagePicker}
                folder={getFolder()} // dynamically set folder
                onClose={() => setShowImagePicker(false)}
                onSelect={(url) => {
                    insertImage(url);
                    setShowImagePicker(false);
                }}
            />
        </>
    );
};

export default EditorWithMediaLibrary;
