# Text Reshape Converter

A simple web tool that converts line-based text input into a reshaped row-based format. It takes every group of 8 lines and transforms them into a single row separated by tabs.

## How It Works
- Paste your text data into the left-hand input box.
- Click **Convert** to reshape the data.
- Copy the result using the **Copy Output** button.

### Data format expected:
Each group of 8 lines should be in the following order:
1. Time duration (e.g., `00:01:25`)
2. Text (e.g., `my home`)
3. Phone number (e.g., `+447123123123`)
4. Empty line
5. Date and time (e.g., `17 Feb 2025 13:40:25`)
6. Text (e.g., `Something`)
7. Money value (e.g., `2.21`)
8. Empty line

The tool reshapes each 8-line group into one row, separated by tabs.

## Hosting
This site is hosted using GitHub Pages.

### How to deploy:
1. Clone or fork the repository.
2. Ensure `index.html` is present in the root.
3. Go to **Settings > Pages** in the repository.
4. Under **Branch**, select `main` and `/ (root)`.
5. Save and access your site via the provided GitHub Pages link.

## Example
**Input:**
```
00:01:25
my home
+447123123123

17 Feb 2025 13:40:25
Something
2.21

```

**Output:**
```
00:01:25\tmy home\t+447123123123\t\t17 Feb 2025 13:40:25\tSomething\t2.21\t
```

---

Feel free to contribute or report issues!
