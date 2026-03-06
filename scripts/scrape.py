import requests
from bs4 import BeautifulSoup
import json

# List of URLs to scrape
urls = [
    'https://partnerstack.com/articles/ai-affiliate-programs-2025',
    'https://www.wizcase.com/anti-virus/',
    'https://www.wizcase.com/blog/best-antivirus-ios/',
]

# Store scraped data
data = []

for url in urls:
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    title = soup.find('title').get_text()
    content = soup.find('body').get_text()  # You might want to scrape specific elements

    # Append data to the list
    data.append({
        'url': url,
        'title': title,
        'content': content.strip(),
    })

# Output to JSON
with open('scraped_data.json', 'w') as json_file:
    json.dump(data, json_file, indent=2)
