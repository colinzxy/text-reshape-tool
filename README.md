# Text Reshape Converter

A simple web tool that converts line-based text input into a reshaped and sorted row-based format. It takes every group of 7 lines and transforms them into a single row separated by tabs, then orders them by date and time (earliest first).

## How It Works
- Paste your text data into the left-hand input box.
- Click **Convert** to reshape and sort the data.
- Copy the result using the **Copy Output** button.

### Data format expected (each group of 7 lines):
1. Text (e.g., `voice`)
2. Phone number (e.g., `+44 71234 123 123` — spaces will be removed automatically)
3. Date (e.g., `19 Jan 2025`)
4. Time (e.g., `13:40:36`)
5. Text (e.g., `description`)
6. Money (e.g., `£2.50`)
7. Time duration (e.g., `00:01:25`)

The tool reshapes each 7-line group into one row, separated by tabs, and reverses the input order (as the input is provided in reverse chronological order) to sort them from the earliest to the latest.

## Hosting
This site can be hosted using GitHub Pages.

### How to deploy:
1. Clone or fork the repository.
2. Ensure `index.html` is present in the root.
3. Go to **Settings > Pages** in the repository.
4. Under **Branch**, select `main` and `/ (root)`.
5. Save and access your site via the provided GitHub Pages link.

## Example
**Input:**
```
voice
+44 71234 123 123
19 Jan 2025
13:40:36
description
£2.50
00:01:25
```

**Output:**
```
voice	+4471234123123	19 Jan 2025	13:40:36	description	£2.50	00:01:25
```

---

Feel free to contribute or raise issues!
