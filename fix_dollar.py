with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Use chr to build the pattern to avoid escaping issues
old = '<div class="stat-number">' + '+' + '</div>'
new = '<div class="stat-number">+' + '</div>'

if old in content:
    content = content.replace(old, new)
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print('Successfully fixed +')
else:
    print('Pattern not found')
    idx = content.find('Annual Sales')
    if idx > 0:
        print('Context:', repr(content[idx-100:idx+50]))
