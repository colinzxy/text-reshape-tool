# Text Reshape Converter

## Description
A clean, web-based tool that processes mixed-format text data, either in 6-line or 7-line blocks, and reshapes them into a standard 7-column tab-separated format. It automatically detects input formats, sanitises phone numbers, and outputs data in chronological order.

## Key Features
- Accepts both 6-line and 7-line entry blocks.
- Automatically detects the format of each block:
  - If the first line contains text (e.g., "From abroad"), it treats it as a 7-line block.
  - If the first line resembles a phone number (digits, spaces, plus signs only), it treats it as a 6-line block and prepends an empty field.
- Cleans phone numbers by removing spaces.
- Reverses input order so the output is sorted from earliest to latest.
- Output is a tab-separated format with each row containing 7 fields.
- Separate files for structure (`index.html`), styling (`style.css`), and functionality (`script.js`).

## Input Structure
### For 7-line entries:
1. Text (e.g., "From abroad")
2. Phone number (e.g., `+44 71234 123 123`)
3. Date (e.g., `19 Jan 2025`)
4. Time (e.g., `13:40:36`)
5. Text description
6. Money (e.g., `£2.50`)
7. Time duration (e.g., `00:01:25`)

### For 6-line entries:
1. Phone number (e.g., `+44 71234 123 123`)
2. Date
3. Time
4. Text description
5. Money
6. Time duration

The script pads 6-line entries with an empty text field to align with 7-line output.

## Example Input (Mixed 7-line and 6-line):
```
From abroad
+44 71234 123 123
19 Jan 2025
13:40:36
Sample text
£2.50
00:01:25
+44 70123 456 789
18 Jan 2025
12:30:15
Another text
£1.75
00:00:50
```

## Example Output:
```
	+4470123456789	18 Jan 2025	12:30:15	Another text	£1.75	00:00:50
From abroad	+4471234123123	19 Jan 2025	13:40:36	Sample text	£2.50	00:01:25
```

## Deployment Instructions
1. Upload `index.html`, `style.css`, and `script.js` to the root of a GitHub repository.
2. Navigate to **Settings > Pages**.
3. Select `main` branch and `/ (root)` folder.
4. Save and access the published page via the provided GitHub Pages link.

## License
Free to use and modify. Contributions welcome!

