content = open('index_correct.html','r',encoding='utf-8').read()
open_count = content.count('<div')
close_count = content.count('</div>')
print(f'<div count: {open_count}, </div> count: {close_count}, Balanced: {open_count==close_count}')
