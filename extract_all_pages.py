import json
import subprocess
import time
import re
import os

# All discovered pages from site 1
pages = [
    '/',
    '/about',
    '/contacts',
    '/dokumenty',
    '/katalog',
    '/novosti',
    '/o-proizvodstve',
    '/oplata-i-dostavka',
    '/podstancii-ktp-2ktp-ktpn',
    '/reviews',
    '/services',
    '/sklad-gotovoj-produkcii',
    '/transformator-tmg',
    '/transformatory-maslyanye',
    '/transformatory-suhie',
]

base_url = "https://всетрансформаторы.рф"

def extract_page_content(page_path, html_content, description):
    """Extract structured content from page"""
    
    # Title
    title_match = re.search(r'<title[^>]*>([^<]+)</title>', html_content, re.IGNORECASE)
    title = title_match.group(1) if title_match else ''
    
    # Meta description
    meta_desc_match = re.search(r'<meta\s+name=["\']description["\']\s+content=["\']([^"\']+)["\']', html_content, re.IGNORECASE)
    meta_desc = meta_desc_match.group(1) if meta_desc_match else description
    
    # Meta keywords
    meta_kw_match = re.search(r'<meta\s+name=["\']keywords["\']\s+content=["\']([^"\']+)["\']', html_content, re.IGNORECASE)
    meta_keywords = meta_kw_match.group(1) if meta_kw_match else ''
    
    # H1 headings
    h1_pattern = r'<h1[^>]*>(.*?)</h1>'
    h1_tags = re.findall(h1_pattern, html_content, re.DOTALL | re.IGNORECASE)
    
    # H2 headings
    h2_pattern = r'<h2[^>]*>(.*?)</h2>'
    h2_tags = re.findall(h2_pattern, html_content, re.DOTALL | re.IGNORECASE)
    
    # H3 headings
    h3_pattern = r'<h3[^>]*>(.*?)</h3>'
    h3_tags = re.findall(h3_pattern, html_content, re.DOTALL | re.IGNORECASE)
    
    # Paragraphs with content
    p_pattern = r'<p[^>]*>(.*?)</p>'
    paragraphs = re.findall(p_pattern, html_content, re.DOTALL | re.IGNORECASE)
    
    # Images
    img_pattern = r'<img[^>]*>'
    imgs = re.findall(img_pattern, html_content, re.IGNORECASE)
    
    images = []
    for img in imgs:
        src_match = re.search(r'src=["\']([^"\']+)["\']', img)
        alt_match = re.search(r'alt=["\']([^"\']*)["\']', img)
        if src_match:
            images.append({
                'src': src_match.group(1),
                'alt': alt_match.group(1) if alt_match else ''
            })
    
    # Links
    link_pattern = r'<a[^>]*href=["\']([^"\']+)["\'][^>]*>(.*?)</a>'
    links = re.findall(link_pattern, html_content, re.DOTALL | re.IGNORECASE)
    
    # Clean text from HTML
    def clean_text(text):
        text = re.sub(r'<[^>]+>', ' ', text)
        text = re.sub(r'\s+', ' ', text)
        return text.strip()
    
    return {
        'page': page_path,
        'title': title,
        'meta_description': meta_desc,
        'meta_keywords': meta_keywords,
        'h1': [clean_text(h) for h in h1_tags],
        'h2': [clean_text(h) for h in h2_tags],
        'h3': [clean_text(h) for h in h3_tags],
        'paragraphs': [clean_text(p) for p in paragraphs if len(clean_text(p)) > 50],
        'images': images,
        'links': [{'href': l[0], 'text': clean_text(l[1])[:100]} for l in links if l[0].startswith('/')]
    }

# Process all pages
all_content = []

for i, page in enumerate(pages):
    print(f"Processing page {i+1}/{len(pages)}: {page}")
    url = base_url + page
    
    output_file = f"site_content/page_{i}.json"
    
    # Use CLI to fetch page
    cmd = f'z-ai function -n page_reader -a \'{{"url": "{url}"}}\' -o {output_file}'
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    
    if result.returncode == 0 and os.path.exists(output_file):
        with open(output_file, 'r') as f:
            data = json.load(f)
        
        html = data.get('data', {}).get('html', '')
        desc = data.get('data', {}).get('description', '')
        
        content = extract_page_content(page, html, desc)
        all_content.append(content)
        
        print(f"  - Title: {content['title'][:60]}...")
        print(f"  - H1: {len(content['h1'])}, H2: {len(content['h2'])}, Paragraphs: {len(content['paragraphs'])}, Images: {len(content['images'])}")
    
    time.sleep(0.5)  # Rate limiting

# Save consolidated content
with open('site_structure.json', 'w', encoding='utf-8') as f:
    json.dump(all_content, f, ensure_ascii=False, indent=2)

print(f"\nTotal pages processed: {len(all_content)}")
print("Saved to site_structure.json")
