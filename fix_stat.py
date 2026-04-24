import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the missing + 
content = re.sub(r'<div class="stat-number">\+</div>', '<div class="stat-number">+</div>', content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Fixed + stat')
