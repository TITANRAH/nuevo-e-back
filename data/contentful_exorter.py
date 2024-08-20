import json
import contentful_management

def create_asset(client, space_id, environment_id, src, new_asset_id='new_asset_id'):
    # Define the header file attributes using the provided entry
    header_file_attributes = {
        'fields': {
            'file': {
                'en-US': {
                    'fileName': 'file.png',
                    'contentType': 'image/png',
                    'upload': src
                }
            }
        }
    }

    # Create the new header asset using the client
    new_asset = client.assets(space_id, environment_id).create(
        new_asset_id,
        header_file_attributes
    )

    object = {
                    'en-US': {
                        'sys': {
                            'type': 'Link',
                            'linkType': 'Asset',
                            'id': new_asset.id # Use asset ID from JSON or fallback
                        }
                    }
                }
    
    return object

def process_content(entry_content):
    if isinstance(entry_content, list):
        # If the content is a list, loop through the items and check each one
        mediaUrls = []
        richTextContent = {
            'nodeType': 'document',
            'content': []
        }

        for content in entry_content:
            if isinstance(content, str) and content.startswith("https"):
                mediaUrls.append(content)
            else:
                # Treat as rich text, you can customize the content structure here
                richTextContent['content'].append({
                    'nodeType': 'paragraph',
                    'content': [{
                        'nodeType': 'text',
                        'value': content,
                        'marks': [],
                        'data': {}
                    }]
                })

        return mediaUrls, richTextContent
    return [], {
        'nodeType': 'document',
        'content': []
    }

typeMap = {
    "notas":"Notas",
    "capsulas": "Cápsulas",
    "charlas": "Charlas"
}

themeMap = {
  "SALUD MENTAL": "salud-mental",
  "SALUD DEL ADULTO": "salud-adulto",
  "SALUD DEL NIÑO": "salud-niño",
  "SALUD DEL ADULTO MAYOR": "salud-adulto-mayor",
  "SALUD DE LA MUJER": "salud-mujer",
  "VETERINARIA": "vet",
  "URGENCIA": "urgencia",
  "BIENESTAR": "bienestar",
  "NUTRICION": "nutricion"
}

# Initialize the Contentful client with the Management API Token
client = contentful_management.Client('CFPAT-xAyxO8Ff_tFu95qeSqjGuPxoE5ResuvV5et5x-nTiuc')

# Define the space and environment you're working with
space_id = 'bfdr3t15r220'
environment_id = 'master'

# Function to upload entries from a JSON file to Contentful
def upload_to_contentful(json_file_path):
    # Read the JSON file
    with open(json_file_path, 'r') as file:
        data = json.load(file)

    # Loop through each entry in the JSON and upload to Contentful
    for entry in data:
        header = {}
        if entry["imageHeader"] != "":
            header = create_asset(client, space_id, environment_id,entry["imageHeader"] ,entry)
            
        thumbnail = create_asset(client, space_id, environment_id,entry["image"] ,entry)
        
        mediaUrl, richTextContent = process_content(entry.get('contenido', []))

        entry_attributes = {
            'content_type_id': 'issuesWikiDocs',  # Replace with your content type ID
            'fields': {
                'title': {
                    'en-US': entry.get('title')
                },
                'header': header,
                'description': {
                    'en-US': entry.get('description', '')
                },
                'subtitle': {
                    'en-US': entry.get('subtitulo', '')
                },
                'uploadDate': {
                    'en-US': entry.get('fecha', '2024-08-01')  # Default or actual date
                },
                'mediaUrl': {
                    'en-US': mediaUrl.append(entry.get('contenido', []))
                },
                'content': {
                    'en-US': richTextContent  # Default or actual rich text content
                },
                'tags': {
                    'en-US': entry.get('tags', [])
                },
                'author': {
                    'en-US': entry.get('author', '')
                },
                'types': {
                    'en-US': themeMap[entry.get('type')]  # Default to "Charlas" if not present
                },
                'thumbnail': thumbnail,
                'temaValue': {
                    'en-US': entry.get('temaValue', 'bienestar')  # Default or actual tema value
                }
            }
        }

        # Create or update the entry in Contentful
        entry_id = entry.get('id', None)  # Use the entry ID from JSON if available
        if entry_id:
            try:
                new_entry = client.entries(space_id, environment_id).create(
                    entry_id,
                    entry_attributes
                )
                print(f"Entry {new_entry} created successfully.")
            except contentful_management.errors.ConflictError:
                print(f"Entry {entry_id} already exists. Updating entry.")
                existing_entry = client.entries(space_id, environment_id).find(entry_id)
                existing_entry.fields = entry_attributes['fields']
                existing_entry.save()
                print(f"Entry {entry_id} updated successfully.")
        else:
            print("Entry ID is missing in the JSON file for one of the entries.")

if __name__ == "__main__":
    # Replace with the path to your JSON file
    json_file_path = 'dataVidaSana.json'
    upload_to_contentful(json_file_path)
