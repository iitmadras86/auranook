import os
import re
import json
import urllib.request
import time

html_dir = 'legacy_html/original-site'
output_dir = 'public/assets/external_downloads'
os.makedirs(output_dir, exist_ok=True)

url_pattern = re.compile(r'https://lh3\.googleusercontent\.com/[a-zA-Z0-9_/-]+')

unique_urls = set()

for root, _, files in os.walk(html_dir):
    for file in files:
        if file.endswith('.html'):
            with open(os.path.join(root, file), 'r') as f:
                content = f.read()
                urls = url_pattern.findall(content)
                for u in urls:
                    unique_urls.add(u)

print(f"Found {len(unique_urls)} unique external URLs.")

mapping = {}

for i, url in enumerate(list(unique_urls)):
    # Create a clean filename
    filename = f"external_asset_{i+1}.jpg"
    filepath = os.path.join(output_dir, filename)
    
    print(f"Downloading {url} to {filepath}")
    try:
        urllib.request.urlretrieve(url, filepath)
        mapping[filename] = url
        time.sleep(0.5)
    except Exception as e:
        print(f"Failed to download {url}: {e}")

with open('public/assets/asset_mapping.json', 'w') as f:
    json.dump(mapping, f, indent=2)

print("Done downloading external assets.")
