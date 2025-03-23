function convertText() {
    const input = document.getElementById('inputText').value.trim().split('\n');
    let rows = [];
    let i = 0;

    while (i < input.length) {
        const firstLine = input[i].trim();

        const isTextLine = /[a-zA-Z]/.test(firstLine);
        const isLikelyPhone = /^[\d\s\+]+$/.test(firstLine);

        let group = [];

        if (isTextLine) {
            group = input.slice(i, i + 7);
            group[1] = group[1].replace(/\s+/g, '');
            i += 7;
        } else if (isLikelyPhone) {
            group = [''].concat(input.slice(i, i + 6));
            group[1] = group[1].replace(/\s+/g, '');
            i += 6;
        } else {
            alert('Unrecognised format at line: ' + (i + 1));
            break;
        }

        if (group.length === 7) {
            rows.push(group);
        }
    }

    rows.reverse();

    const output = rows.map(row => row.join('\t')).join('\n');

    document.getElementById('outputText').value = output.trim();
}

function copyOutput() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Output copied to clipboard!');
}
