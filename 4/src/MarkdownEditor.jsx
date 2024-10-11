import React, { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({ onContentChange }) => {
  // BEGIN (write your solution here)
  const editorRef = useRef(null);

  useEffect(() => {
    const editorInstance = new Editor({
      el: editorRef.current,
      hideModeSwitch: true,
    });

    editorInstance.addHook('change', () => {
      const content = editorInstance.getMarkdown();
      if (onContentChange) {
        onContentChange(content);
      }
    });
  }, [onContentChange]);

  return <div ref={editorRef} />;
  // END
};

export default MarkdownEditor;
