# Q&A Box Component Documentation

## Overview

The Q&A Box is a clean, minimal component for displaying questions and answers with built-in copy and download functionality. Designed to be visually appealing without loading animations.

---

## Features

✅ **Copy to Clipboard** - One-click copy with success animation  
✅ **Download TXT** - Download answer as .txt file  
✅ **Download PDF** - Print-friendly PDF format  
✅ **6 Theme Support** - Works with all theme options  
✅ **Mobile Responsive** - Perfect on all screen sizes  
✅ **No Loading Animations** - Clean, instant visual display  
✅ **Accessible** - Keyboard navigation, screen reader friendly  

---

## Quick Start

### 1. Include Required Files

```html
<link href="../shared/ui-system.css" rel="stylesheet">
<script src="../shared/components.js"></script>
```

### 2. Create Q&A Box Container

```html
<div id="myQAContainer"></div>
```

### 3. Generate and Display Q&A

```javascript
// Create Q&A box HTML
const qaHTML = AbetworksQA.create("What is your question?", "answer1");

// Insert into page
document.getElementById('myQAContainer').innerHTML = qaHTML;

// Set the answer
AbetworksQA.set('answer1', 'This is the answer text...');
```

---

## API Reference

### `AbetworksQA.create(question, answerId, emptyText)`

Creates Q&A box HTML structure.

**Parameters:**
- `question` (string) - The question text to display
- `answerId` (string, optional) - Unique ID for answer element (default: 'qaAnswer')
- `emptyText` (string, optional) - Text shown when answer is empty (default: 'Answer will appear here...')

**Returns:** HTML string

**Example:**
```javascript
const qaHTML = AbetworksQA.create(
    "What is the cost?", 
    "costAnswer",
    "Generating answer..."
);
```

---

### `AbetworksQA.set(answerId, answerText)`

Sets the answer text.

**Parameters:**
- `answerId` (string) - ID of answer element
- `answerText` (string) - Text to display

**Example:**
```javascript
AbetworksQA.set('answer1', 'All tools are 100% free!');
```

---

### `AbetworksQA.append(answerId, chunkText)`

Appends text to existing answer (useful for streaming responses).

**Parameters:**
- `answerId` (string) - ID of answer element
- `chunkText` (string) - Text chunk to append

**Example:**
```javascript
AbetworksQA.append('answer1', '\n\nAdditional information...');
```

---

### `AbetworksQA.copy(answerId, buttonElement)`

Copies answer to clipboard.

**Parameters:**
- `answerId` (string) - ID of answer element
- `buttonElement` (HTMLElement) - Button that was clicked

**Example:**
```javascript
function onCopyClick(btn) {
    AbetworksQA.copy('answer1', btn);
}
```

---

### `AbetworksQA.download(answerId, format, buttonElement)`

Downloads answer as file.

**Parameters:**
- `answerId` (string) - ID of answer element
- `format` (string) - 'txt' or 'pdf'
- `buttonElement` (HTMLElement) - Button that was clicked

**Example:**
```javascript
// Download as TXT
AbetworksQA.download('answer1', 'txt', btn);

// Download as PDF
AbetworksQA.download('answer1', 'pdf', btn);
```

---

### `AbetworksQA.clear(answerId)`

Clears the answer text.

**Parameters:**
- `answerId` (string) - ID of answer element

**Example:**
```javascript
AbetworksQA.clear('answer1');
```

---

## Complete Example

### HTML Tool with Q&A Box

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Tool with Q&A</title>
    <link href="../shared/ui-system.css" rel="stylesheet">
    <script src="../shared/components.js"></script>
</head>
<body>
    <nav class="navbar">
        <!-- Navbar content -->
    </nav>

    <main class="container">
        <h1>My Tool</h1>
        
        <!-- Tool Input -->
        <div class="tool-workspace">
            <input type="text" id="userInput" class="form-input" 
                   placeholder="Enter your question...">
            <button class="btn btn-primary" onclick="generateAnswer()">
                Generate Answer
            </button>
        </div>
        
        <!-- Q&A Box Container -->
        <div id="qaContainer"></div>
    </main>

    <script>
        async function generateAnswer() {
            const input = document.getElementById('userInput').value;
            
            // Create Q&A box
            const qaHTML = AbetworksQA.create(
                "Your Question:", 
                "mainAnswer"
            );
            document.getElementById('qaContainer').innerHTML = qaHTML;
            
            // Generate answer (example with API call)
            try {
                const response = await fetch('/api/generate', {
                    method: 'POST',
                    body: JSON.stringify({ question: input })
                });
                const data = await response.json();
                
                // Set answer
                AbetworksQA.set('mainAnswer', data.answer);
                
            } catch (error) {
                AbetworksQA.set('mainAnswer', 'Error: ' + error.message);
            }
        }
    </script>
</body>
</html>
```

---

## Styling

The Q&A Box uses CSS variables from the theme system, so it automatically adapts to the selected theme.

### Custom CSS (Optional)

```css
/* Larger Q&A box */
.qa-container {
    max-width: 900px;
    margin: 2rem auto;
}

/* Custom answer font */
.qa-answer {
    font-family: 'Courier New', monospace;
    font-size: 1rem;
}

/* Hide download buttons */
.qa-actions button:last-child {
    display: none;
}
```

---

## Best Practices

### 1. **Use Unique Answer IDs**
```javascript
// ✅ Good
AbetworksQA.create("Q1", "answer1");
AbetworksQA.create("Q2", "answer2");

// ❌ Bad - duplicate IDs
AbetworksQA.create("Q1", "answer");
AbetworksQA.create("Q2", "answer");
```

### 2. **Handle Long Answers**
The answer box has a max-height of 400px with scroll. For very long answers, consider:

```javascript
// Increase max-height via CSS
.qa-answer {
    max-height: 600px;
}
```

### 3. **Streaming Responses**
For AI/streaming responses, use `append()`:

```javascript
async function streamAnswer(answerId, stream) {
    for await (const chunk of stream) {
        AbetworksQA.append(answerId, chunk);
    }
}
```

### 4. **Error Handling**
```javascript
try {
    const answer = await generateAnswer();
    AbetworksQA.set('answer1', answer);
} catch (error) {
    AbetworksQA.set('answer1', 'Error: ' + error.message);
}
```

---

## Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Copy | ✅ 66+ | ✅ 63+ | ✅ 13.1+ | ✅ 79+ |
| Download TXT | ✅ All | ✅ All | ✅ All | ✅ All |
| Download PDF | ✅ All | ✅ All | ✅ All | ✅ All |
| Themes | ✅ All | ✅ All | ✅ All | ✅ All |

---

## Troubleshooting

### Answer not appearing
- Check that `answerId` matches between `create()` and `set()`
- Ensure component.js is loaded before calling functions
- Check browser console for errors

### Copy not working
- Requires HTTPS or localhost
- Some browsers require user gesture (click) to copy
- Fallback: User can manually select and copy

### PDF not downloading
- Popup blocker may prevent print window
- Instruct user to allow popups for your site
- Alternative: Use TXT download

---

## Demo

See the live demo at: `/tools/qa-box-demo/`

---

## Updates

**v1.0** (February 28, 2026)
- Initial release
- Copy, TXT download, PDF download
- 6 theme support
- Mobile responsive

---

## Support

For issues or questions, contact: admin@abetworks.in
