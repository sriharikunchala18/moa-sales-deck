import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Build the replacement string without special chars
dollar_sign = chr(36)
old_pattern = '<div class="stat-number">' + '+' + '</div>'
replacement = '<div class="stat-number">' + dollar_sign + '5B+' + '</div>'

content = content.replace(old_pattern, replacement)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Fixed Annual Sales stat')
