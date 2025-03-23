# Text Reshape Converter

## Description

A simple web-based tool that processes mixed-format text input data (with either 6 or 7 lines per group), cleans phone numbers, aligns fields into a standardised 7-column tab-separated format, and outputs the data in chronological order.

## Features

- Accepts input where each data block is either 6 or 7 lines long.
- Automatically detects whether the first line is a text label (n=7) or a phone number line (n=6).
- Cleans phone numbers by removing spaces.
- Standardises all output rows into a 7-column structure, adding empty placeholders where necessary.
- Reverses input order to display data from earliest to latest.
- Includes a user-friendly interface with copy-to-clipboard functionality.

## Input Structure

For **n = 7** lines per data block:

1. Text (e.g., "From abroad")
2. Phone number (e.g., `+44 71234 123 123`)
3. Date (e.g., `19 Jan 2025`)
4. Time (e.g., `13:40:36`)
5. Text description
6. Money (e.g., `£2.50`)
7. Duration (e.g., `00:01:25`)

For **n = 6** lines per data block:

1. Phone number (e.g., `+44 71234 123 123`)
2. Date (e.g., `19 Jan 2025`)
3. Time (e.g., `13:40:36`)
4. Text description
5. Money (e.g., `£2.50`)
6. Duration (e.g., `00:01:25`)

The tool will insert an empty text field as the first column for all 6-line entries.

## Example Input (Mixed n=7 and n=6):

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

1. Upload `index.html` to the root of a GitHub repository.
2. Navigate to **Settings > Pages**.
3. Select `main` branch and `/ (root)` folder.
4. Save and access the published page via the provided GitHub Pages link.

## License

Free to use and modify. Contributions welcome!

